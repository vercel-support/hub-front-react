import React from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    imageSet: [
      {
        srcSet: `/assets/images/retirada-na-loja-natal-mobile.jpg`,
        media: "(max-width: 480px)",
      },
      {
        srcSet: `/assets/images/retirada-na-loja-natal-desktop.jpg`,
        media: "(min-width: 481px)",
      }
    ],
  },
  {
    imageSet: [
      {
        srcSet: `/assets/images/entrega-expressa-natal-mobile.jpg`,
        media: "(max-width: 480px)",
      },
      {
        srcSet: `/assets/images/entrega-expressa-natal-mobile.jpg`,
        media: "(min-width: 481px)",
      }
    ],
  }
];

// const BannerSlider = ({ images }) => (
const BannerSlider = () => (
  <div>
    <ImageGallery
      items={images}
      showFullscreenButton={false}
      showPlayButton={false}
      showThumbnails={false}
      autoPlay={true}
      showBullets={true}
      infinite={true}
    />
  </div>
);

export default BannerSlider;
