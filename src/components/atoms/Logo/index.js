import React from "react";
import Link from "next/link";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import LogoStyled from "./styles";

const Logo = () => {
  const matches = useMediaQuery("(min-width:960px)");

  return (
    <Link passHref href="/">
      <LogoStyled>
        <img
          src={
            matches
              ? "/assets/images/logo.png"
              : "/assets/images/logo-mobile.png"
          }
          alt="Geração Pet - Pet Shop Online"
          title=" Geração Pet - Pet Shop Online"
        />
      </LogoStyled>
    </Link>
  );
};

export default Logo;
