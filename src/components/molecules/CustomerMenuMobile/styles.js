import styled from "styled-components";

import AssignmentIcon from '@material-ui/icons/Assignment';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import PersonIcon from '@material-ui/icons/Person';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

export const MenuWrapper = styled.div`
    width: 100%;
    padding: 15px;
`;

export const MenuTitle = styled.div`
    height: 50px;
    width: 100%;
    background-color: transparent;
    & > h1 {
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
        color: #4c4c4c;
        font-size: 22px;
        font-weight: normal;
        line-height: 11px;
        padding-left: 5px;
    }
`;

export const MenuItem = styled.div`
    position: relative;
    cursor: pointer;
    height: 50px;
    width: 100%;
    background-color: transparent;
    border-bottom: 1px solid #d3d3d3;
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
export const FwdArrowIcon = styled(ArrowForwardIosRoundedIcon)`
    position: absolute;
    top: 35%;
    right: 5px;
    color: #4c4c4c;
`;