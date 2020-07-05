import React from "react";
import { Container } from "@material-ui/core";

const Content = ({ children }) => (
  <main>
    <Container>{children}</Container>
  </main>
);

export default Content;
