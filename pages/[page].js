import React from "react";
import Head from "next/head";
import { requestCategories, requestCategoriesPagePath, requestProductsPagePath, requestRedirect } from "../src/services";
import routes from "../src/utils/switchComponentes";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { CACHE_PAGES } = publicRuntimeConfig;

const Pages = ({ content }) => {
  if(!content || !content.data)
    return (
      <>
        Página não encontrada
      </>
    );
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

export const getStaticPaths = async() => {
    let paths = [];
    console.log(CACHE_PAGES);
    if(CACHE_PAGES == 'true'){
      console.log('buscando urls');
      let productsPath = await requestProductsPagePath();
      let categoriesPath = await requestCategoriesPagePath();
      let paths = productsPath.map((path) => ({
          params: { page: path },
      }));
      paths = paths.concat(categoriesPath.map((path) => ({
          params: { page: path },
      })));
      //paths = [{ params: { page: "racao-biofresh-para-caes-adultos-racas-pequenas-e-mini-sabor-frango" } }];
    }
    return { paths, fallback: false }
};

export const getStaticProps = async ({ params }) => {
  try{
    const url = params.page;
    const { data: route } = await requestRedirect(url);
    const response = await requestCategories();
  
    return {
      props: { content: { data: { ...route.data, categories: response.data, url} } },
    };
  }
  catch(error){
    return {
      props: {}
    };
  }

};

export default Pages;