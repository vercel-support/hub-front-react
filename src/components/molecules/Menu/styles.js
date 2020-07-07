import styled from "styled-components";

const MenuStyled = styled.ul`
  align-items: center;
  display: flex;
  height: 40px;
  list-style: none;
  margin: 0;
  padding: 0;

  & > li {
    align-items: center;
    display: flex;
    height: 40px;
    padding: 0 18px;
    position: relative;
    a {
      color: #ffffff;
      font-size: 14px;
      font-weight: bold;
      text-decoration: none;
    }
    &:hover a {
      color: #2983b9;
    }
  }

  li {
    cursor: pointer;
    &:hover {
      background-color: #fff;
      & > ul {
        display: block;
      }
    }
  }

  ul {
    display: none;
    left: 0;
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 100%;
  }
  ul ul {
    left: 100%;
    top: 0;
  }
`;

export default MenuStyled;
