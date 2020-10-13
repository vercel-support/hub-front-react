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
import Chip from "@material-ui/core/Chip";

const FilteringBy = ({ selecteds, setSelecteds, filters }) => {
  const [filtersSelected, setFiltersSelected] = useState([]);

  const getLabel = (code) => {
    for (let filter of filters) {
      let found_id = filter.values.find(
        (v) => parseInt(v.id) === parseInt(code)
      );
      if (found_id) return found_id.label;
    }
  };

  useEffect(() => {
    let filterList = [];
    Object.keys(selecteds).map((selected) => {
      selecteds[selected].map((code) => {
        filterList.push(getLabel(code));
      });
    });
    setFiltersSelected(filterList);
  }, [selecteds]);

  return Object.keys(selecteds).length ? (
    <FilteringByStyled>
      {filtersSelected.map((filter) => (
        <div>
          <Chip color="primary" label={filter} />
        </div>
      ))}

      <Button
        variant="contained"
        color="primary"
        onClick={() => setSelecteds({})}
      >
        Limpar filtros
      </Button>
    </FilteringByStyled>
  ) : null;
};

const CategoryFilter = ({
  showMin = 5,
  content = {},
  filters = [],
  filterOpen,
  setFilterOpen,
  setProducts,
  handleFiltersChange,
}) => {
  let { categoryUrl = "" } = content?.data;
  const [selecteds, setSelecteds] = useState({});
  const [expanded, setExpanded] = useState(false);
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
    if (categoryUrl && myStore) {
      let params = [];

      Object.keys(selecteds).forEach((filter) => {
        params = [...params, ...selecteds[filter]];
      });
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
  };

  useEffect(() => {
    handleChange();
  }, [selecteds]);

  const clearFilter = () => {
    setSelecteds({});
    setFilterOpen(false);
  }

  return (
    <CategoryFilterStyled>
      <Hidden mdDown>
        <FilteringBy
          selecteds={selecteds}
          setSelecteds={setSelecteds}
          filters={filters}
        />
        <ul>
          {filters.map((filter) => (
            <React.Fragment>
              <li key={filter.id}>
                <strong>{filter.frontEndLabel}</strong>
                {filter?.values?.length && (
                  <ul>
                    {filter?.values
                      ?.slice(
                        0,
                        expanded == filter.frontEndLabel
                          ? filter?.values?.length
                          : showMin
                      )
                      .map((value) => {
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

                {filter?.values?.length > showMin && (
                  <a
                    role="button"
                    onClick={() =>
                      setExpanded(
                        filter.frontEndLabel == expanded
                          ? false
                          : filter.frontEndLabel
                      )
                    }
                    className="item view-more"
                  >
                    <span>
                      {expanded == filter.frontEndLabel
                        ? "Ver menos"
                        : "Ver mais"}
                    </span>
                  </a>
                )}
              </li>
            </React.Fragment>
          ))}
        </ul>
      </Hidden>

      <Hidden lgUp>
        <Drawer anchor="right" open={filterOpen} disableScrollLock={true}>
          <DrawerContentStyled>
            <div>
              <Button onClick={() => setFilterOpen(false)}>voltar</Button>
              <Button onClick={() => clearFilter()}>limpar filtro</Button>
            </div>
            <ul>
              {filters.map((filter) => (
                <React.Fragment>
                  <li key={filter.id}>
                    <strong>{filter.frontEndLabel}</strong>
                    {filter?.values?.length && (
                      <ul>
                        {filter?.values
                          ?.slice(
                            0,
                            expanded == filter.frontEndLabel
                              ? filter?.values?.length
                              : showMin
                          )
                          .map((value) => {
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

                        {filter?.values?.length > showMin && (
                          <a
                            role="button"
                            onClick={() =>
                              setExpanded(
                                filter.frontEndLabel == expanded
                                  ? false
                                  : filter.frontEndLabel
                              )
                            }
                            className="item view-more"
                          >
                            <span>
                              {expanded == filter.frontEndLabel
                                ? "Ver menos"
                                : "Ver mais"}
                            </span>
                          </a>
                        )}
                      </ul>
                    )}
                    <Divider />
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </DrawerContentStyled>
        </Drawer>
      </Hidden>
    </CategoryFilterStyled>
  );
};

export default CategoryFilter;
