import styled from "styled-components";

const FooterLinksStyled = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
  justify-content: center;
  margin: 0 0 10px 0;
  padding: 0;

  a {
    color: #2983b9;
    font-size: 14px;
    font-weight: bold;
    line-height: 19px;
    padding: 0 18px;
    text-decoration: none;
  }
  @media screen and (min-width: 1280px) {
    justify-content: flex-start;
    margin: 0;
  }
`;

export default FooterLinksStyled;
