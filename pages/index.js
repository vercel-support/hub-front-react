import React from "react";
import Head from "next/head";
import Home from "../src/components/pages/Home";
import { requestCategories } from "../src/services";

const Pages = ({ content }) => (
  <React.Fragment>
    <Head>
      <title>Geração Pet - Pet Shop Online</title>
      <meta property="og:title" content="Geração Pet - Pet Shop Online" />
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Pet Shop Online mais recomendado pelos amigos. Tudo em 3x sem juros e entrega garantida em TODO Brasil. Os Melhores Preços - Acesse e Confira!"
      />
      <meta
        property="og:description"
        content="Pet Shop Online mais recomendado pelos amigos. Tudo em 3x sem juros e entrega garantida em TODO Brasil. Os Melhores Preços - Acesse e Confira!"
      />
    </Head>
    <Home content={content} />
  </React.Fragment>
);

export const getStaticProps = async () => {
  const response = await requestCategories();

  return {
    props: { content: { data: { categories: response.data } } },
  };
};

export default Pages;