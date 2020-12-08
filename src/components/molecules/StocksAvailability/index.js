import React, { useContext, useState, useEffect } from "react";
import {
    Delivery,
} from "../../atoms";
import {
    AlternativeStocksStyled,
    ArrowStyled,
    DrawerTitleStyled,
    DrawerWrapper,
    ItemStoreStyled,
    ListStoreStyled,
    OpenButtonStyled,
} from "./styles";
import { Drawer } from "@material-ui/core";
import { LocationOn } from "@material-ui/icons";
import { store } from "../../../store";
const API_URL = process.env.API_URL;
import axios from "axios";

const formatAddress = (address) => {
    if (!address) return null;

    const complement = address.complement ? `- ${address.complement}` : "";
    return `${address.street}, ${address.number} ${complement} - ${address.city}/${address.state}`;
};

const StocksAvailability = ({product, savedStore}) => {
    const { dispatch } = useContext(store);
    const [ stores, setStores ] = useState(null);
    const [ distanceMethodCalculated, setDistanceMethodCalculated ] = useState(null);
    const [ postalCode, setPostalCode ] = useState(null);
    const [ open, setOpen ] = useState(false);

    const fetchStores = async(postalCode) => {
        try{
            dispatch({ type: "LOADING_DATA", payload: true });
            let url = `${API_URL}/catalogs/products/alternative-stores?sku=${product.sku}&skipStoreId=${savedStore.id}`;
            if(postalCode){
                url = `${url}&postalCode=${postalCode}`;
            }
            console.log(url);
            let serviceResponse = await axios.get(url);
            if(serviceResponse.status === 200){
                setStores(serviceResponse.data.data || []);
                setDistanceMethodCalculated(serviceResponse.data.distanceCalcMethod);
            }
            dispatch({ type: "LOADING_DATA", payload: false });  
        }
        catch(error){
            console.log(error.message);
            setStores([]);
            dispatch({ type: "LOADING_DATA", payload: false });
        }
    }

    const setNewPostalCode = async(newPostalCode) => {
        setPostalCode(newPostalCode);
        fetchStores(newPostalCode);
    }

    useEffect(() => {
        if(open){
            const savedPostalCode = localStorage.getItem("postalcode-delivery");
            if(savedPostalCode){
                setPostalCode(savedPostalCode);
            }
            fetchStores(savedPostalCode);
        }
    }, [open]);

    if(open)
        return (
            <AlternativeStocksStyled id="alt_stocks_container">
            {open && (
              <div
                className="MuiBackdrop-root"
                aria-hidden="true"
                onClick={() => setOpen(!open)}
              ></div>
            )}

            <Drawer
                anchor={"right"}
                open={open}
                disableScrollLock={true}
                variant="persistent"
            >
                <DrawerWrapper>
                    <DrawerTitleStyled>
                        <span>Disponibilidade em outras lojas</span>
                    </DrawerTitleStyled>
                    <Delivery icon={<LocationOn />} end={postalCode} setCep={setNewPostalCode} />
                    {stores && stores.length > 0 ? 
                        <ListStoreStyled>
                            {stores.map((store) => (
                                <ItemStoreStyled>
                                    <h4>{store.storeName}</h4>
                                    {
                                        store.storeDistance && 
                                        (<p>A {store.storeDistance} {store.storeDistanceUnits} { distanceMethodCalculated === "from_store_coordinates" ? "da sua loja" : "de você" }</p>)
                                    }
                                    { store.storeId !== "cd" && (<p>{formatAddress(store.storeAddress)}</p>) }
                                    <p>{store.friendlyQuantityAvailable}</p>
                                </ItemStoreStyled>
                            ))}
                        </ListStoreStyled> :
                        stores &&
                        <DrawerTitleStyled>
                            <h3>Ops, não encontramos outros estoques disponíveis.</h3>
                        </DrawerTitleStyled> 
                    }

                </DrawerWrapper>
            </Drawer>

            </AlternativeStocksStyled>
            
        );
                    
    return (
        <OpenButtonStyled onClick={() => { setOpen(!open) }}>
            <p>Ver disponibilidade em outras lojas</p>
            <ArrowStyled />
        </OpenButtonStyled>
    );
}

export default StocksAvailability;