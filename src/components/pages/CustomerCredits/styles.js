import styled from "styled-components";

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

export const CreditsResumeContainer = styled.div`
    padding: 15px;
    margin-bottom: 25px;
    & > h3 {
        color: ${(props) => (props.approved ? "#CAD101" : "#9b9b9b")};
        font-size: 18px;
        font-weight: bold;
        line-height: 12px;
        margin-bottom: 5px;
    }
    & > p {
        color: #4c4c4c;
        font-size: 14px;
        font-weight: normal;
        line-height: 100%;
        margin-top: 5px;

        & > svg {
            padding-top: 5px;
            font-size: 16px;
        }
    }
`;

export const CreditsResumeContainerMobile = styled.div`
    padding: 15px;
    & > h3 {
        color: ${(props) => (props.approved ? "#CAD101" : "#9b9b9b")};
        font-size: 18px;
        font-weight: bold;
        line-height: 12px;
        margin-bottom: 5px;
    }
    & > p {
        color: #4c4c4c;
        font-size: 14px;
        font-weight: normal;
        line-height: 100%;
        margin-top: 5px;

        & > svg {
            padding-top: 5px;
            font-size: 16px;
        }
    }
`;

export const HeaderContainer = styled.div`
    padding: 5px 10px 5px 10px;
`;

export const TableRow = styled.div`
    width: 100%;
    padding: 5px 15px 5px 15px;
    border-bottom: 1px solid #d7d7d7;
`;

export const TableCell = styled.div`
    width: 100%;
    & > h3 {
        padding: 5px;
        color: #4c4c4c;
        font-size: 18px;
        font-weight: bold;
        line-height: 0;
    }
    & > p {
        padding: 5px;
        color: #4c4c4c;
        font-size: 14px;
        font-weight: normal;
    }
`;

export const TableCellMobile = styled.div`
    width: 100%;
    & > h3 {
        padding: 5px;
        color: #6d6d6d;
        font-size: 18px;
        font-weight: bold;
        line-height: 0;
    }
    & > p {
        padding: 5px;
        color: #4c4c4c;
        font-size: 14px;
        font-weight: normal;
    }
`;