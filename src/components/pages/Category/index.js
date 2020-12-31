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

/*import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig; */
const API_URL = process.env.API_URL;
import axios from "axios";

const Category = ({ content }) => {
  const { state, dispatch } = useContext(store);
  const { action } = state.category;

  const [products, setProducts] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);

  const [ searchOptions, setSearchOptions ] = useState({
    inStockPage: 0,
    outOfStockPage: 0,
    perPage: 32,
    store: null,
    outOfStock: false,
    filters: [],
    resetPage: 0
  });

  useEffect(() => {
    let savedStore = localStorage.getItem("myStore");
    if(savedStore && savedStore !== "undefined") setSearchOptions({ ...searchOptions, store: JSON.parse(savedStore) });
  }, []);

  useEffect(() => {
    setProducts([]);
    if(state.myStore){
      setSearchOptions({
        ...searchOptions,
        store: state.myStore,
        inStockPage: 0,
        outOfStockPage: 0,
        outOfStock: false,
        resetPage: searchOptions.resetPage + 1
      });
    }

  }, [state.myStore]);

  useEffect(() => {
    if(!searchOptions.outOfStock) fetchInStockProducts();
    else fetchOutOfStockProducts();
  }, [ searchOptions.store, searchOptions.outOfStock, searchOptions.inStockPage, searchOptions.outOfStockPage, searchOptions.filters ]);

  const getSearchQuery = (outOfStockFlag) => {
    let url = `${API_URL}/catalogs/redirect?url=${content.data.url}`;
    if(searchOptions.store) url += `&storeId=${searchOptions.store.id}`;

    const filtersSelected = searchOptions.filters.join(",");
    const page = outOfStockFlag ? searchOptions.outOfStockPage : searchOptions.inStockPage;
    if(filtersSelected.length > 0) url+= `&filters=${filtersSelected}`;
    url+= `&page=${page}&perPage=${searchOptions.perPage}&outOfStock=${outOfStockFlag.toString()}`;
    return url;
  }

  const fetchOutOfStockProducts = async() => {
    const url = getSearchQuery(true);
    let response = await axios.get(url);
    if(response.data.data && response.data.status === 200){
      const newProducts = response.data.data.products;
      setProducts([...products, ...newProducts]);
    }
  }

  const fetchInStockProducts = async() => {
    const url = getSearchQuery(false);
    let response = await axios.get(url);
    if(response.data.data && response.data.status === 200){
      if(response.data.data.endOfInStock && !searchOptions.outOfStock){
        setSearchOptions({ ...searchOptions, outOfStock: true });
      }
      else{
        const newProducts = response.data.data.products;
        setProducts([...products, ...newProducts]);
      }
    }
  }

  const handlePageChange = (page) => {
    if(searchOptions.outOfStock)
      setSearchOptions({
        ...searchOptions, outOfStockPage: page
      });
    else
      setSearchOptions({
        ...searchOptions, inStockPage: page
      });
  }

  const handleFiltersChange = (filters) => {
    setSearchOptions({
      ...searchOptions,
      inStockPage: 0,
      outOfStockPage: 0,
      outOfStock: false,
      filters: [...filters],
      resetPage: searchOptions.resetPage + 1
    });
    setProducts([]);
  }

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
        perPage={searchOptions.perPage}
        handlePageChange={handlePageChange}
        resetPage={searchOptions.resetPage}
      />
      <div class="render-type" style={{display: "none"}}>{content.data.propsType}</div>
    </TwoColumns>
  );
};

export default Category;
