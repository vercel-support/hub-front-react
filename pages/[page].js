import React from "react";
import Head from "next/head";
import { requestCategories, requestProductsPagePath, requestRedirect } from "../src/services";
import routes from "../src/utils/switchComponentes";

const Pages = ({ content }) => {
  const Page = routes[content.data.pageType];

  return (
    <>
        teste
    </>
  );
};

export const getStaticPaths = async() => {
    const productsPath = await requestProductsPagePath();
    const paths = productsPath.map((path) => ({
        params: { page: path },
    }));
    console.log(paths);
    return { paths, fallback: false }
};

export const getStaticProps = async ({ params }) => {
  const url = params.page;
  console.log(url);
  const { data: route } = await requestRedirect(url);
  const response = await requestCategories();

  return {
    props: { content: { data: { ...route.data, categories: response.data, url} } },
  };
};

export default Pages;
