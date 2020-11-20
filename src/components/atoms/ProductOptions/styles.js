import styled from "styled-components";

const ProductOptionsStyled = styled.ul`
  list-style: none;
  margin-bottom: 20px;
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
  label {
    font-size: 0.9rem;
    cursor: pointer;
  }

  .options {
    cursor: pointer;
    padding:0 5px;
    border-bottom: 1px solid #f6f6f6
  }

  .options:hover {
    background: #f6f6f6;
  }

  .qty {
    display: inline-grid;
    width: 120px;
    margin-right: 5px;
  }

  .MuiIconButton-colorSecondary {
    padding-left: 0;
  }

  .MuiRadio-colorSecondary.Mui-checked {
    color: #cfd601;
}
`;

export default ProductOptionsStyled;
