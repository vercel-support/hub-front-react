import styled from "styled-components";

const CategoryFilterStyled = styled.div`
  margin-right: 15px;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  & > ul {
    & > li {
      border-bottom: 1px solid #cccccc;
      margin: 10px 0;
    }
  }
  .MuiCheckbox-root {
    padding: 5px;
    &.Mui-checked {
      svg {
        color: #2983b9;
      }
    }
  }
`;

export const FilteringByStyled = styled.div``;

export default CategoryFilterStyled;
