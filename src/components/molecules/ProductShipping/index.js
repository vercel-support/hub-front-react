import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { store } from "../../../store";
import { Input } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from "@material-ui/core/Button";
import ProductShippingStyled, {
  ShippingCardStyled,
  WithdrawStyled,
} from "./styles";
import CircularProgress from "@material-ui/core/CircularProgress";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;
import axios from "axios";
import { addToCart as gaAddToCart } from "../../../../lib/ga";

const addToCart = async (
  myStore,
  product,
  shippingType,
  clearFirst,
  dispatch
) => {
  const products = JSON.parse(localStorage.getItem("productList") || "[]");

  if (products.length > 0 && myStore.id !== "cd") {
    if (products.find((p) => p.storeId !== myStore.id && p.storeId !== "cd"))
      return {
        isValid: false,
        message: `Você já escolheu produtos de outra loja, portanto não pode adicionar produtos da loja ${myStore.name} no mesmo carrinho. Deseja manter o carrinho atual?`,
        cancelMessage: `Sim`,
        confirmMessage: `Não`,
      };
  }

  if (
    products.length > 0 &&
    !Object.keys(products).filter(
      (sku) => products[sku].shippingType === shippingType
    ).length
  )
    return shippingType === "delivery"
      ? {
          isValid: false,
          message: "Você já escolheu produtos para retirar na loja, portanto não pode escolher outro produto neste mesmo carrinho para receber em casa. Deseja continuar com seu carrinho atual e retirar na loja?",
          cancelMessage: `Sim`,
          confirmMessage: `Não`,
        }
      : {
          isValid: false,
          message: "Você já escolheu produtos para receber em casa, portanto não pode escolher outro produto neste mesmo carrinho para ir retirar na loja. Deseja continuar com seu carrinho atual e receber em casa?",
          cancelMessage: `Sim`,
          confirmMessage: `Não`,
      };

  const cartId = localStorage.getItem("cartId");
  product.storeId = myStore.id;
  product.shippingType = shippingType;
  product.quantity = 1;

  dispatch({ type: "LOADING_DATA", payload: true });
  try {
    let serviceResponse = await axios.post(`${API_URL}/cart`, {
      products: [product],
      cartId,
      clearFirst,
    });
    dispatch({ type: "LOADING_DATA", payload: false });
    if (
      serviceResponse.data &&
      (serviceResponse.status === 200 || serviceResponse.status === 201)
    ) {
      localStorage.setItem(
        "productList",
        JSON.stringify(serviceResponse.data.products)
      );
      localStorage.setItem("cartId", serviceResponse.data.cartId);
    }
  } catch (error) {
    dispatch({ type: "LOADING_DATA", payload: false });
  }

  gaAddToCart(window.dataLayer.push, product);
  return {
    isValid: true,
  };
};

const requestStockAvailability = async (postalCode, storeId, sku) => {
  try {
    let url = !postalCode
      ? `${API_URL}/catalogs/products/delivery-stocks?storeId=${storeId}&sku=${sku}`
      : `${API_URL}/catalogs/products/delivery-stocks?postalCode=${postalCode}&storeId=${storeId}&sku=${sku}`;
    let response = await axios.get(url);
    return response.data && response.data.status === 200 ? response.data : null;
  } catch (error) {
    return null;
  }
};

const ActionDialog = ({ data }) => {
  const [open, setOpen] = useState(true);
  return (
      <Dialog open={open}>
        <DialogTitle id="alert-dialog-title">
          OPS! 
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {data.message}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={data.cancel} color="primary">
            {data.cancelMessage}
          </Button>
          <br />
          <Button onClick={data.confirm} color="primary" autoFocus>
            {data.confirmMessage}
          </Button>
        </DialogActions>
      </Dialog>
  );
};

