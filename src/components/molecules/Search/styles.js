import styled from "styled-components";
import Icon from "./icon";

export const SearchContainer = styled.div`
  background-color: ${(props) => (props.barOpened ? "white" : "transparent")};
  width: ${(props) => (props.barOpened ? "80vw" : "3rem")};
  height: 40px;
  border-radius: 5px;
  cursor: ${(props) => (props.barOpened ? "auto" : "pointer")};
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  position: absolute;
  top: 1.2%;
  right: 17%;

  @media screen and (min-width: 1280px) {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    cursor: auto;
    background-color: white;
  }
`;

export const ResultsContainer = styled.div`
  display: ${(props) =>
    props.barOpened && props.suggestions.length > 0 ? "block" : "none"};
  width: 80vw;
  z-index: 10;
  border-radius: 2px;
  background-color: white;
  position: absolute;
  right: 0%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 1280px) {
    position: relative;
    top: 3px;
    left: 0;
    width: 100%;
    background-color: white;
  }
`;

export const ResultItem = styled.div`
  width: 100%;
  padding: 0.2rem;
  background-color: white;
  z-index: 11;
  cursor: pointer;
`;

export const ProductImage = styled.div`
  & > img {
    display: block;
    margin: 0 auto;
    max-width: 90%;
    max-height: 100%;
    width: auto;
    height: 4rem;
    object-fit: cover;
  }
`;

export const ProductName = styled.div`
  position: relative;
  top: 25%;
  & > h4 {
    text-decoration: none;
    font-size: 12px;
    font-weight: bold;
    line-height: 19px;
    margin: 0;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  @media screen and (min-width: 1280px) {
    position: relative;
  }
`;

export const Input = styled.input`
  position: relative;
  background-color: transparent;
  font-size: 14px;
  width: ${(props) => (props.barOpened ? "100%" : "0")};
  height: 100%;
  margin-left: 0.2rem;
  border: none;
  outline: none;
  line-height: 1;
  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: #c3c3c3;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
    &::placeholder {
      color: #c3c3c3;
    }
  }
`;

export const Button = styled.button`
  position: absolute;
  right: 1rem;
  top: 20%;
  line-height: 1;
  pointer-events: ${(props) => (props.barOpened ? "auto" : "none")};
  cursor: ${(props) => (props.barOpened ? "pointer" : "none")};
  background-color: transparent;
  border: none;
  outline: none;
`;

export const Svg = styled(Icon)`
  width: 20px;
  height: 20px;
  fill: ${(props) => (props.barOpened ? "#c3c3c3" : "white")};

  @media screen and (min-width: 1280px) {
    fill: #c3c3c3;
  }
`;
