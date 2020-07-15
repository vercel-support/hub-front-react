import styled from "styled-components";

const CopyrightStyled = styled.div`
  align-items: center;
  color: #ffffff;
  display: flex;
  font-size: 10px;
  height: 100%;
  justify-content: center;
  line-height: 14px;
  text-align: center;
  @media screen and (min-width: 1280px) {
    justify-content: flex-end;
  }
`;

export default CopyrightStyled;
