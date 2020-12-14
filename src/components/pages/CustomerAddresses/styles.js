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
    padding: 35px 15px 15px 15px;
    border: 1px solid #cecece;
    border-radius: 10px;
`;

export const InputContainer = styled.div`
    & > h3 {
        color: #4c4c4c;
        font-size: 14px;
        font-weight: bold;
        line-height: 12px;
        margin-top: 5px;
        margin-bottom: 0;
    }
    & > p {
        color: #4c4c4c;
        font-size: 14px;
        font-weight: normal;
        line-height: 100%;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    input[type="text"] {
        display: block;
        box-sizing: border-box;
        width: 99%;
        padding: 9px 12px;
        margin-top: 5px;
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
    right: 5px;
    top: 10px;
`;

export const EditButton = styled.button`
    cursor: pointer;
    width: 100%;
    height: 35px;
    padding: 2px;
    text-decoration: none;
    border: none;
    background-color: transparent;
    text-align: center;
    border-radius: 5px;
    border: 1px solid #2983B9;
    :hover {
        box-shadow: 0 0 10px rgba(33,33,33,.35);
    }
`;

export const DeleteButton = styled.button`
    cursor: pointer;
    width: 100%;
    height: 35px;
    padding: 2px;
    text-decoration: none;
    border: none;
    background-color: transparent;
    text-align: center;
    border-radius: 5px;
    border: 1px solid red;
    :hover {
        box-shadow: 0 0 10px rgba(33,33,33,.35);
    }
`;

const BigIconStyled = `
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    color: #cfd601;
    height: 50px;
    padding: 5px;
`;

export const EditIconStyled = styled(EditIcon)`
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    color: #2983B9;
    min-width: 10px;
    height: 100%;
`;
export const DeleteIconStyled = styled(DeleteIcon)`
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    color: red;
    min-width: 10px;
    height: 100%;
`;
export const NewIconStyled = styled(AddIcon)`${BigIconStyled}`;

export const SaveButton = styled.div`
    width: 100%;
    padding: 25px 20px 5px 20px;
    & > button {
        cursor: pointer;
        width: 100%;
        height: 40px;
        text-decoration: none;
        border: 1px solid #2983B9;
        border-radius: 5px;
        background-color: transparent;
        color: #2983B9;
        text-align: center;
        &: hover{
            background-color: #eeeeee;
            border: none;
        }
    }
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
    &: hover{
        background-color: #ededed;
    }
`;

export const ErrorMessage = styled.div`
    background: #fc6151;
    text-align: center;
    font-size: 14px;
    color: #fff;
`;