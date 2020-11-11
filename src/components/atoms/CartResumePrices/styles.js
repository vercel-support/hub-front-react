import styled from 'styled-components';

export const ResumeLabelStyeld = styled.div`
  display : flex;
  justify-content: flex-start;
  font-size: ${(props) => (props.fontSize)};
  font-weight: ${(props) => (props.fontWeight)};
  color: ${(props) => (props.fontColor)};
`;

export const ResumeValueStyeld = styled.div`
  display : flex;
  justify-content: flex-end;
  font-size: ${(props) => (props.fontSize)};
  font-weight: ${(props) => (props.fontWeight)};
  color: ${(props) => (props.fontColor)};
`;