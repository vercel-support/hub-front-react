import styled from "styled-components";

export const FirstLine = styled.div`
  align-items: center;
  background-color: #f6f6f6;
  display: flex;
  margin-top: 20px;
  padding: 10px 0;

  @media screen and (min-width: 1280px) {
    height: 40px;
    padding: 0;
  }
`;

export const SecondLine = styled.div`
  align-items: center;
  background-color: #2983b9;
  color: #ffffff;
  display: flex;
  padding: 10px 0;

  @media screen and (min-width: 1280px) {
    height: 40px;
    padding: 0;
  }
`;
