import styled from "styled-components";

export const ProductContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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

export default ProductStyled;
