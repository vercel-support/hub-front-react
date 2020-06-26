import React, { useEffect } from "react";
import Head from "next/head";
import { get } from "../src/services";
import routes from "../src/utils/switchComponentes";

const Pages = ({ content }) => {
  const Page = routes[content.pageType];

  return (
    <>
      <Head>
        <title>{content.data.title} teste</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page />
    </>
  );
};

export const getServerSideProps = async ({ req, res }) => {
  const currentUrl = req.url;

  const { data } = await get(
    `http://localhost:3000/api/route?url=${currentUrl.substr(1)}`
  );

  if (data && currentUrl !== data.target) {
    res.writeHead(data.code, { Location: data.target });
    res.end();
  }

  return { props: { content: data } };
};

export default Pages;
