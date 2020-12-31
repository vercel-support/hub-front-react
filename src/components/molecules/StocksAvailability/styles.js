import styled from 'styled-components';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import StoreIcon from '@material-ui/icons/Store';

export const AlternativeStocksStyled = styled.div`
  align-items: center;
  color: #000000;
  cursor: pointer;
  display: flex;
  height: 45px;
  position: relative;
  max-width: 100%;
  margin-top: 7px;
  background-color: ${(props) => (props && props.open && "#ffffff")};
  color: ${(props) => (props.open && "#2983B9" )};
  
  &:hover {
    background-color: #ffffff;
    color: #2983B9;
  }
  & > svg {
    margin: 0 5px;
  }
  & > div:nth-child(2) {
    width: 285px;
  }
  & > .dropdown {
    background-color: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 280px;
  }

  .MuiBackdrop-root {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    z-index: 5;
    position: fixed;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 1;
    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
`;

export const DrawerWrapper = styled.div`
    max-width: 92vw;
    min-width: 80vw;
    @media screen and (min-width: 1280px) {
        min-width: 30vw;
    }
`;

export const DrawerTitleStyled = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: bold;
  justify-content: center;
  line-height: 22px;
  margin: 15px 0;

  & > p {
    align-items: center;
    cursor: pointer;
    display: flex;
    font-size: 12px;
    font-weight: normal;
    line-height: 16px;
    margin: 0;
    text-decoration: underline;
    & > svg {
      margin: 0 5px;
    }
  }

  & > h3 {
    align-items: center;
    display: flex;
    font-size: 14px;
    font-weight: normal;
    line-height: 16px;
    margin: 0;
  }
`;

export const PostalCodeFormStyled = styled.form`
  align-items: center;
  display: flex;
  justify-content: space-around;
  padding: 2px 15px;
  button {
    border: 1px solid #cfd601;
    color: #cfd601;
  }
  input {
    max-width: 125px;
    padding: 10px;
  }
`;


export const ListStoreStyled = styled.ul`
  list-style: none;
  margin: 0px 15px;
  padding: 0;
`;

export const ItemStoreStyled = styled.li`
  border-top: 1px solid #cccccc;
  padding: 15px 0;

  & > h4 {
    font-size: 14px;
    font-weight: bold;
    line-height: 19px;
    margin: 0;
  }
  & > p {
    font-size: 12px;
    line-height: 16px;
    margin: 0;
  }
  & > span {
    color: ${(props) => (props.selected ? "#CFD601" : "#cccccc")};
    cursor: ${(props) => (props.selected ? "auto" : "pointer")};
    font-size: 10px;
    line-height: 14px;
    text-decoration: ${(props) => (props.selected ? "none" : "underline")};
  }
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const OpenButtonStyled = styled.div`
    position: relative;
    cursor: pointer;
    width: 100%;
    height: 26px;
    border-radius: 5px;
    border: 2px solid #EDEDED;
    &:hover {
        p {
            text-decoration: underline;
        }
    }
    p {
        position: absolute;
        left: 10px;
        color: #666666;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 22px;
        margin: 0;
        padding: 0;
    }
`;

export const ArrowStyled = styled(ArrowForwardIosRoundedIcon)`
    position: absolute;
    max-height: 18px;
    top: 10%;
    right: 0;
`;

export const DeliveryOptionContainerStyled = styled.div`
    background-color: #efefef;
    border-radius: 5px;
    margin-left: 15px;
`;

export const DeliveryOptionTextStyled = styled.div`
    p {
        padding-top: 4px;
        margin: 0;
    }
`;

export const StoreIconStyled = styled(StoreIcon)`
    text-align: center;
    color: #2983b9;
    width: 80%;
    padding-top: 4px;
    padding-left: 4px;
`;

export const DeliveryIconStyled = styled(LocalShippingIcon)`
    text-align: center;
    color: #2983b9;
    width: 80%;
    padding-top: 4px;
    padding-left: 4px;
`;

export const MapContainer = styled.div`
    padding: 5px 5px 5px 15px;
`;