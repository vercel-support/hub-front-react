import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
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
`;

export const ProductInfoWrapper = styled.div`
    padding-left: 15px;
    max-width: 90%;
    cursor: pointer;
`;

export const ProductNameStyled = styled.div`
    @media screen and (min-width: 1280px) {
        height: 40px;
    };
    height: 60px;
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
        max-height: 130px;
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