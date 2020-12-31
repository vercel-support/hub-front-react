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

  p {
    color: #bf1650;
  }

  p::before {
    display: inline;
    content: "⚠ ";
  }
`;

export const EmailStyles = styled.div`
  display: flex;
  padding: 0 !important;

  input[type="text"] {
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

  input[type="submit"] {
    padding: 0px 20px;
    position: relative;
    right: 1%;
    height: 42px;
    color: #fff;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    border-radius: 0px 5px 5px 0px;
    border: 3px solid #CFD601;
    background-color: #CFD601;

    &:focus {
      background: none;
    }
  }

  input[type="text"]:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;
