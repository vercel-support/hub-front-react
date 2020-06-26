import React from "react";
import Head from "next/head";
import Home from "../src/components/pages/Home";

const Pages = () => (
  <React.Fragment>
    <Head>
      <title>Geração Pet - Pet Shop Online</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Home />
  </React.Fragment>
);

export default Pages;
