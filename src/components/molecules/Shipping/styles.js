import styled from 'styled-components';

export const ShippingStyles = styled.div`
    padding-bottom: 12px;

    fieldset{
        width: 100%;
        align-items: center;
        justify-content: center;
        text-align: -webkit-center;

        label {
            background: #f6f6f6;
            width: 90%;
            padding: 0;
            margin: 0;
            margin-bottom: 5px;
        }
    }

    .MuiFormGroup-root span:nth-child(2) {
        position: absolute;
        right: 30px;
        margin-top: 15px;
    }

    .MuiFormGroup-root label {
        text-align: left;
        font-size: 12px;
    }
  
`;
