import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Checkbox from "@material-ui/core/Checkbox";
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
        {Object.keys(selecteds).map((selected) => (
          <li>
            <strong>{`${selected}: `}</strong>
            {typeof selecteds[selected] === "object"
              ? selecteds[selected].join(", ")
              : selecteds[selected]}
          </li>
        ))}
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

const CategoryFilter = ({ filters = [], setProducts }) => {
  const [open, setOpen] = useState(true);
  const [selecteds, setSelecteds] = useState({});
  const router = useRouter();
  const { query } = router;

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

  useEffect(() => {
    // initParams();
    let params = [];

    Object.keys(selecteds).forEach((filter) => {
      params = [...params, ...selecteds[filter]];
    });

    /*axios
      .get(
        `http://18.229.234.11:3000/api/V2/catalogs/redirect?url=marcas/royal-canin&storeId=5e8e1c6e43a61128433f0eed&page=0&perPage=16&filters=${params.join(
          ","
        )}`
      )
      .then(({ data }) => {
        console.log(data);
        setProducts(data.data.products);
      });*/
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
        <Drawer anchor="right" open={open}>
          <DrawerContentStyled>
            <div>
              <Button onClick={() => setOpen(false)}>voltar</Button>
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
