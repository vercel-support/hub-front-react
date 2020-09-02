import React from "react";
import Head from "next/head";
import { requestCategories, requestRedirect } from "../src/services";
import routes from "../src/utils/switchComponentes";

const Checkout = () => {
  const Page = routes["checkout"];

  return (
    <>
      <Head>
        <title>GeraçãoPet - Página de Carrinho</title>
        <meta property="og:title" content="GeraçãoPet - Página de Carrinho." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="GeraçãoPet - Página de Carrinho." />
        <meta
          property="og:description"
          content="GeraçãoPet - Página de Carrinho."
        />
      </Head>
      <Page />
    </>
  );
};

export default Checkout;
