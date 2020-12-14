import styled from "styled-components";

import AssignmentIcon from '@material-ui/icons/Assignment';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import PersonIcon from '@material-ui/icons/Person';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';

export const MenuWrapper = styled.div`
    width: 300px;
    padding: 15px;
`;

export const MenuTitle = styled.div`
    height: 50px;
    width: 100%;
    min-width: 150px;
    background-color: transparent;
    & > h1 {
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
        color: #2983B9;
        font-size: 22px;
        font-weight: normal;
        line-height: 11px;
        padding-left: 5px;
    }
`;

export const MenuItem = styled.div`
    cursor: pointer;
    width: 100%;
    min-width: 150px;
    background-color: #f6f6f6;
    border-radius: 10px;
    padding: 5px;
    margin-bottom: 10px;
    padding-left: 10px;
    & > p {
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
        color: #4c4c4c;
        font-size: 18px;
        font-weight: normal;
        line-height: 22px;
        padding-left: 15px;
    }
    &:hover {
        background-color: #eeeeee;
    }
`;

const IconStyled = `
    display: inline-block;
    vertical-align: middle;
    color: #4c4c4c;
    padding-left: 5px;
`;


export const AdressesIcon = styled(PersonPinCircleIcon)`${IconStyled}`;
export const CreditsIcon = styled(LocalAtmIcon)`${IconStyled}`;
export const OrdersIcon = styled(AssignmentIcon)`${IconStyled}`;
export const AccountIcon = styled(PersonIcon)`${IconStyled}`;
