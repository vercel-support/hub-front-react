import styled from "styled-components";

export const PageWrapper = styled.div`
    width: 100%;
    padding: 15px;
    & > h1 {
        color: #4c4c4c;
        font-size: 22px;
        font-weight: bold;
        line-height: 80%;
    }
`;

export const FormWrapper = styled.div`
    padding: 15px;
    border: 1px solid #cecece;
`;

export const InputContainer = styled.div`
    & > h3 {
        color: #4c4c4c;
        font-size: 18px;
        font-weight: bold;
        line-height: 100%;
        margin-bottom: 5px;
    }
    & > p {
        color: #4c4c4c;
        font-size: 14px;
        font-weight: normal;
        line-height: 100%;
        margin-top: 5px;
    }
    input[type="text"] {
        display: block;
        box-sizing: border-box;
        width: 99%;
        padding: 9px 12px;
        margin-bottom: 10px;
        font-size: 16px;
        border: 1px solid #dedede;
        border-radius: 5px;
        height: 42px;
    }
`;

export const EditButton = styled.button`
    cursor: pointer;
    width: 100%;
    height: 40px;
    text-decoration: none;
    border: none;
    background-color: #d4d4d4;
    color: white;
    font-size: 16px;
`;