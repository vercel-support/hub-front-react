import styled from "styled-components";

const GeoLocationStyled = styled.div`
  align-items: center;
  color: #000000;
  cursor: pointer;
  display: flex;
  height: 45px;
  position: relative;
  max-width: 100%;
  margin-top: 7px;
  background-color: ${(props) => (props && props.open && "#ffffff")};
  color: ${(props) => (props.open && "#2983B9" )};
  
  &:hover {
    background-color: #ffffff;
    color: #2983B9;
  }
  & > svg {
    margin: 0 5px;
  }
  & > div:nth-child(2) {
    width: 285px;
  }
  & > .dropdown {
    background-color: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 280px;
  }
`;

export const GeoLocationCurrentStyled = styled.div`

  .openDrop {
    color: #2983B9;
  }

  color: ${(props) => (props.open ? "" : "#ffffff")};
  display: flex;
  flex-direction: column;
  & > p {
    align-items: center;
    display: flex;
    font-weight: bold;
    margin: 0;
  }
  & > span {
    font-size: 10px;
    line-height: 14px;
  }
  &:hover > p,
  &:hover > span {
    color: #2983b9;
  }
`;

export const GeoLocationTriggerStyled = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: bold;
  justify-content: center;
  line-height: 22px;
  margin: 25px 0;

  & > p {
    align-items: center;
    cursor: pointer;
    display: flex;
    font-size: 12px;
    font-weight: normal;
    line-height: 16px;
    margin: 0;
    text-decoration: underline;
    & > svg {
      margin: 0 5px;
    }
  }
`;

export const GeoLocationFormStyled = styled.form`
  align-items: center;
  display: flex;
  justify-content: space-around;
  padding: 0 15px;
  button {
    border: 1px solid #cfd601;
    color: #cfd601;
  }
  input {
    max-width: 125px;
    padding: 10px;
  }
`;

export const GeoLocationListStyled = styled.ul`
  list-style: none;
  margin: 20px 15px;
  padding: 0;
`;

export const GeoLocationStoreStyled = styled.li`
  border-top: 1px solid #cccccc;
  padding: 15px 0;

  & > h4 {
    font-size: 14px;
    font-weight: bold;
    line-height: 19px;
    margin: 0;
  }
  & > p {
    font-size: 12px;
    line-height: 16px;
    margin: 0;
  }
  & > span {
    color: ${(props) => (props.selected ? "#CFD601" : "#cccccc")};
    cursor: ${(props) => (props.selected ? "auto" : "pointer")};
    font-size: 10px;
    line-height: 14px;
    text-decoration: ${(props) => (props.selected ? "none" : "underline")};
  }
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default GeoLocationStyled;
