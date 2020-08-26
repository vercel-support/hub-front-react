import React from "react";
import Head from "next/head";
import { requestCategories, requestRedirect } from "../src/services";
import routes from "../src/utils/switchComponentes";

const Pages = ({ content }) => {
  const Page = routes[content.data.pageType];

  return (
    <>
      <Head>
        <title>{content.data.metaTitle}</title>
        <meta property="og:title" content={content.data.metaTitle} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={content.data.metaDescription} />
        <meta
          property="og:description"
          content={content.data.metaDescription}
        />
      </Head>
      <Page content={content} />
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  const { data: route } = await requestRedirect(query.page[0]);
  const response = await requestCategories();

  return {
    props: { content: { data: { ...route.data, categories: response.data } } },
  };
};

export default Pages;
