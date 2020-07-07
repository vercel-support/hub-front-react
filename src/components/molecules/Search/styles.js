import styled from "styled-components";

const SearchStyled = styled.form`
  background-color: transparent;
  width: 100%;
  & > button {
    background-color: transparent;
    border: none;
    outline: none;
    width: 40px;
  }

  & > input {
    display: none;
    outline: none;
    position: absolute;
  }

  @media screen and (min-width: 1280px) {
    align-items: center;
    background-color: #fafafa;
    border-radius: 5px;
    display: flex;
    height: 35px;
    padding: 0 10px;
    width: 100%;

    & > input {
      background-color: transparent;
      border: none;
      display: block;
      height: 100%;
      position: relative;
      width: calc(100% - 40px);
    }
  }
`;

export default SearchStyled;
