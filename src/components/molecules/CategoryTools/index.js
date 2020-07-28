import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import TuneIcon from "@material-ui/icons/Tune";
import { store } from "../../../store";
import CategoryToolsStyled from "./styles";

const CategoryTools = () => {
  const { dispatch } = useContext(store);

  return (
    <CategoryToolsStyled>
      <Button
        variant="outlined"
        onClick={() => dispatch({ type: "CATEGORY_ACTION", payload: "filter" })}
      >
        <TuneIcon /> filtrar
      </Button>
      <Button
        variant="outlined"
        onClick={() => dispatch({ type: "CATEGORY_ACTION", payload: "sort" })}
      >
        <TuneIcon /> ordenar
      </Button>
    </CategoryToolsStyled>
  );
};

export default CategoryTools;
