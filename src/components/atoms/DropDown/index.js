import React from "react";
import styled from "styled-components";

const DropDownStyled = styled.div`
  background-color: #fff;
  cursor: auto;
  display: ${(props) => (props.open ? "block" : "none")};
  min-width: 100%;
  position: absolute;
  top: 100%;
  z-index: 2;
`;

const DropDown = ({ children, open }) => {
  return (
    <DropDownStyled open={open} className="dropdown">
      {children}
    </DropDownStyled>
  );
};

export default DropDown;
