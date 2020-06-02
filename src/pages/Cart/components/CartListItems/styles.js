import styled from 'styled-components';

export const ProdutoIndiponivel = styled.div`
  padding: 1px;
  font-size: 12px;
  color: red;
  text-align: left;
`;
export const Price = styled.div`
  padding: 1px;
  font-size: 10px;
  text-decoration: line-through;
`;
export const SpecialPrice = styled.div`
  padding: 1px;
  font-size: 18px;
  font-weight: bold;
  color: #2983B9;
`;
export const Quantity = styled.div`
  padding: 5px;
  align-self: flex-end;
  width: 25px;
  height: 20px;
`;
export const Select = styled.select`
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;
`;
export const Option = styled.option`
    color: black;
    background: white;
    display: flex;
    white-space: pre;
`;