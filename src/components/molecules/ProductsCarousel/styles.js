import styled from "styled-components";
import { Grid } from "@material-ui/core";

export const Wrapper = styled.div`
    width: 100%;
    min-height: 450px;
    @media screen and (max-width: 1280px) {
      min-height: 480px;
    }
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

export const ProductCardStyled = styled.div`
    height: 100%;
    border-radius: 5px;
    transition: box-shadow .3s;
    box-shadow: 0 0 5px rgba(33,33,33,.2); 
    :hover {
      box-shadow: 0 0 10px rgba(33,33,33,.2);
    }
`;

export const ProductContainerStyled = styled(Grid)`
  cursor: pointer;
  & > a {
    text-decoration: none;
  }
  margin: 0px !important;
`;

export const AvailabilityTagStyled = styled.div`
  position: absolute;
  top: 335px;
  left: 25%;
`;