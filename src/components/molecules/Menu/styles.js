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
    padding: 0 20px;
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
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: none;
    left: 0;
    list-style: none;
    margin: 0;
    min-height: 290px;
    padding: 15px 0;
    position: absolute;
    top: 100%;
    width: 170px;
    li {
      padding: 0 10px;
    }
    ul {
      left: 100%;
      top: 0;
    }
    ul + ul {
      left: 340px;
    }
  }
`;

export default MenuStyled;
