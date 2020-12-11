import styled from "styled-components";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

export const NfeButton = styled.div`
    padding-right: 5px;
    text-align: right;
    color: #4c4c4c;
    text-decoration-line: underline;
    font-size: 18px;
    cursor: pointer;
    line-height: 
`;

export const ShippingAmountInfo = styled.div`
    & > h3 {
        color: #4c4c4c;
        font-size: 14px;
        font-weight: normal;
        font-weight: bold;
    }
`;

export const ShippingInfo = styled.div`
    text-align: center;
    padding-top: 5px;
    & > p {
        color: #4c4c4c;
        font-size: 14px;
        font-weight: normal;
    }
    svg {
        font-size: 50px;
        color: #2983b9;
    }
`;

export const ProductInfo = styled.div`
    & > h3 {
        color: #4c4c4c;
        font-size: 14px;
        font-weight: normal;
        font-weight: bold;
    }
    & > p {
        color: #4c4c4c;
        font-size: 14px;
        font-weight: normal;
    }
`;

export const ProductImage = styled.div`
    padding-top: 15px;
    & > img {
        display: block;
        margin: 0 auto;
        max-width: 90%;
        max-height: 100%;
        width: auto;
        height: 4rem;
        object-fit: cover;
    }
`;

export const DeliveryInfoWrapper = styled.div`
    margin: 5px;
    border: 1px solid #cecece;
`;

export const StoreInfoStyled = styled.div`
    padding-left: 15px;
    & > h3 {
        color: #4c4c4c;
        font-size: 18px;
        font-weight: bold;
        line-height: 0;
    }
    & > p {
        color: #4c4c4c;
        font-size: 14px;
        font-weight: normal;
    }
`;

export const StoreIconStyled = styled.div`
    padding-top: 5px;
    padding-left: 15px;
    svg {
        font-size: 50px;
        color: #2983b9;
    }
`;

export const DoneIconStyled = styled(CheckCircleOutlineIcon)`
    color: #cfd601;
`;

export const StepLabelStyled = styled.div`
    text-align: center;
    font-size: 18px;
`;

export const MobileStepLabelStyled = styled.div`
    text-align: left;
    font-size: 18px;
`;

export const PageWrapper = styled.div`
    width: 100%;
    padding: 15px;
    & > h1 {
        color: #4c4c4c;
        font-size: 22px;
        font-weight: bold;
        line-height: 80%;
    }
`;

export const OrderContainer = styled.div`
    padding: 15px;
    & > h3 {
        color: #4c4c4c;
        font-size: 18px;
        font-weight: bold;
        line-height: 100%;
        margin-bottom: 5px;
    }
    & > p {
        color: #4c4c4c;
        font-size: 14px;
        font-weight: normal;
        line-height: 100%;
        margin-top: 5px;
    }
`;

export const MoreInfoButton = styled.div`
    float: top;
    width: 100%;
    & > button {
        cursor: pointer;
        width: 100%;
        height: 40px;
        text-decoration: none;
        border: none;
        background-color: #2983B9;
        color: white;
        text-align: center;
    }
`;