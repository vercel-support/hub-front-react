import styled from "styled-components";

const HeaderLinksStyled = styled.ul`
  align-items: center;
  color: #ffffff;
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0;
  & > li a,
  & > li {
    align-items: center;
    color: #ffffff;
    display: flex;
    text-decoration: none;
  }
  div li,
  div a {
    color: #666666;
    text-decoration: none;
  }
  .dropdown {
    border-radius: 5px;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 15px;
  }
`;

export default HeaderLinksStyled;
