import styled from "styled-components";

const CardPriceStyled = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  & > span {
    color: ${(props) => (props.specialPrice ? "#cccccc" : "#666666")};
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 19px;
  }
  & > p {
    color: #2983b9;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    margin: 0;
    padding: 0;
  }
`;

export default CardPriceStyled;
