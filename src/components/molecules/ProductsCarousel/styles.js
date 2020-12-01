import styled from "styled-components";
import { Grid } from "@material-ui/core";

export const Wrapper = styled.div`
    width: 100%;
    min-height: 400px;
`;

export const TitleStyled = styled.div`
    text-align: center;
    & h2 {
        color: #cfd601;
    }
`;

export const ProductWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    padding: 5px;
`;

export const ProductInfoWrapper = styled.div`
    width: 100%;
    cursor: pointer;
    text-align: center;
    padding-top: 5px;
`;

export const ProductNameStyled = styled.div`
    @media screen and (min-width: 1280px) {
        height: 40px;
    };
    height: 60px;
    text-align: center;
    & > h1 {
        color: #666666;
        font-size: 16px;
        font-style: normal;
        font-weight: bold;
        line-height: 30px;
        margin-bottom: 5px;
        margin-left: 10px;
    }
    cursor: pointer;
`;

export const ProductImageStyled = styled.div`
    & > img {
        display: block;
        margin: 0 auto;
        max-width: 100%;
        max-height: 160px;
        height: auto;
        object-fit: cover;
    }
    cursor: pointer;
`;

export const ProductTagStyled = styled.span`
    align-items: center;
    background: #cfd601;
    border-radius: 5px;
    color: #ffffff;
    display: inline-flex;
    font-size: 12px;
    font-style: normal;
    font-weight: normal;
    justify-content: center;
    line-height: 19px;
    padding: 0 2px;
    margin-right: 5px;
`;

export const ProductPriceStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100px;

  .old {
    color: #cccccc;
    font-size: 12px;
    font-style: normal;
    font-weight: normal;
    line-height: 19px;
  }
  .new {
    color: #2983b9;
    font-size: 24px;
    font-style: normal;
    font-weight: bold;
    line-height: 19px;
    margin: 2px 0;
  }
  .installments {
    color: #666666;
    font-size: 12px;
    font-style: normal;
    font-weight: normal;
    line-height: 19px;
  }
`;

export const ProductCardStyled = styled(Grid)`
  & > a {
    text-decoration: none;
  }
  margin: 0px !important;
  border-bottom: 1px solid #e2e2e2;

  :hover {


  }
`;