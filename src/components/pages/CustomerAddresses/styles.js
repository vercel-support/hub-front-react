import styled from "styled-components";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

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
    position: relative;
    padding: 10px;
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

export const EditButtonsContainer = styled.div`
    position: absolute;
    width: 80px;
    min-height: 40px;
    right: 10px;
    top: 10px;
`;

const IconStyled = `
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    color: #4c4c4c;
    min-width: 10px;
    padding-left: 5px;
`;

const BigIconStyled = `
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    color: #cfd601;
    height: 50px;
    padding: 5px;
`;

export const EditIconStyled = styled(EditIcon)`${IconStyled}`;
export const DeleteIconStyled = styled(DeleteIcon)`${IconStyled}`;
export const NewIconStyled = styled(AddIcon)`${BigIconStyled}`;

export const SaveButton = styled.button`
    cursor: pointer;
    width: 100%;
    height: 40px;
    text-decoration: none;
    border: none;
    background-color: #d4d4d4;
    color: white;
    font-size: 16px;
`;

export const NewAddressButton = styled.button`
    width: 100%;
    background-color: transparent;
    border: 0;
    border-radius: 5px;
    border: 2px dashed #cfd601;
    color: #cfd601;
    cursor: pointer;
    display: flex;
    font-size: 14px;
    line-height: 18px;
    padding: 10px 15px;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
`;