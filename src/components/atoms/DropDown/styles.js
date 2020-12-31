import styled from "styled-components";

const DropDownStyled = styled.div`
  background-color: #fff;
  cursor: auto;
  display: ${(props) => (props.open ? "block" : "none")};
  min-width: 100%;
  position: absolute;
  top: 100%;
  z-index: 5;
`;

export default DropDownStyled;
