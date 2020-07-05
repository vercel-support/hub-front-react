import React, { useEffect } from "react";
import Head from "next/head";
import { requestRedirect } from "../src/services";
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
      <Page />
    </>
  );
};

export const getServerSideProps = async ({ req, res }) => {
  const currentUrl = req.url;

  const { data } = await requestRedirect(
    "http://localhost:3000/api/route",
    currentUrl.substr(1)
  );

  /* No Redirect
  if (data && currentUrl !== data.target) {
    res.writeHead(data.status, { Location: data.target });
    res.end();
  }
  */

  return { props: { content: data } };
};

export default Pages;
