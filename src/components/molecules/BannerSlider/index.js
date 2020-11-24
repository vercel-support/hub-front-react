import React from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    imageSet: [
      {
        srcSet: `/assets/images/principal/dinheiro-de-volta-pet-friday-mobile.jpg`,
        media: "(max-width: 480px)",
      },
      {
        srcSet: `/assets/images/principal/dinheiro-de-volta-pet-friday-desktop.jpg`,
        media: "(min-width: 481px)",
      }
    ],
  },
  {
    imageSet: [
      {
        srcSet: `/assets/images/principal/entrega-super-expressa-black-friday-mobile.jpg`,
        media: "(max-width: 480px)",
      },
      {
        srcSet: `/assets/images/principal/entrega-super-expressa-black-friday-desktop.jpg`,
        media: "(min-width: 481px)",
      }
    ],
  },
  {
    imageSet: [
      {
        srcSet: `/assets/images/principal/doacao-refeicao-pet-shop-online-mobile.jpg`,
        media: "(max-width: 480px)",
      },
      {
        srcSet: `/assets/images/principal/doacao-refeicao-pet-shop-online.jpg`,
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
