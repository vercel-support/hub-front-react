import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import TuneIcon from "@material-ui/icons/Tune";
import { store } from "../../../store";
import CategoryToolsStyled from "./styles";
import Hidden from "@material-ui/core/Hidden";

const CategoryTools = ({ filterOpen, setFilterOpen }) => {
  const { dispatch } = useContext(store);

  return (
    <CategoryToolsStyled>
      <Hidden lgUp>
        <Button
          variant="outlined"
          onClick={() => {
            // dispatch({ type: "CATEGORY_ACTION", payload: "filter" });
            setFilterOpen(!filterOpen);
          }}
        >
          <TuneIcon /> filtrar
        </Button>
      </Hidden>
      {/* <Button
        variant="outlined"
        onClick={() => dispatch({ type: "CATEGORY_ACTION", payload: "sort" })}
      >
        <TuneIcon /> ordenar
      </Button> */}
    </CategoryToolsStyled>
  );
};

export default CategoryTools;
