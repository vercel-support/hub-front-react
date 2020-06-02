import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1em;
  background: #ffffff;
  float: right;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;
export const CEP = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Label = styled.div`
  flex: wrap;
  align-content: center;
  justify-content: center;
`;
export const Text = styled.div`
  color: #666666;
  font-size: 14px;
`;
export const Link = styled.a`
  color: #b5b1b1;
  font-size: 10px;
  
`;
export const Value = styled.h3`
  color: #666666;
`;
export const ShippingOptions = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Option = styled.div`
  background-color: #f6f6f6;
  display: flex;
  display: flex-row;
  color: #666666;
  margin-top: 10px;
  border-radius: 3px;
  padding: 0.5em;
  box-shadow: 2px 2px 1px;
`;
export const OptionLabel = styled.div`
  display: flex;
  display: flex-row;
  justify-content: space-between;
`;
export const OptionText = styled(Text)`
  font-size: 14px;
  display: flex;
  justify-content: flex-start;
`;
export const Price = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: flex-end;
  vertical-align: middle;
`;
