import React from "react";
import Head from "next/head";
import { requestCategories, requestRedirect } from "../src/services";
import routes from "../src/utils/switchComponentes";

const Pages = ({ content }) => {
  const Page = routes[content.head.pageType];

  return (
    <>
      <Head>
        <title>{content.head.metaTitle}</title>
        <meta property="og:title" content={content.head.metaTitle} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={content.head.metaDescription} />
        <meta
          property="og:description"
          content={content.head.metaDescription}
        />
      </Head>
      <Page content={content} />
    </>
  );
};

export const getServerSideProps = async ({ req, res }) => {
  const currentUrl = req.url;

  const { data: route } = await requestRedirect(currentUrl.substr(1));

  const response = await requestCategories();

  return {
    props: { content: { head: route.data, categories: response.data } },
  };
};

export default Pages;
