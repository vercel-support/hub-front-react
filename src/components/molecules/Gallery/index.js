import React from "react";
import ImageGallery from "react-image-gallery";
import GalleryStyled from "./styles";

const defaultConfig = {
  autoPlay: false,
  disableKeyDown: true,
  infinite: false,
  showFullscreenButton: false,
  showNav: false,
  showPlayButton: false,
};

const Gallery = ({ images = [], config = defaultConfig }) => {
  const gallery = images.map((image) => ({
    original: `https://e220k6tgf8.execute-api.sa-east-1.amazonaws.com/v1/resize-image?img=${image.file}&size=1000`,
    thumbnail: `https://e220k6tgf8.execute-api.sa-east-1.amazonaws.com/v1/resize-image?img=${image.file}&size=250`,
    originalAlt : `${image.label}`,
    originalTitle : `${image.label}`,
    thumbnailTitle : `${image.label}`,
    thumbnailAlt : `${image.label}`,
  }));

  return (
    <GalleryStyled>
      <ImageGallery items={gallery} {...config} />
    </GalleryStyled>
  );
};

export default Gallery;
