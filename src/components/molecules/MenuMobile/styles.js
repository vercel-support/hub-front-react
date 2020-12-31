import React from "react";
import styled from "styled-components";

const Wrapper = styled(React.Fragment)`
  .MuiCollapse-wrapperInner {
    margin-left: 25px;
    border-left: 1px solid #dcdcdc;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const ItemText = styled.a`
  font-family: "Open Sans",Helvetica,Arial,sans-serif;
  text-transform: uppercase;
  font-size: 1rem;
`;

export default Wrapper;