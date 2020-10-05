import React from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    imageSet: [
      {
        srcSet: `/assets/images/principal/doacao-refeicao-pet-shop-online-mobile.jpg`,
        media: "(max-width: 1280px)",
      },
      {
        srcSet: `/assets/images/principal/doacao-refeicao-pet-shop-online.jpg`,
        media: "(min-width: 1280px)",
      }
    ],
  },
  {
    imageSet: [
      {
        srcSet: `/assets/images/principal/promocao-royal-canin-filhotes-rede-mobile.jpg`,
        media: "(max-width: 1280px)",
      },
      {
        srcSet: `/assets/images/principal/promocao-royal-canin-filhotes-rede-desktop.jpg`,
        media: "(min-width: 1280px)",
      }
    ],
  },
  {
    imageSet: [
      {
        srcSet: `/assets/images/principal/entrega-super-expressa-mobile.jpg`,
        media: "(max-width: 1280px)",
      },
      {
        srcSet: `/assets/images/principal/entrega-super-expressa-desktop.jpg`,
        media: "(min-width: 1280px)",
      }
    ],
  },
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
