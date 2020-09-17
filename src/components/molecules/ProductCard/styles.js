import styled from "styled-components";
import { Grid } from "@material-ui/core";

const ProductCardStyled = styled(Grid)`
  & > a {
    text-decoration: none;
  }
  margin: 20px 0px !important;
  border-bottom: 1px solid #e2e2e2;

  :hover {


  }
`;

export default ProductCardStyled ;
