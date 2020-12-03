import styled from "styled-components";
import Icon from "./icon";

const SUCCESS_TEXT_COLOR = "#32CD32";
const ERROR_TEXT_COLOR = "black";

export const CouponContainer = styled.div`
    padding-left: 15px;
    padding-bottom: 15px;
    width: 100%;
    @media screen and (min-width: 1280px) {
        width: 50%;
    }
`;

export const ResponseContainer = styled.div`
    background-color: #F5F5F5;
    padding-left: 0px;
    width: 100%;
    @media screen and (min-width: 1280px) {
        width: 50%;
    }
`;

export const ResponseLabel = styled.div`
    padding-top: 10px;
    & > p{
        margin: 0;
        padding: 0;
        padding-bottom: 10px;
        font-style: normal;
        font-size: 14px;
        color: ${(props) => (props.status === 201 ? SUCCESS_TEXT_COLOR : ERROR_TEXT_COLOR)};
    };
    & > h2{
        margin: 0;
        padding: 0;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        color: ${(props) => (props.status === 201 ? SUCCESS_TEXT_COLOR : ERROR_TEXT_COLOR)};
    };
`;

export const CouponIcon = styled.div`
    padding-left: 10px;
    padding-top: 10px;
`;

export const InputStyled = styled.input`
    font-size: 16px;
    border: 1px solid #dedede;
    border-radius: 5px;
    width: 100%;
    height: 42px;
`;

export const ApplyButtonStyled = styled.button`
    background-color: #cfd601;
    border: none;
    color: #fff;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    border-radius: 0px 5px 5px 0px;
    margin-left: -10px;
    height: 40px;
    width: 100%;
    @media screen and (min-width: 1280px) {
        width: 80px;
    }
`;

export const ChangeButtonStyled = styled.div`
    text-align: right;
    position: relative;
    top: 20px;
    right: 10px;
    & > a{
        color: #cfd601;
        cursor: pointer;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
    }
`;

export const Svg = styled(Icon)`
  width: 60%;
  fill: ${(props) => (props.status === 201 ? SUCCESS_TEXT_COLOR : ERROR_TEXT_COLOR)};

  @media screen and (min-width: 1280px) {
    fill: ${(props) => (props.status === 201 ? SUCCESS_TEXT_COLOR : ERROR_TEXT_COLOR)};
  }
`;