import React from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    imageSet: [
      {
        srcSet: `/assets/images/banner-mobile.png`,
        media: "(max-width: 1280px)",
      },
      {
        srcSet: `/assets/images/banner-desk.png`,
        media: "(min-width: 1280px)",
      },
    ],
  },
];

// const BannerSlider = ({ images }) => (
const BannerSlider = () => (
  <ImageGallery
    items={images}
    showFullscreenButton={false}
    showPlayButton={false}
    showThumbnails={false}
    autoPlay={true}
    showBullets={true}
    infinite={true}
  />
);

export default BannerSlider;
