import styled from 'styled-components';

export const WrapperStyled = styled.div`
    position: relative;
    width: 100%;
    min-width: 150px;
    color: #ffffff;
`;

export const AccountIconStyled = styled.div`
    position: absolute;
    font-size: 10px;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    @media screen and (min-width: 1280px) {
        top: 75%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }
`;

export const AccountTextStyled = styled.div`
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 16px;
    padding-left: 5px;
    @media screen and (min-width: 1280px) {
        font-size: 14px;
        padding-left: 0
    }
`;

export const BalanceTextStyled = styled.div`
    color: #CAD101;
`;