import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { store } from "../../../store";
import { requestProducts } from "../../../services";
import CategoryFilterStyled, {
  DrawerContentStyled,
  FilteringByStyled,
} from "./styles";

import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";

const FilteringBy = ({ selecteds, setSelecteds }) =>
  Object.keys(selecteds).length ? (
    <FilteringByStyled>
      <p>Filtrando por:</p>
      <ul>
        {Object.keys(selecteds).map((selected) => {
          return (
            <li>
              <strong>{`${selected}: `}</strong>
              {typeof selecteds[selected] === "object"
                ? selecteds[selected].join(", ")
                : selecteds[selected]}
            </li>
          );
        })}
      </ul>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setSelecteds({})}
      >
        Limpar filtros
      </Button>
    </FilteringByStyled>
  ) : null;

const CategoryFilter = ({
  content = {},
  filters = [],
  filterOpen,
  setFilterOpen,
  setProducts,
  handleFiltersChange
}) => {
  let { categoryUrl = "" } = content?.data;
  const [selecteds, setSelecteds] = useState({});
  const router = useRouter();
  const { query } = router;
  const { state } = useContext(store);
  const { myStore = {} } = state;

  const initParams = () => {
    const params = { ...query };
    delete params.page;
    setSelecteds(params);
  };

  const handleAddRemove = (filterId, label) => {
    const hasFilter = !!selecteds[filterId];
    let newSelecteds;

    if (!hasFilter) {
      newSelecteds = {
        ...selecteds,
        [filterId]: [label],
      };

      setSelecteds(newSelecteds);
    } else {
      const hasValue = selecteds[filterId].includes(label);

      newSelecteds = hasValue
        ? {
            ...selecteds,
            [filterId]: selecteds[filterId].filter((item) => item !== label),
          }
        : {
            ...selecteds,
            [filterId]: [...selecteds[filterId], label],
          };

      setSelecteds(newSelecteds);
    }
  };

  const changeRoute = () => {
    const route = router.asPath.split("?")[0];

    /*router.push(
      {
        pathname: route,
        query: selecteds,
      },
      { shallow: true }
    );*/
  };

  const handleProducts = async () => {
    if(categoryUrl && myStore){
      let params = [];

      Object.keys(selecteds).forEach((filter) => {
        params = [...params, ...selecteds[filter]];
      });
      console.log(params);
      const { products } = await requestProducts(
        categoryUrl,
        0,
        myStore.id,
        params
      );
  
      setProducts(products);
    }

  };

  const handleChange = () => {
    let params = [];
    Object.keys(selecteds).forEach((filter) => {
      params = [...params, ...selecteds[filter]];
    });
    handleFiltersChange(params);
  }


  useEffect(() => {
    handleChange();
  }, [selecteds]);

  return (
    <CategoryFilterStyled>
      <Hidden mdDown>
        <FilteringBy selecteds={selecteds} setSelecteds={setSelecteds} />
        <ul>
          {filters.map((filter) => (
            <li key={filter.id}>
              <strong>{filter.frontEndLabel}</strong>
              {filter?.values?.length && (
                <ul>
                  {filter.values.map((value) => {
                    const checked =
                      selecteds[filter.code] &&
                      selecteds[filter.code].includes(value.id);

                    return (
                      <li key={value.label}>
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() =>
                            handleAddRemove(filter.code, value.id)
                          }
                        />
                        {value.label}
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </Hidden>

      <Hidden lgUp>
        <Drawer anchor="right" open={filterOpen}>
          <DrawerContentStyled>
            <div>
              <Button onClick={() => setFilterOpen(false)}>voltar</Button>
              <Button onClick={() => setSelecteds({})}>limpar filtro</Button>
            </div>
            <ul>
              {filters.map((filter) => (
                <li key={filter.id}>
                  <strong>{filter.frontEndLabel}</strong>
                  {filter?.values?.length && (
                    <ul>
                      {filter.values.map((value) => {
                        const checked =
                          selecteds[filter.code] &&
                          selecteds[filter.code].includes(value.id);

                        return (
                          <li key={value.label}>
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() =>
                                handleAddRemove(filter.code, value.id)
                              }
                            />
                            {value.label}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                  <Divider />
                </li>
              ))}
            </ul>
          </DrawerContentStyled>
        </Drawer>
      </Hidden>
    </CategoryFilterStyled>
  );
};

export default CategoryFilter;
