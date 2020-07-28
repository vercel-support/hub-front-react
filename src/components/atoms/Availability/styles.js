import styled from "styled-components";

const AvailabilityStyled = styled.div`
  & > p {
    align-items: center;
    color: ${(props) => (props.available ? "#CFD601" : "#fc264c")};
    display: flex;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    justify-content: center;
    line-height: 19px;
    margin: 0;
    padding: 0;
  }
`;

export default AvailabilityStyled;
