import styled from "styled-components";

const MenuStyled = styled.ul`
  align-items: center;
  display: flex;
  height: 60px;
  list-style: none;
  margin: 0;
  padding: 0;

  & > li {
    align-items: center;
    display: flex;
    height: 45px;
    padding: 0 20px;
    position: relative;
    a {
      color: #ffffff;
      font-size: 16px;
      font-weight: normal;
      text-decoration: none;
      line-height: 24px;
    }
    &:hover a {
      color: #2983b9;
    }
  }
  
  svg {
    overflow: hidden;
    fill: #bcbcbc;
    height: 24px;
    float: right;
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

  ul > li > ul > li > ul {
    margin-top: -10px;
  }

  ul {
    background-color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: none;
    left: 0;
    list-style: none;
    margin: 0;
    min-height: 350px;
    padding: 15px 0;
    position: absolute;
    top: 100%;
    width: 250px;
    z-index: 5;

    li {
      padding: 5px 10px;
    }

    li:hover {
      background: #f6f6f6;
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
