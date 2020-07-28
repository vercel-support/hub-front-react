import styled from "styled-components";
import { Grid } from "@material-ui/core";

const ProductCardStyled = styled(Grid)`
  & > a {
    text-decoration: none;
  }
`;

export default ProductCardStyled;
