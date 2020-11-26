import React from "react";
import PromotionalBarStyled from "./styles";
import Hidden from "@material-ui/core/Hidden";

const PromotionalBar = () => (

    <PromotionalBarStyled>
        <Hidden mdDown>
            <img
                src="/assets/images/cupom-pet-friday-desktop-topbar.png"
                alt="Cupom Primeira Compra"
                title="Cupom Primeira Compra"
            />
        </Hidden>
        <Hidden mdUp>
            <img
                src="/assets/images/cupom-pet-friday-mobile-topbar.png"
                alt="Cupom Primeira Compra"
                title="Cupom Primeira Compra"
            />
        </Hidden>
    </PromotionalBarStyled> 
);

export default PromotionalBar;