const Withdraw = ({ product }) => {
  const router = useRouter();
  const { state, dispatch } = useContext(store);
  const { myStore } = state;
  const [savedStore, setSavedStore] = useState({ name: "Centro de Distribuição", id: "cd" });
  const [available, setAvailable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [validAction, setValidAction] = useState({
    isValid: true,
    message: "",
    confirmMessage: "",
    cancelMessage: "",
  });

  useEffect(() => {
    const lsStore = localStorage.getItem("myStore");
    if(lsStore){
      setSavedStore(JSON.parse(lsStore));
    }
  }, []);

  useEffect(() => {
    if (savedStore && product) {
      setLoading(true);
      requestStockAvailability(null, savedStore.id, product.sku).then(
        (options) => {
          setLoading(false);
          if (options && options.data) {
            setAvailable(options.data.pickupAvailable);
          }
        }
      );
    }
  }, [savedStore, product])

  useEffect(() => {
    if (myStore && product) {
      setLoading(true);
      requestStockAvailability(null, myStore.id, product.sku).then(
        (options) => {
          setLoading(false);
          if (options && options.data) {
            setAvailable(options.data.pickupAvailable);
          }
        }
      );
    }
    if(myStore && myStore.id !== "cd"){
      setSavedStore(myStore);
    }
  }, [myStore]);

  const clearCartAndRetryAddToCart = async () => {
    localStorage.removeItem("productList");
    await addToCart(myStore, product, "pickup", true, dispatch);
    router.push("/cart", undefined, { shallow: true });
  };

  const cancelAction = () => {
    setValidAction({
      isValid: true,
      message: "",
      confirmMessage: "",
      cancelMessage: "",
    });
  };

  const pickupClick = async () => {
    let cartActionResponse = await addToCart(
      savedStore,
      product,
      "pickup",
      false,
      dispatch
    );
    if (cartActionResponse.isValid)
      router.push("/cart", undefined, { shallow: true });
    else
      setValidAction({
        ...cartActionResponse,
        confirm: clearCartAndRetryAddToCart,
        cancel: cancelAction,
      });
  };

  const getStoreDistance = () => {
    if (savedStore && savedStore.distance)
      return savedStore.distance >= 1000
        ? `${(savedStore.distance / 1000).toFixed(1)} km`
        : `${savedStore.distance} m`;
  };

  const handleChangeStoreClick = () => {
    dispatch({ type: "SET_GEOLOCATION_OPEN", payload: true });
  }

  return (
    <WithdrawStyled available={available}>
      { !validAction.isValid ? <ActionDialog data={validAction}/> : null }
      { savedStore.id === "cd" ? 
        <p>Encontre a loja mais próxima para retirada</p> :
        <p>
          <span className="stock">
            {available ? "Retire hoje " : "Sem estoque "}
          </span>
          na loja
          <span className="store"> {savedStore.name}</span>
          <p>
          {getStoreDistance() ? `A ${getStoreDistance()} de você` : null}
          </p>
        </p>
      }

      <span className="change" onClick={handleChangeStoreClick} >(alterar loja)</span>
      {available && (
        <span className="available">
         pedido disponível em até 1 hora
        </span>
      )}
      {loading ? (
        <CircularProgress />
      ) : (
        <button disabled={!available} onClick={pickupClick}>
          comprar e retirar na loja
        </button>
      )}
    </WithdrawStyled>
  );
};

const ShippingCard = ({ product, updatePrices }) => {
  const router = useRouter();
  const { state, dispatch } = useContext(store);
  const { myStore, geo } = state;
  const [savedStore, setSavedStore] = useState({ name: "Centro de Distribuição", id: "cd" });
  const [shippingPostalCode, setShippingPostalCode] = useState(null);
  const [deliveryOptionsAvailable, setDeliveryOptionsAvailable] = useState({
    deliveryAvailable: false,
    expressDeliveryAvailable: false,
  });
  const [validAction, setValidAction] = useState({
    isValid: true,
    message: "",
    confirmMessage: "",
    cancelMessage: "",
  });
  const [loading, setLoading] = useState(false);
  const [inputPostalCode, setInputPostalCode] = useState("");

  const checkStateAndSetStore = (postalCode) => {
    if (!myStore || myStore.id === "cd") {
      updatePrices();
      dispatch({ type: "CHANGE_POSTALCODE", payload: postalCode });
    }
  };

  useEffect(() => {
    setInputPostalCode(localStorage.getItem("postalcode-delivery") || "");
    const lsPostalCode = localStorage.getItem("postalcode-delivery");
    if (lsPostalCode) {
      setShippingPostalCode(lsPostalCode);
      checkStateAndSetStore(lsPostalCode);
    }
    const lsStore = localStorage.getItem("myStore");
    if(lsStore){
      setSavedStore(JSON.parse(lsStore));
    }
  }, []);

  useEffect(() => {
    if (savedStore && product && shippingPostalCode) {
      setLoading(true);
      requestStockAvailability(
        shippingPostalCode,
        savedStore.id,
        product.sku
      ).then((options) => {
        setLoading(false);
        if (options && options.data) {
          setDeliveryOptionsAvailable(options.data);
        }
      });
    }
  }, [savedStore, product, shippingPostalCode]);

  useEffect(() => {
    if(myStore && myStore.id !== "cd"){
      setSavedStore(myStore);
      setLoading(true);
      requestStockAvailability(
        shippingPostalCode,
        myStore.id,
        product.sku
      ).then((options) => {
        setLoading(false);
        if (options && options.data) {
          setDeliveryOptionsAvailable(options.data);
        }
      });
    }
  }, [myStore]);

  const validatePostalCode = (event) => {
    if (event) {
      setInputPostalCode(event.target.value);
      let value = event.target.value.replace(/\D/g, "");
      let validator = /^[0-9]{8}$/;
      if (validator.test(value)) {
        setShippingPostalCode(value);
        localStorage.setItem("postalcode-delivery", value);
        checkStateAndSetStore(value);
      } else {
        setDeliveryOptionsAvailable({
          deliveryAvailable: false,
          expressDeliveryAvailable: false,
        });
        setShippingPostalCode(null);
      }
    }
  };

  const clearCartAndRetryAddToCart = async () => {
    localStorage.removeItem("productList");
    await addToCart(savedStore, product, "delivery", true, dispatch);
    router.push("/cart", undefined, { shallow: true });
  };

  const cancelAction = () => {
    setValidAction({
      isValid: true,
      message: "",
      confirmMessage: "",
      cancelMessage: "",
    });
  };

  const deliveryClick = async () => {
    let cartActionResponse = await addToCart(
      savedStore,
      product,
      "delivery",
      false,
      dispatch
    );
    if (cartActionResponse.isValid)
      router.push("/cart", undefined, { shallow: true });
    else
      setValidAction({
        ...cartActionResponse,
        confirm: clearCartAndRetryAddToCart,
        cancel: cancelAction,
      });
  };

  return (
    <ShippingCardStyled available={ deliveryOptionsAvailable.deliveryAvailable || deliveryOptionsAvailable.expressDeliveryAvailable }>
      { !validAction.isValid ? <ActionDialog data={validAction}/> : null }
      <p>Digite seu CEP para ver a disponibilidade na sua região </p> 
      <p>
      {
        <Input
        style={{
          marginBottom: "20px",
        }}
        name="cep"
        onChange={validatePostalCode}
        placeholder="00000-000"
        value={inputPostalCode}
      />
      }</p>

      {deliveryOptionsAvailable.expressDeliveryAvailable ? (
        <span className={"available"}>
          {"receba em até 4 horas"} 
        </span>
      ) : null}

      {shippingPostalCode &&
      !deliveryOptionsAvailable.deliveryAvailable &&
      !deliveryOptionsAvailable.expressDeliveryAvailable ? (
        <span className={"unavailable"}>
          {"Sem Estoque"}
        </span>
      ) : null}
      {loading ? (
        <CircularProgress />
      ) : (
        <button
          disabled={
            !(
              deliveryOptionsAvailable.deliveryAvailable ||
              deliveryOptionsAvailable.expressDeliveryAvailable
            )
          }
          onClick={deliveryClick}
        >
          <span>comprar e receber em casa</span>
        </button>
      )}
    </ShippingCardStyled>
  );
};

const ProductShipping = ({ product, updatePrices }) => (
  <ProductShippingStyled>
    <Withdraw product={product} />
    <ShippingCard product={product} updatePrices={updatePrices} />
  </ProductShippingStyled>
);

export default ProductShipping;
