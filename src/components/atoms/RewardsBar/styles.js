import styled from "styled-components";

const Icon = styled.svg.attrs({ 
  version: '1.1', 
  xmlns: 'http://www.w3.org/2000/svg', 
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})``;

export const Svg = styled(Icon)`
  position: relative;
  padding-left: 1rem;
  enable-background:new 0 0 512 512;
  padding-top: .5rem;
  height: 75%;
  fill: #ffffff;
  &:hover {
    fill: #2983B9;
  }
`;

export const InfoStyled = styled.div`
  z-index: 3;
  position: absolute;
  right: 0;
  height: 100%;
  width: 3rem;
  cursor: pointer;
`;

export const RewardsBarStyled = styled.div`
  align-items: center;
  background-color: #aeaeae;
  height: 2rem;
  width: 100%;
  position: relative;
  & > span {
    padding-top: .25rem;
    position: absolute;
    width: 100%;
    z-index: 2;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    color: #ffffff;
  }
`;

export const ProgressBarStyled = styled.div`
  z-index: 1;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: #37b98a;
  height: 100%;
  width: ${(props) => (props.width)}%;
  transition: width 2s;
`;