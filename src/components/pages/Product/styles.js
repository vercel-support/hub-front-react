import styled from "styled-components";

export const ProductContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 1280px) {
    min-width: 700px;
  }
`;

export const ProductContentStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  @media screen and (max-width: 700px) {
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

const ProductStyled = styled.div`
  display: flex;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const SimilarProductsContainer = styled.div`
  width: 100%;
  min-height: 500px;
`;

export default ProductStyled;
