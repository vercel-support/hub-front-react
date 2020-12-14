import styled from "styled-components";

const CategoryDescriptionStyled = styled.p`
  color: #666666;
  font-style: normal;
  font-weight: normal;
  font-size: 0.8rem;
  line-height: 1.25;
  text-align: justify;
  margin: 0 0 45px 0;
  padding: 0;
  & > span {
    color: #2983b9;
    cursor: pointer;
    margin-left: 10px;
    text-decoration: underline;
  }
  h2, h3 {
    font-size: 16px;
    letter-spacing: 0;
  }
`;

export default CategoryDescriptionStyled;
