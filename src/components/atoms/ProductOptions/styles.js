import styled from "styled-components";

const ProductOptionsStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  & > li {
    color: #999999;
    display: flex;
    font-size: 14px;
    font-style: normal;
    font-weight: normal;
    justify-content: space-between;
    line-height: 19px;
    margin-bottom: 20px;
  }
  & > li > div {
    display: flex;
    justify-content: space-between;
    margin: 0 10px;
    min-width: 150px;
  }

  .qty {
    padding-right: 20px;
  }

  .MuiIconButton-colorSecondary {
    padding-left: 0;
  }
`;

export default ProductOptionsStyled;
