import React from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    imageSet: [
      {
        srcSet: `https://products-info-public.s3.sa-east-1.amazonaws.com/banner-site/1-banner-mobile.jpg`,
        media: "(max-width: 480px)",
        originalAlt: "Geração Pet - Pet Shop Onlin",
        originalTitle: "Geração Pet - Pet Shop Online"
      },
      {
        srcSet: `https://products-info-public.s3.sa-east-1.amazonaws.com/banner-site/1-banner-desktop.jpg`,
        media: "(min-width: 481px)",
        originalAlt: "Geração Pet - Pet Shop Online",
        originalTitle: "Geração Pet - Pet Shop Online"
      }
    ],
  },
  {
    imageSet: [
      {
        srcSet: `https://products-info-public.s3.sa-east-1.amazonaws.com/banner-site/2-banner-mobile.jpg`,
        media: "(max-width: 480px)",
        originalAlt: "Geração Pet - Promoções",
        originalTitle: "Geração Pet - Promoções"
      },
      {
        srcSet: `https://products-info-public.s3.sa-east-1.amazonaws.com/banner-site/2-banner-desktop.jpg`,
        media: "(min-width: 481px)",
        originalAlt: "Geração Pet - Promoções",
        originalTitle: "Geração Pet - Promoções"
      }
    ],
  },
  {
    imageSet: [
      {
        srcSet: `https://products-info-public.s3.sa-east-1.amazonaws.com/banner-site/3-banner-mobile.jpg`,
        media: "(max-width: 480px)",
        originalAlt: "Geração Pet - Entrega Rápida",
        originalTitle: "Geração Pet - Entrega Rápida"
      },
      {
        srcSet: `https://products-info-public.s3.sa-east-1.amazonaws.com/banner-site/3-banner-desktop.jpg`,
        media: "(min-width: 481px)",
        originalAlt: "Geração Pet - Entrega Rápida",
        originalTitle: "Geração Pet - Entrega Rápida"
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
