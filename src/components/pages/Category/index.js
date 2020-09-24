import React, { useContext, useEffect, useState } from "react";
import { store } from "../../../store";
import { CategoryDescription } from "../../atoms";
import {
  CategoryBanner,
  CategoryFilter,
  CategorySort,
  CategoryTools,
} from "../../molecules";
import { ListProducts } from "../../organisms";
import { TwoColumns } from "../../templates";
import { categoryPageView } from "../../../../lib/ga";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;
import axios from "axios";

const Category = ({ content }) => {
  const { state, dispatch } = useContext(store);
  const { action } = state.category;

  const [products, setProducts] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState([]);
  const [pagination, setPagination] = useState({
    page: 0, perPage: 32
  });
  const [savedStore, setSavedStore] = useState(null);
  const [outOfStock, setOutOfStock] = useState(false);

  const fetchProducts = async(reset) => {
    try{  
      const query = content.data.url;
      const filtersSelected = filters.join(",");
      const page = reset ? 0 : pagination.page;
  
      let url = `${API_URL}/catalogs/redirect?url=${query}`;
      if(savedStore) url += `&storeId=${savedStore.id}`;
      if(filtersSelected.length > 0) url+= `&filters=${filtersSelected}`;
      url+= `&page=${page}&perPage=${pagination.perPage}&outOfStock=${outOfStock.toString()}`;
  
      let response = await axios.get(url);
      if(response.data.data && response.data.status === 200){
        const newProducts = response.data.data.products;

        if(response.data.data.endOfInStock && !outOfStock){
          setOutOfStock(true);
          return;
        }

        if(reset) setProducts(newProducts);
        else setProducts([...products, ...newProducts]);

        categoryPageView(window.dataLayer.push, {
          products: newProducts,
          url: content.data.categoryUrl,
          pageName: content.data.pageName,
        });
      }
    }
    catch(error){

    }
  }

  const handleFiltersChange = (filters) => {
    setFilters(filters);
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  const handlePageChange = (page) => {
    setPagination({ ...pagination, page });
  }

  useEffect(() => {
    setPagination({ ...pagination, page: 0 });
  }, [outOfStock]);

  useEffect(() => {
    setOutOfStock(false);
  }, [filters]);

  useEffect(() => {
    fetchProducts(false);
  }, [pagination]);

  useEffect(() => {
    let lsStore = localStorage.getItem("myStore");
    if(lsStore && lsStore !== "undefined") setSavedStore(JSON.parse(lsStore));
  }, []);

  useEffect(() => {
    fetchProducts(true);
  }, [savedStore]);

  useEffect(() => {
    if(state.myStore){
      setSavedStore(state.myStore);
    }
  }, [state.myStore]);

  return (
    <TwoColumns
      beforeContent={
        <React.Fragment>
          <CategoryBanner
            categoryName={content.data.pageName}
            items={content.data.breadcrumbs}
          />
          <CategoryTools
            filterOpen={filterOpen}
            setFilterOpen={setFilterOpen}
          />
        </React.Fragment>
      }
      content={content}
      left={
        /* action === "sort" ? (
          // <CategorySort sorters={content.data.sortOptions} />
          <CategoryFilter
            filters={content.data.filtersAvailable}
            setProducts={setProducts}
          />
        ) : (
          <CategoryFilter
            filters={content.data.filtersAvailable}
            setProducts={setProducts}
          />
        ) */
        <CategoryFilter
          filterOpen={filterOpen}
          setFilterOpen={setFilterOpen}
          content={content}
          filters={content.data.filtersAvailable}
          setProducts={setProducts}
          handleFiltersChange={handleFiltersChange}
        />
      }
    >
      <CategoryDescription description={content.data.description} />
      <ListProducts
        products={products}
        perPage={pagination.perPage}
        handlePageChange={handlePageChange}
      />
    </TwoColumns>
  );
};

export default Category;
