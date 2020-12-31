import React from "react";
import Head from "next/head";
import Customer from "../../src/components/pages/Customer";
import { requestCategories } from "../../src/services";

const Pages = ({ content }) => (
  <React.Fragment>
    <Head>
      <title>Geração Pet - Meus créditos</title>
      <meta property="og:title" content="Geração Pet - Meus créditos" />
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Geração Pet - Meus créditos"
      />
      <meta
        property="og:description"
        content="Geração Pet - Meus créditos"
      />
    </Head>
    <Customer content={content} page="customerCredits"/>
  </React.Fragment>
);

export const getStaticProps = async () => {
  const response = await requestCategories();

  return {
    props: { content: { data: { categories: response.data } } },
  };
};

export default Pages;