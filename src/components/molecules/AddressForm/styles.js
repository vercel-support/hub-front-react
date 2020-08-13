import styled from 'styled-components';

export const AddressFormStyles = styled.div`
    .d-flex{
        display: flex;
        align-items: center;

        svg {
            margin-bottom: 0.35em;            
        }

        h6{
            padding : 0 0 .0 .3em;
        }
    }

    .divider{
        justify-content: center;
        align-items: center;
        display: flex;
    }

    .text-center{
        text-align: center;
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
        padding: 7px 9px;        
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

    .account{
        padding-top : 15px;

        input[type=submit]{
            background-color : #fff;
            border: 2px solid #dedede;
        }
    }
    
`;
