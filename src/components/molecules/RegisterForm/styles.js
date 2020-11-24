import styled from "styled-components";

export const TitleStyles = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  color: #2983b9;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 19px;
`;

export const AddressFormStyles = styled.div`
  padding: 20px;

  & > div {
    margin: 0;
    padding: 0;
    width: 100%;
  }

  .divider {
    justify-content: center;
    align-items: center;
    display: flex;
  }

  label {
    line-height: 1.5;
    font-weight: bold;
    text-align: left;
    display: block;
    margin-bottom: 0;
    margin-top: 1em;
    color: #666666;
    font-size: 12px;
  }

  input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 10px;
    margin-bottom: 10px;
    font-size: 16px;
    border: 1px solid #dedede;
    border-radius: 5px;
    height: 42px;

    &:focus {
      background: #dedede4f;
    }
  }

  .MuiButton-outlinedPrimary {
    color: #CFD601;
    border: 1px solid #CFD601;
    padding: 7px;
    margin-top: 30px;
    text-transform: initial;

    :hover {
        border: 1px solid #CFD601;
    }
}

  input[type="submit"] {
    background-color: #CFD601;
    border: none;
    padding: 13px 15px;
    color: #fff;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
  }
`;
