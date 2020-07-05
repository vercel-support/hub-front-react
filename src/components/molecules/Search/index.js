import React from "react";
import { useForm } from "react-hook-form";
import SearchIcon from "@material-ui/icons/Search";
import SearchStyled from "./styles";

const Search = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <SearchStyled onSubmit={handleSubmit(onSubmit)}>
      <input
        name="search"
        placeholder="O que seu pet precisa?"
        ref={register}
      />
      <button type="submit">
        <SearchIcon />
      </button>
    </SearchStyled>
  );
};

export default Search;
