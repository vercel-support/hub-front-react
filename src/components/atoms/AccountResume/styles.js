import styled from 'styled-components';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import PersonIcon from '@material-ui/icons/Person';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import PetsRoundedIcon from '@material-ui/icons/PetsRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';

const IconStyled = `
    display: inline-block;
    vertical-align: middle;
    color: #2983b9;
    padding-left: 5px;
`;

export const AdressesIcon = styled(PersonPinCircleIcon)`${IconStyled}`;
export const CreditsIcon = styled(LocalAtmIcon)`${IconStyled}`;
export const OrdersIcon = styled(AssignmentIcon)`${IconStyled}`;
export const AccountIcon = styled(PersonIcon)`${IconStyled}`;
export const PetsIcon = styled(PetsRoundedIcon)`${IconStyled}`;
export const LogoutIcon = styled(ExitToAppRoundedIcon)`${IconStyled}`;

export const DropDownMenuMobileContainerStyled = styled.div`
    width: 100%;
`;

export const DropDownMenuDesktopContainerStyled = styled.div`
    z-index: 5;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(30px);
    transform: translateY(30px);
    width: 200px;
`;

export const DropDownMenuItem = styled.div`
    cursor: pointer;
    width: 100%;
    background-color: #f6f6f6;
    & > p {
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
        color: #2983b9;
        font-size: 14px;
        font-weight: normal;
        line-height: 22px;
        padding-left: 15px;
    }
    &:hover {
        background-color: #eeeeee;
    }
`;

export const WrapperStyled = styled.div`
    cursor: pointer;
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
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }
`;

export const AccountTextStyled = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 16px;
    padding-left: 5px;
    @media screen and (min-width: 1280px) {
        font-size: 14px;
        padding-left: 0
    }
    & > div {
        display: flex;
        flex-direction: column;
        width: 100%;
        & > p {
            line-height: 0;
        }
    }
    & > svg {
        margin-top: 2px;
    }
`;

export const BalanceTextStyled = styled.div`
    color: #CAD101;
    font-size: 12px;
`;