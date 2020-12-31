import styled from "styled-components";

const GalleryStyled = styled.div`
  margin: 0 auto;
  max-width: 500px;
  width: 100%;
  @media screen and (min-width: 992px) {
    margin: 0 30px 50px 30px;
  }
  
  @media screen and (max-width: 482px) {
    .image-gallery-thumbnails-wrapper {
      max-width: 360px !important;
    }
}
  
`;

export default GalleryStyled;
