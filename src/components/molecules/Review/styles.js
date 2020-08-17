import styled from "styled-components";

export const TitleStyles = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 30px;

  svg {
    margin-right: 10px;
  }
`;

export const ReviewStyles = styled.div`
  padding: 0 24px;

  .endCard {
    display: flex;
    align-items: center;

    & > div {
      margin: 5px;
      padding: 5px 0px;
    }
  }

  form {
    padding-top: 15px;

    div {
      padding: 0 8px;
    }
  }

  .d-flex {
    display: flex;
    align-items: center;

    svg {
      margin-bottom: 0.35em;
    }

    h6 {
      padding: 0 0 0 0.3em;
    }
  }

  label {
    line-height: 1.5;
    font-weight: bold;
    text-align: left;
    display: block;
    margin-bottom: 0;
  }

  input[type="text"] {
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: 7px 9px;
    margin-bottom: 10px;
    font-size: 14px;
    border: 3px solid #dedede;
    border-radius: 5px;
  }

  input[type="text"]:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  input[type="submit"] {
    background-color: #dedede;
    border: 1px solid white;
    padding: 13px 15px;
  }

  .submit {
    display: flex;
    justify-content: center;
  }

  p {
    color: #adaaaa;
  }

  .cards {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;

export const ReviewCepStyles = styled.div`
  display: flex;
  padding: 0 !important;

  input[type="text"] {
    width: 40%;
  }

  input[type="button"] {
    padding: 0px 20px;
    position: relative;
    right: 1%;
    height: 36px;
    border-radius: 0px 5px 5px 0px;
    border: 3px solid #dedede;
  }

  input[type="text"]:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;
