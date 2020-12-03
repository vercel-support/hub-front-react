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
        content="Geração Pet - Pet Shop Online - Descrição"
      />
      <meta
        property="og:description"
        content="Geração Pet - Pet Shop Online - Descrição"
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
