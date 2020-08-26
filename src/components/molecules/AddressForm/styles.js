import styled from 'styled-components';

export const TitleStyles = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;

    svg {
        margin-right: 10px;
    }
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
    }

    input {
        display: block;
        box-sizing: border-box;
        width: 100%;
        padding: 10px 10px;        
        margin-bottom: 10px;
        font-size: 14px;
        border: 3px solid #dedede;
        border-radius: 5px;

        &:focus{
            background: #dedede4f;            
        }
    }
    
    input[type="submit"] {
        background-color: #dedede;
        border: 1px solid white;
        padding: 13px 15px;
    }
    
`;
