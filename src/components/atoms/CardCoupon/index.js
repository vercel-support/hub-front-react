import React, { useState, useEffect, useContext } from "react";
import { store } from "../../../store";
import { 
    ApplyButtonStyled, 
    ChangeButtonStyled,
    CouponContainer,
    CouponIcon,
    InputStyled, 
    ResponseContainer,
    ResponseLabel,
    Svg
} from "./styles";
import {
    Grid,
} from "@material-ui/core";
import { numberToPrice } from "../../../utils/helpers";

/*import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig; */
const API_URL = process.env.API_URL;
import axios from "axios";

const CardCoupon = ({ cashbackDiscount, updateCart }) => {
    const { dispatch } = useContext(store);
    const [ couponCode, setCouponCode ] = useState(null);
    const [ couponServiceResponse, setCouponServiceResponse ] = useState({
        status: 0,
        message: ""
    });

    useEffect(() => {
        if(cashbackDiscount && cashbackDiscount.status === 201){
            setCouponServiceResponse({
                status: 201,
                discount: cashbackDiscount.discount,
                message: "Utilização de saldo"
            });
            updateCart();
        }
    }, [cashbackDiscount]);

    const requestApplyCoupon = async() => {
        dispatch({ type: "LOADING_DATA", payload: true });
        const cartId = localStorage.getItem("cartId");
        const customerToken = localStorage.getItem("customer-token");
        try{
            let serviceResponse = await axios.post(`${API_URL}/cart/apply-coupon`, {
                code: couponCode,
                cartId,
                customerToken
            });
            setCouponServiceResponse(serviceResponse.data);
            updateCart();
        }
        catch(error){
            setCouponServiceResponse(error.response.data);
            dispatch({ type: "LOADING_DATA", payload: false });
        }
        dispatch({ type: "LOADING_DATA", payload: false });
    }

    const submit = () => {
        if(couponCode) requestApplyCoupon();
    };

    const handleKeyDown = (event) => {
    if (event.key === 'Enter')
        if(couponCode) requestApplyCoupon();
    }

    const onInputChange = (event) => {
        setCouponCode(event.target.value);
    }

    const onChangeButton = () => {
        setCouponServiceResponse({
        status: 0,
        message: ""
        });
    }

    if(couponServiceResponse.status === 0)
        return(
            <CouponContainer>        
                <Grid container direction="row" spacing={3}>
                    <Grid xs={12} sm={12}>
                        <label>Tem um cupom?</label>
                    </Grid>
                    <Grid xs={9} sm={8}>
                        <InputStyled name="" placeholder="Digite ele aqui" onKeyDown={handleKeyDown} onChange={onInputChange}/>
                    </Grid>
                    <Grid xs={3} sm={4}>
                        <ApplyButtonStyled onClick={submit} >Aplicar</ApplyButtonStyled>
                    </Grid>
                </Grid>
            </CouponContainer>
        );

    if(couponServiceResponse.status === 201)
        return(
            <ResponseContainer>
                <Grid container direction="row" spacing={0}>
                    <Grid xs={2} sm={2}>
                        <CouponIcon>
                            <Svg 
                                viewBox="0 0 511.986 511.986"
                                status={couponServiceResponse.status}
                            >
                                <g><path d="m185.08 114.947c1.405 7.504 8.849 13.422 17.63 11.78 8.526-1.78 13.375-9.955 11.78-17.64-1.873-8.936-10.699-13.914-19.061-11.42-7.469 2.229-11.887 9.942-10.349 17.28z"/><path d="m508.225 324.453c-81.619-237.586-76.004-221.308-76.353-222.117-8.496-19.663-24.988-34.949-45.249-41.94-2.901-1.001-167.187-39.431-171.935-41.075-14.561-5.043-34.791-2.216-48.993 10.846l-140.789 129.549c-15.828 14.558-24.906 35.282-24.906 56.86v229.41c0 27.035 21.877 49.03 48.768 49.03h301.205c26.891 0 48.768-21.995 48.768-49.03v-22.174l83.955-35.93c24.409-10.563 35.764-38.912 25.529-63.429zm-158.252 140.563h-301.205c-10.349 0-18.768-8.537-18.768-19.03v-229.41c0-13.209 5.546-25.887 15.217-34.782 120.62-110.988 46.064-41.76 141.269-129.559 4.965-4.576 11.82-6.414 18.619-4.364 6.077 1.815-4.646-6.919 148.421 133.925 9.669 8.894 15.215 21.571 15.215 34.78v229.41c-.001 10.493-8.42 19.03-18.768 19.03zm120.864-104.691-72.097 30.855v-174.604c0-21.578-9.078-42.302-24.904-56.858l-104.848-96.477 108.503 25.746c11.844 4.287 21.498 13.261 26.626 24.757 81.464 237.133 75.969 221.217 76.326 222.038 4.096 9.468-.238 20.489-9.606 24.543z"/><path d="m241.959 202.297c-7.637-3.206-16.43.39-19.636 8.028l-73.023 174.04c-4.166 9.929 3.193 20.808 13.825 20.808 5.861 0 11.429-3.457 13.839-9.2l73.023-174.04c3.205-7.64-.389-16.431-8.028-19.636z"/><path d="m171.659 245.52c0-28.95-21.203-52.503-47.266-52.503s-47.265 23.553-47.265 52.503 21.203 52.503 47.266 52.503 47.265-23.553 47.265-52.503zm-47.265 22.503c-9.359 0-17.266-10.305-17.266-22.503s7.906-22.503 17.266-22.503 17.266 10.305 17.266 22.503c-.001 12.198-7.907 22.503-17.266 22.503z"/><path d="m275.751 312.011c-26.063 0-47.266 23.553-47.266 52.503s21.203 52.503 47.266 52.503 47.266-23.553 47.266-52.503-21.204-52.503-47.266-52.503zm0 75.006c-9.359 0-17.266-10.305-17.266-22.503s7.906-22.503 17.266-22.503 17.266 10.305 17.266 22.503-7.907 22.503-17.266 22.503z"/></g>
                            </Svg>
                        </CouponIcon>
                    </Grid>
                    <Grid xs={8} sm={8}>
                        <ResponseLabel status={couponServiceResponse.status}>    
                            <h2>Você ganhou {numberToPrice(couponServiceResponse.discount)} de desconto!</h2>
                            <p>{couponServiceResponse.message}</p>
                        </ResponseLabel>
                    </Grid>
                    <Grid xs={2} sm={2}>
                        <ChangeButtonStyled>
                            <a onClick={onChangeButton}>Trocar</a>
                        </ChangeButtonStyled>
                    </Grid>
                </Grid>
            </ResponseContainer>
        );

    return(
        <ResponseContainer>
            <Grid container direction="row" spacing={0}>
                <Grid xs={2} sm={2}>
                    <CouponIcon>
                        <Svg 
                            viewBox="0 0 511.986 511.986"
                            status={couponServiceResponse.status}
                        >
                        <g>
                            <g>
                                <path d="M419.721,196.465H92.279c-16.414,0-29.767,13.354-29.767,29.767v256c0,16.414,13.354,29.767,29.767,29.767h327.442
                                    c16.414,0,29.767-13.354,29.767-29.767v-256C449.488,209.819,436.135,196.465,419.721,196.465z M413.767,476.279H98.233V232.186
                                    h315.535V476.279z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M256,0c-80.426,0-145.86,65.971-145.86,147.051v61.321h35.721v-61.321c0-61.386,49.408-111.33,110.14-111.33
                                    c60.732,0,110.14,49.944,110.14,111.33v61.321h35.721v-61.321C401.861,65.971,336.432,0,256,0z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M253.023,333.395c-9.865,0-17.86,7.996-17.86,17.86v41.674c0,9.865,7.996,17.86,17.86,17.86s17.86-7.996,17.86-17.86
                                    v-41.674C270.884,341.391,262.888,333.395,253.023,333.395z"/>
                            </g>
                        </g>
                        </Svg>
                    </CouponIcon>
                </Grid>
                <Grid xs={8} sm={8}>
                    <ResponseLabel status={couponServiceResponse.status}>                    
                        <h2>Ops</h2>
                        <p>{couponServiceResponse.message}</p>
                    </ResponseLabel>
                </Grid>
                <Grid xs={2} sm={2}>
                    <ChangeButtonStyled>
                        <a onClick={onChangeButton}>Trocar</a>
                    </ChangeButtonStyled>
                </Grid>
            </Grid>
        </ResponseContainer>
    );




};

export default CardCoupon;