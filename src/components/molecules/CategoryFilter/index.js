import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";

import Hidden from "@material-ui/core/Hidden";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";

import CategoryFilterStyled, { FilteringByStyled } from "./styles";

const FilteringBy = ({ selecteds, setSelecteds }) =>
  Object.keys(selecteds).length ? (
    <FilteringByStyled>
      <p>Filtrando por:</p>
      <ul>
        {Object.keys(selecteds).map((selected) => (
          <li>
            <strong>{`${selected}: `}</strong>
            {selecteds[selected].join(", ")}
          </li>
        ))}
      </ul>
      <button onClick={() => setSelecteds({})}>Limpar filtros</button>
    </FilteringByStyled>
  ) : null;

const CategoryFilter = ({ filters = [] }) => {
  const [selecteds, setSelecteds] = useState({});
  const [open, setOpen] = useState(false);

  const handleAddRemove = (filterId, label) => {
    const hasFilter = !!selecteds[filterId];

    if (!hasFilter) {
      return setSelecteds({
        ...selecteds,
        [filterId]: [label],
      });
    }

    const hasValue = selecteds[filterId].includes(label);

    setSelecteds(
      hasValue
        ? {
            ...selecteds,
            [filterId]: selecteds[filterId].filter((item) => item !== label),
          }
        : {
            ...selecteds,
            [filterId]: [...selecteds[filterId], label],
          }
    );
  };

  return (
    <CategoryFilterStyled>
      <FilteringBy selecteds={selecteds} setSelecteds={setSelecteds} />

      <ul>
        {filters.map((filter) => (
          <li key={filter.id}>
            <strong>{filter.frontEndLabel}</strong>
            {filter?.values?.length && (
              <ul>
                {filter.values.map((value) => (
                  <li key={value.label}>
                    <Checkbox
                      onChange={() =>
                        handleAddRemove(filter.frontEndLabel, value.label)
                      }
                    />
                    {value.label}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </CategoryFilterStyled>
  );
};

export default CategoryFilter;
