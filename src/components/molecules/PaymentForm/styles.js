import styled from "styled-components";

export const TitleStyles = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  color: #2983b9;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 19px;
`;

export const PaymentFormStyles = styled.div`
  padding: 0 24px;

  form {
    padding-top: 15px;
  }

  .MuiCardContent-root h2 {
    font-style: normal;
    font-weight: bold !important;
    font-size: 14px !important;
    line-height: 19px !important;
    text-transform: capitalize;
    color: #666666;
  }

  .MuiCardContent-root p {
    font-style: normal;
    padding-top: 20px;
    font-size: 14px !important;
    line-height: 19px !important;
    text-transform: capitalize;
    color: #666666;
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

  input[type="text"] {
    display: block;
    box-sizing: border-box;
    width: 99%;
    padding: 7px 9px;
    margin-bottom: 10px;
    font-size: 14px;
    border: 3px solid #dedede;
    border-radius: 5px;
  }

  select#installments {
    display: block;
    box-sizing: border-box;
    width: 98%;
    padding: 7px 9px;
    margin-bottom: 10px;
    font-size: 12px;
    border: 3px solid #dedede;
    border-radius: 5px;
  }

  select#docType {
    display: block;
    box-sizing: border-box;
    width: 97%;
    padding: 7px 9px;
    margin-bottom: 10px;
    font-size: 12px;
    border: 3px solid #dedede;
    border-radius: 5px;
  }

  input[type="text"]:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  input[type="submit"] {
    background-color: #cfd601;
    border: none;
    padding: 13px 15px;
    color: #fff;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    margin-top: 20px;
    border-radius: 5px;
    width: 100%;
    margin-bottom: 20px;
  }

  .button {
    margin-bottom: 20px;
  }

  fieldset {
    border: none;
  }
`;
