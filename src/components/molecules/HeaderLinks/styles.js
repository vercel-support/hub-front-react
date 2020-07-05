import styled from "styled-components";

const HeaderLinksStyled = styled.ul`
  align-items: center;
  color: #ffffff;
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0;
  & > a,
  & > li {
    align-items: center;
    color: #ffffff;
    display: flex;
  }
`;

export default HeaderLinksStyled;
