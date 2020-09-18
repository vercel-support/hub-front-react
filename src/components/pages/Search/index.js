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

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;
import axios from "axios";

const Search = ({ content }) => {
  const { state, dispatch } = useContext(store);
  const { action } = state.category;

  const [products, setProducts] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState([]);
  const [pagination, setPagination] = useState({
    page: 0, perPage: 32
  });

  const fetchProducts = async(reset) => {
    try{
      let savedStore = localStorage.getItem("myStore");
      if(savedStore && savedStore !== "undefined")
        savedStore = JSON.parse(savedStore);
      else savedStore = null;
  
      const query = content.data.userQuery;
      const filtersSelected = filters.join(",");
  
      let url = `${API_URL}/catalogs/products/search?text=${query}`;
      if(savedStore) url += `&storeId=${savedStore.id}`;
      if(filtersSelected.length > 0) url+= `&filters=${filtersSelected}`;
      url+= `&page=${pagination.page}&perPage=${pagination.perPage}`
  
      let response = await axios.get(url);
      if(response.data.data && response.data.status === 200){
        const newProducts = response.data.data.products;
        if(reset) setProducts(newProducts);
        else setProducts([...products, ...newProducts]);
      }
    }
    catch(error){

    }
  }

  useEffect(() => {
    fetchProducts(false);
  }, [pagination]);

  useEffect(() => {
    fetchProducts(true);
  }, [filters]);

  useEffect(() => {
    fetchProducts(true);
  }, []);

  const handleFiltersChange = (filters) => {
    setFilters(filters);
    setPagination({
      ...pagination, page: 0
    });

    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  const handlePageChange = (page) => {
    setPagination({ ...pagination, page });
  }

  return (
    <TwoColumns
      beforeContent={
        <React.Fragment>
          <CategoryBanner categoryName={content.data.pageName} />
          <CategoryTools
            filterOpen={filterOpen}
            setFilterOpen={setFilterOpen}
          />
        </React.Fragment>
      }
      content={content}
      left={
        action === "sort" ? (
          // <CategorySort sorters={content.data.sortOptions} />
          <CategoryFilter
            filterOpen={filterOpen}
            setFilterOpen={setFilterOpen}
            content={content}
            filters={content.data.filtersAvailable}
            setProducts={setProducts}
          />
        ) : (
          <CategoryFilter
            filterOpen={filterOpen}
            setFilterOpen={setFilterOpen}
            content={content}
            filters={content.data.filtersAvailable}
            setProducts={setProducts}
            handleFiltersChange={handleFiltersChange}
          />
        )
      }
    >
      <ListProducts
        products={products}
        handlePageChange={handlePageChange}
      />
    </TwoColumns>
  );
};

export default Search;
