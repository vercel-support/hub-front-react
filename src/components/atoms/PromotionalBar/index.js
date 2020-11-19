import React from "react";
import PromotionalBarStyled from "./styles";
import Hidden from "@material-ui/core/Hidden";

const PromotionalBar = () => (
    <Hidden mdDown>
        <PromotionalBarStyled>
            <img
                src="/assets/images/cupom-primeira-compra.png"
                alt="Cupom Primeira Compra"
                title="Cupom Primeira Compra"
            />
        </PromotionalBarStyled>
    </Hidden>
);

export default PromotionalBar;
