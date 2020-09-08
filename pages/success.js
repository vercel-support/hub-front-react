import React from "react";
import Head from "next/head";
import routes from "../src/utils/switchComponentes";

const Success = () => {
  const Page = routes["success"];

  return (
    <>
      <Head>
        <title>GeraçãoPet - Página de Sucesso</title>
        <meta property="og:title" content="GeraçãoPet - Página de Carrinho." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="GeraçãoPet - Página de Carrinho." />
        <meta
          property="og:description"
          content="GeraçãoPet - Página de Sucesso."
        />
      </Head>
      <Page />
    </>
  );
};

export default Success;
