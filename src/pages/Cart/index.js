import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from './styles';
import { cartActions } from './actions';
import CartListItems from './components/CartListItems/CartListItems';
import MiniCart from './components/MiniCart/MiniCart';
import Shipping from './components/Shipping/Shipping';
import tachyons from 'tachyons';
import PostalCodeSelect from '../../shared/components/Dialog/PostalCodeDialog';
import './index.css';
class Cart extends Component {
  constructor() {
    super();
    this.state = {
      totalPriceItems: 0,
      totalPriceShipping: 0,
      showPostalCode: false,
      showDialog: false,
      errorMessage: null,
      selectedShipping: null,
      loading: false,
    };
    this.getCartDetails.bind(this);
    this.getShippingDetails.bind(this);
  }
  componentDidMount() {
    this.getCartDetails();
    // this.props.startLoading();
  }
  getCartDetails() {
    if (this.props.cart.loading) {
      const reqBody = {
        skus: this.props.cart.cartSkus,
        storeId: this.props.cart.storeId,
        shippingType: this.props.cart.shippingType,
      };
      fetch('http://localhost:3000/api/V2/cart', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqBody),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.status != 200) {
            this.props.setError('Falha para obter dados dos produtos.');
          } else {
            response.data.map((item) => {
              this.props.addItemDetails(this.formatItem(item));
              this.props.addCartItem(this.formatItemCart(item));
              this.getShippingDetails();
            });
          }
        })
        .catch((err) => {
          this.props.setError('Não foi possível conectar com o servidor');
        })
        .finally(() => {
          this.props.endLoading();
        });
    }
  }
  getShippingDetails() {
    console.log('getShipping', this.props.cart.cartItems)
    if (this.props.cart.loading || this.state.loading) {
      const reqBody = {
        items: this.props.cart.cartItems,
        storeId: this.props.cart.storeId,
        postalCode: this.props.cart.cep,
      };
      // this.props.requestApiShippingData(reqBody);
      fetch('http://localhost:3000/api/V2/logistic/shipping', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqBody),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.data) {
            this.props.setCartShipping(response.data);
          }
          this.props.endLoading();
          this.setState({ loading: false });
        })
        .catch((err) => {
          this.props.setError(err);
        });
    }
  }

  formatItemCart(item) {
    item.quantity > 0
      ? this.setState({
          totalPriceItems:
            this.state.totalPriceItems +
            (item.special_price ? item.special_price : item.price),
        })
      : null;
    return {
      sku: item.sku,
      quantity: item.quantity > 0 ? 1 : null,
      price: item.price,
      specialPrice: item.special_price,
    };
  }

  formatItem(item) {
    let quantity,
      finalPrice,
      formatedPrice,
      imageURL = null;
    if (item.quantity === 0 || quantity === null) {
      quantity = 'Produto Indisponível';
    } else {
      quantity = item.quantity;
    }
    if (item.special_price === null || item.special_price === '') {
      finalPrice = 'R$ ' + item.price.toFixed(2).toString().replace('.', ',');
    } else {
      finalPrice =
        'R$ ' + item.special_price.toFixed(2).toString().replace('.', ',');
      formatedPrice =
        'R$ ' + item.price.toFixed(2).toString().replace('.', ',');
    }
    if (item.image !== null || item.image !== '') {
      imageURL =
        'https://e220k6tgf8.execute-api.sa-east-1.amazonaws.com/v1/resize-image?img=' +
        item.image +
        '&size=50';
    }
    return {
      sku: item.sku,
      name: item.name,
      image: imageURL,
      quantity: quantity,
      specialPrice: item.specialPrice,
      price: item.price,
      formatedPrice: formatedPrice,
      finalPrice: finalPrice,
    };
  }

  onSelectQuantity(cartItem, quantity) {
    let newCartItems = [];
    this.props.cart.cartItems.map((item) => {
      if (item.sku === cartItem.sku) {
        item.quantity = quantity;
      }
      newCartItems.push(item);
    });
    if (quantity === 0) {
      this.onDeleteItem(cartItem.sku);
    }
    this.props.setCartItems(newCartItems);
    this.updateTotalPriceItems();
    this.getShippingDetails();
  }

  onShippingSelect(shipping) {
    if (shipping === 'economic') {
      this.setState({
        totalPriceShipping: this.props.cart.shipping.economicalDelivery.price,
        selectedShipping: shipping,
      });
    } else if (shipping === 'express') {
      this.setState({
        totalPriceShipping: this.props.cart.shipping.expressDelivery.price,
        selectedShipping: shipping,
      });
    }
  }

  async onDeleteItem(sku) {
    let newCartItems = this.props.cart.cartItems.filter(
      (item) => item.sku !== sku
    );
    let newCartSkus = this.props.cart.cartSkus.filter((item) => item !== sku);
    let newStorageItems = this.props.cart.storageItems.filter(
      (item) => item.sku !== sku
    );
    await this.props.setCartItems(newCartItems);
    this.props.setCartSkus(newCartSkus);
    this.props.setStorageItems(newStorageItems);
    this.setState({ loading: true });
    this.getShippingDetails();
    this.updateTotalPriceItems();
  }

  updateTotalPriceItems() {
    var totalPrice = 0;
    this.props.cart.cartItems.map((item) => {
      let itemPrice = 0;
      if (item.quantity > 0) {
        itemPrice = item.specialPrice
          ? item.specialPrice.toFixed(2) * item.quantity
          : item.price.toFixed(2) * item.quantity;
        totalPrice = totalPrice + itemPrice;
      }
    });
    this.setState({ totalPriceItems: totalPrice });
  }

  onBuyClick() {
    let canProceed = false;
    if (this.state.selectedShipping) {
      if (this.state.totalPriceItems <= 0) {
        toast.warn('Você não tem produtos suficientes para prosseguir.', {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      } else {
        let unavailable = false;
        this.props.cart.cartItems.map((item) => {
          if (item.quantity === null) {
            unavailable = true;
          }
        });
        if (unavailable) {
          toast.warn('Remova os itens indiponíveis do seu carrinho antes de prosseguir', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        } else {
          canProceed = true;
        }
      }
    } else {
      toast.info( 'Selecione um tipo de entrega para prosseguir', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
    if (canProceed) {
      this.props.history.push('/checkout/identificacao');
    }
  }

  onShowPostalCode() {
    this.setState({ showPostalCode: true });
  }
  onClosePostalCode() {
    this.setState({ showPostalCode: false });
  }
  async onSavePostalCode(postalCode) {
    const isValid = this.isCEPvalid(postalCode);
    if (isValid) {
      this.props.setCEP(postalCode);
      this.setState({ loading: true, showPostalCode: false });
      this.getShippingDetails();
    } else {
      toast.error('CEP inserido não é válido!', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      // this.setState({
      //   showDialog: true,
      //   showPostalCode: false,
      //   errorMessage: 'CEP inserido não é válido!',
      // });
    }
  }
  isCEPvalid(postalCode) {
    const re = new RegExp('\\d{5}-\\d{3}');
    if (re.test(postalCode)) {
      return true;
    } else {
      return false;
    }
  }

  componentDidUpdate() {}

  render() {
    const totalPrice = (
      this.state.totalPriceItems + this.state.totalPriceShipping
    )
      .toFixed(2)
      .toString()
      .replace('.', ',');
    if (this.props.cart.loading) {
      return (
        <div className="content flex flex-column ph4 w-80-ns center">
          <div className="f3 f2-m lh-copy fw8 mv2">Carregando...</div>
        </div>
      );
    } else if (this.props.cart.storageItems.length > 0) {
      const items = this.props.cart.storageItems;
      return (
        <div className="content flex flex-column ph4 w-80-ns center justify-around">
          <ToastContainer
            position="top-right"
            transition={Slide}
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <PostalCodeSelect
            show={this.state.showPostalCode}
            onClose={this.onClosePostalCode.bind(this)}
            onSave={this.onSavePostalCode.bind(this)}
          />
          <div className="f3 f2-m lh-copy fw8 mv2">Meu carrinho</div>
          <div className="">
            <Shipping
              className=""
              onShippingSelect={this.onShippingSelect.bind(this)}
              onChangeCEP={this.onShowPostalCode.bind(this)}
            />
            <div>
              {items.length > 0
                ? items.map((item) => (
                    <CartListItems
                      name={item.name}
                      quantity={item.quantity}
                      price={item.price}
                      image={item.image}
                      specialPrice={item.specialPrice}
                      finalPrice={item.finalPrice}
                      formatedPrice={item.formatedPrice}
                      key={item.sku}
                      sku={item.sku}
                      className=""
                      onSelectQuantity={this.onSelectQuantity.bind(this)}
                      onDeleteItem={this.onDeleteItem.bind(this)}
                    />
                  ))
                : 'Falha ao exibir o items do carrinho'}
            </div>
            {/* <MiniCart /> */}
          </div>
          <div className="w-100">
            <div className="flex flex-column fr-l w-100 w-third-l mv10">
              <div className="totalPrice mv3  flex justify-between w-60 w-60-l self-end">
                <div>Total: </div>
                <div>{'R$ ' + totalPrice}</div>
              </div>
              <Button
                className="center w-100"
                onClick={this.onBuyClick.bind(this)}
              >
                COMPRAR
              </Button>
              <div className="center link pointer underline mv3">
                ADICIONAR MAIS PRODUTOS
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="content flex flex-column ph4 w-80-ns center top--2-ns relative">
          <div className="f3 f2-m lh-copy fw8 ">Seu carrinho está vazio!</div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startLoading: () => dispatch(cartActions.startLoading()),
    endLoading: () => dispatch(cartActions.endLoading()),
    setError: (message) => dispatch(cartActions.setError(message)),
    addItemDetails: (item) => dispatch(cartActions.addItemDetails(item)),
    addCartItem: (item) => dispatch(cartActions.addCartItem(item)),
    setCartItems: (items) => dispatch(cartActions.setCartItems(items)),
    setCartShipping: (shipping) =>
      dispatch(cartActions.setCartShipping(shipping)),
    setCartSkus: (items) => dispatch(cartActions.setCartSkus(items)),
    setStorageItems: (items) => dispatch(cartActions.setStorageItems(items)),
    setCEP: (cep) => dispatch(cartActions.setCEP(cep)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
