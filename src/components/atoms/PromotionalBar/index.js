import React from "react";
import PromotionalBarStyled from "./styles";
import Hidden from "@material-ui/core/Hidden";

const PromotionalBar = () => (

    <PromotionalBarStyled>
        <Hidden mdDown>
            <img
                src="https://products-info-public.s3.sa-east-1.amazonaws.com/banner-site/top-bar-desktop.png"
                alt="Geração Pet - Pet Shop Promoções"
                title="Geração Pet - Pet Shop Promoções"
            />
        </Hidden>
        <Hidden mdUp>
            <img
                src="https://products-info-public.s3.sa-east-1.amazonaws.com/banner-site/top-bar-mobile.png"
                alt="Geração Pet - Pet Shop Promoçõespom Primeira Compra"
                title="Geração Pet - Pet Shop Promoções"
            />
        </Hidden>
    </PromotionalBarStyled> 
);

export default PromotionalBar;
