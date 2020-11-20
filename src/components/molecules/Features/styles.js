import styled from "styled-components";


export const FeatureStyled = styled.div`
`;

export const FeatureImageStyled = styled.div`
    & > img {
        width: 100%;
    }
    @media screen and (min-width: 1280px) {
        & > img {
            width: 225px;
        }
    }
`;