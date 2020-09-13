import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  main > .MuiContainer-root {
    margin-top:20px;
    padding: 0;
  }


  .MuiCollapse-wrapperInner {
    margin-left: 25px; 
    border-left: 1px solid #dcdcdc;
  }

  html, body {
    background-color: #FFF !important;
    font-family: "Open Sans",Helvetica,Arial,sans-serif;
  }
  a {
    text-decoration: none;
  }  
`;
