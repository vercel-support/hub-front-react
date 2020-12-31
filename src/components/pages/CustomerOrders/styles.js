import styled from "styled-components";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CancelIcon from '@material-ui/icons/Cancel';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

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
    padding-bottom: 15px;
`;

export const OrderInfoContainer = styled.div`
    padding: 5px 15px 5px 15px;
    & > h3 {
        color: #4c4c4c;
        font-size: 18px;
        font-weight: bold;
        line-height: 12px;
        margin-bottom: 5px;
    }
    & > p {
        color: #4c4c4c;
        font-size: 14px;
        font-weight: normal;
        line-height: 100%;
        margin-top: 5px;

        & > svg {
            padding-top: 5px;
            font-size: 16px;
        }
    }
`;

export const LinkContainer = styled.div`
    color: #4c4c4c;
    font-size: 14px;
    font-weight: normal;
    & > a {
        text-decoration: underline;
    }
`;

export const CopyButton = styled.button`
    cursor: pointer;
    width: 100%;
    height: 40px;
    text-decoration: none;
    border: 1px solid #2983B9;
    border-radius: 5px;
    background-color: transparent;
    color: #2983B9;
    text-align: center;
    margin-bottom: 10px;
    &: hover{
        background-color: #eeeeee;
        border: none;
    }
`;

export const MoreInfoButton = styled.div`
    width: 100%;
    padding: 5px 20px 15px 20px;
    & > button {
        cursor: pointer;
        width: 100%;
        height: 40px;
        text-decoration: none;
        border: 1px solid #2983B9;
        border-radius: 5px;
        background-color: transparent;
        color: #2983B9;
        text-align: center;
        &: hover{
            background-color: #eeeeee;
            border: none;
        }
    }
`;

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
        line-height: 20%;
    }
    & > p {
        color: #4c4c4c;
        font-size: 14px;
        font-weight: normal;
        line-height: 20%;
        & > a {
            text-decoration: underline;
        }
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
        line-height: 20%;
    }
    & > p {
        color: #4c4c4c;
        font-size: 14px;
        font-weight: normal;
        margin-top: 0;
    }
    & > a {
        text-decoration: underline;
    }
`;

export const ProductImage = styled.div`
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
    margin: 10px;
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
    color: ${(props) => (props.type === "next" ? "#a3a3a3" : "#cfd601")};
`;

export const CanceledIconStyled = styled(CancelIcon)`
    color: red;
`;

export const StatusBulletIconStyled = styled(FiberManualRecordIcon)`
    color: ${(props) => (props.color)};
`;

export const StepLabelStyled = styled.div`
    text-align: center;
    font-size: 14px;
`;

export const MobileStepLabelStyled = styled.div`
    text-align: left;
    font-size: 14px;
`;
