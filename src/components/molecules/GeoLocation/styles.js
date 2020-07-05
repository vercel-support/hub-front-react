import styled from "styled-components";

const GeoLocationStyled = styled.div`
  align-items: center;
  color: #000000;
  cursor: pointer;
  display: flex;
  height: 40px;
  position: relative;
  width: fit-content;
  & > svg {
    margin: 0 5px;
  }
  & > div:nth-child(2) {
    width: 285px;
  }
`;

export const GeoLocationCurrentStyled = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  & > p {
    align-items: center;
    display: flex;
    margin: 0;
  }
  & > span {
    font-size: 10px;
    line-height: 14px;
  }
  & > svg {
    color: #ffffff;
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
    text-decoration: underline;
  }
`;

export default GeoLocationStyled;
