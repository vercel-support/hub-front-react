import React from "react";
import Head from "next/head";
import Customer from "../../src/components/pages/Customer";
import { requestCategories } from "../../src/services";

const Pages = ({ content }) => (
  <React.Fragment>
    <Head>
      <title>Geração Pet - Meus endereços</title>
      <meta property="og:title" content="Geração Pet - Meus endereços" />
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Geração Pet - Meus endereços"
      />
      <meta
        property="og:description"
        content="Geração Pet - Meus endereços"
      />
    </Head>
    <Customer content={content} page="customerAddresses"/>
  </React.Fragment>
);

export const getStaticProps = async () => {
  const response = await requestCategories();

  return {
    props: { content: { data: { categories: response.data } } },
  };
};

export default Pages;