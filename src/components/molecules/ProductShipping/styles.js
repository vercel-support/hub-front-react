import styled from "styled-components";

export const ShippingCardStyled = styled.div`
  background: #f6f6f6;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 0 0 20px 0;
  padding: 10px 15px;
  width: 275px;

  button {
    background: ${(props) => (props.available ? "#cfd601" : "#EDEDED")};
    border: 0;
    border-radius: 5px;
    color: ${(props) => (props.available ? "#ffffff" : "#B4B4B4")};
    cursor: pointer;
    display: flex;
    font-size: 14px;
    font-weight: bold;
    line-height: 18px;
    padding: 10px 15px;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 15px;
    &:disabled {
      background: #ededed;
      color: #b4b4b4;
      cursor: auto;
    }
    span {
      text-align:center;
    }
  }
  p {
    color: #666666;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    margin: 0;
    padding: 0;
  }
  .available {
    align-items: center;
    align-self: flex-end;
    color: #2983b9;
    display: flex;
    font-size: 10px;
    font-style: normal;
    font-weight: normal;
    justify-content: flex-end;
    line-height: 19px;
    svg {
      margin-right: 5px;
    }
  }
  .unavailable {
    align-self: flex-end;
    color: #cf4e0f;
    font-size: 12px;
    font-style: normal;
    font-weight: normal;
    line-height: 19px;
  }
  .change {
    color: #666666;
    cursor: pointer;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 19px;
    text-decoration: underline;
  }
  .stock {
    color: ${(props) => (props.available ? "#03DA0B" : "#cf4e0f")};
  }
  .store {
    font-weight: bold;
  }
`;

export const WithdrawStyled = styled(ShippingCardStyled)``;

const ProductShippingStyled = styled.div``;

export default ProductShippingStyled;
