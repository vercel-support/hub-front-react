import styled from "styled-components";

const BreadcrumbsStyled = styled.ul`
  align-items: center;
  color: #ffffff;
  display: flex;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  justify-content: center;
  line-height: 19px;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    color: #ffffff;
    &:after {
      content: "/";
      display: inline-block;
      height: 10px;
      text-align: center;
      width: 15px;
    }
    &:last-child:after {
      display: none;
    }
    a {
      color: #ffffff;
      text-decoration: none;
    }
  }
`;

export default BreadcrumbsStyled;
