import React, { useContext, useEffect, useState } from "react";
import { store } from "../../../store";
import { RewardsInfoDialog } from "../../atoms";
import {
  InfoStyled,
  ProgressBarStyled,
  RewardsBarStyled,
  Svg
} from "./styles";
import { Tooltip } from '@material-ui/core';
import { numberToPrice } from "../../../utils/helpers";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;
import axios from "axios";

const mockAbout = {
  title: "Sobre a promoção CASHBACK5%",
  content: `
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>
  `,
};

const RewardsBar = () => {
  const { state } = useContext(store);
  const [ openAbout, setOpenAbout ] = useState(false);
  const [ data, setData ] = useState({
    showMessage: false,
    promotionCode: null,
    message: null
  });
  const [ aboutData, setAboutData ] = useState({
    code: "",
    conditions: [],
    description: "",
    expirationTimeInDays: "",
    promotionName: "",
    reward: ""
  });
  const [ progress, setProgress ] = useState(0);

  const handleInfoClick = async() => {
    try{
      const cartId = localStorage.getItem("cartId");
      let serviceResponse = await axios.post(`${API_URL}/cart/cashback/rule`, 
        { cartId, ruleCode: data.promotionCode }
      );
      if(serviceResponse && serviceResponse.data && (serviceResponse.status === 200)){
        console.log(serviceResponse.data.cashbackRule);
        setAboutData(serviceResponse.data.cashbackRule);
        setOpenAbout(true);
      }
      else{
        console.log(serviceResponse);
      }
    }
    catch(error){
      console.log(error);
    }
  };

  const handleCloseAbout = () => {
    setOpenAbout(false);
  }

  const fetchCashbackStatus = async() => {
    const cartId = localStorage.getItem("cartId");
    if(cartId){
      try{
        let serviceResponse = await axios.post(`${API_URL}/cart/cashback`, 
          { cartId }
        );
        if(serviceResponse && serviceResponse.data && (serviceResponse.status === 200)){
          let cashbackMessage = serviceResponse.data.cashbackMessage;
          if(cashbackMessage.code && cashbackMessage.percentageMissingToApply < 100){
            let message =
              cashbackMessage.status === "applied" ?
              `Você ganhou ${numberToPrice(cashbackMessage.rewardAmount)} de Cashback!` :
              `Falta ${numberToPrice(cashbackMessage.amountMissingToApply)} para você ganhar Cashback!`

            setData({
              showMessage: true,
              promotionCode: cashbackMessage.code,
              message
            });

            setTimeout(() => {
              setProgress(100 - cashbackMessage.percentageMissingToApply);
            }, 1000);
          }
          else{
            setData({
              showMessage: false,
              promotionCode: null,
              message: null
            });
          }
        }
      }
      catch(error){
        setData({
          showMessage: false,
          promotionCode: null,
          message: null
        });
      }
    }
  }

  useEffect(() => {
    fetchCashbackStatus();
  }, [state.cartPageProducts]);

  useEffect(() => {
    fetchCashbackStatus();
  }, []);

  if(openAbout)
    return (<RewardsInfoDialog data={aboutData} handleCloseAbout={handleCloseAbout}/>);

  if(data.showMessage)
    return (
      <RewardsBarStyled>
        <span>{data.message}</span>
        <Tooltip title="Sobre o cashback">
        <InfoStyled onClick={handleInfoClick}>
          <Svg viewBox="0 0 512 512">
          <g><path d="m392 512h-272c-66.168 0-120-53.832-120-120v-272c0-66.168 53.832-120 120-120h272c66.168 0 120 53.832 120 120v272c0 66.168-53.832 120-120 120zm-272-472c-44.112 0-80 35.888-80 80v272c0 44.112 35.888 80 80 80h272c44.112 0 80-35.888 80-80v-272c0-44.112-35.888-80-80-80z"/><path d="m256 392c-11.046 0-20-8.954-20-20v-153c0-11.046 8.954-20 20-20s20 8.954 20 20v153c0 11.046-8.954 20-20 20zm0-272c-13.807 0-25 11.193-25 25s11.193 25 25 25 25-11.193 25-25-11.193-25-25-25"/></g>
          </Svg>
        </InfoStyled>
        </Tooltip>
        
        <ProgressBarStyled width={progress} />
      </RewardsBarStyled>
    );

  return null;
}

export default RewardsBar;