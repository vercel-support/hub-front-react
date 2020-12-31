import React from "react";
import DropDownStyled from "./styles";

const DropDown = ({ children, open }) => (
  <DropDownStyled open={open} className="dropdown">
    {children}
  </DropDownStyled>
);

export default DropDown;
