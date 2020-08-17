import styled from 'styled-components';

export const ReviewStyles = styled.div`

    div{
        padding: 0 12px;
    }
    
    .icon{
        display: flex;    
        padding: 40px 0 0 0 !important;
    }

    h6{
        padding: 0 0 .0 .3em;
    }
    
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

    label {
        line-height: 1.5;
        font-weight: bold;
        text-align: left;
        display: block;
        margin-bottom: 0;        
    }

    input[type=text] {
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

    .submit{
        display: flex;    
        justify-content: center;
    }

    p{
        color: #adaaaa;
    }

    .cards{
        display: flex;
        width: 100%;    
        justify-content: space-between;
    }
`;


export const ReviewCepStyles = styled.div`

    padding: 0 !important;

    input[type=text]{
        width : 40%;
    }

    input[type=button]{
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

    div{
        display : flex;
        padding: 0;
    }
`;