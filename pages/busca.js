import React from "react";
import Head from "next/head";
import Search from "../src/components/pages/Search";
import { requestCategories, requestSearch } from "../src/services";

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
    <Search content={content} />
  </React.Fragment>
);

export const getServerSideProps = async ({ query = {} }) => {
  const { data: route } = await requestSearch(query);
  const response = await requestCategories();

  return {
    props: { content: { data: { ...route.data, categories: response.data } } },
  };
};

export default Pages;
