import styled from "styled-components";

const ProductPriceStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 30px;

  .old {
    color: #cccccc;
    font-size: 12px;
    font-style: normal;
    font-weight: normal;
    line-height: 19px;
  }
  .new {
    color: #2983b9;
    font-size: 30px;
    font-style: normal;
    font-weight: bold;
    line-height: 19px;
    margin: 5px 0;
  }
  .installments {
    color: #666666;
    font-size: 12px;
    font-style: normal;
    font-weight: normal;
    line-height: 19px;
  }
`;

export default ProductPriceStyled;
