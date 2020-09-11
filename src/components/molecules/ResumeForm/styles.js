import styled from 'styled-components';

export const ResumeFormStyles = styled.div`
    .MuiPaper-root.MuiCard-root.MuiPaper-elevation1.MuiPaper-rounded {
        display: flex;
        align-items: center;
        padding: 6px;
        margin-bottom: 5px;
    }

    .MuiCardMedia-root {
        display: flex;
        align-items: center;
        margin-right: 15px;

        img {
            height: 75px;
        }
    }

    .MuiCardContent-root {
        padding: 0 !important;

        p {
            margin-top: 0;
        }
    }
`;

export const ResumeFormAmountStyles = styled.div `
    display : flex;
    justify-content: flex-end;

    .resume-label{
        margin-right : 1rem;
    }
`;