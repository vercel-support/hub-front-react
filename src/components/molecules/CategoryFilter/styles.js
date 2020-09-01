import styled from "styled-components";

const CategoryFilterStyled = styled.div`
  margin-right: 15px;
  input {
    background: #fff;
    border: 2px solid #ccc;
    border-radius: 16px;
    width: 15px;
    height: 15px;
  }
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
        /* color: #2983b9; */
      }
    }
  }
`;

export const FilteringByStyled = styled.div`
  margin-bottom: 30px;
  ul {
    margin-bottom: 10px;
  }
`;

export const DrawerContentStyled = styled.div`
  & > div {
    align-items: center;
    background: #2983b9;
    display: flex;
    height: 55px;
    justify-content: space-between;
    * {
      color: #ffffff;
    }
  }
  ul {
    list-style: none;
    margin: 0 20px;
    padding: 0;
  }
`;

export default CategoryFilterStyled;
