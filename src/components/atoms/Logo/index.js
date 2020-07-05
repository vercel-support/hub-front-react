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
          alt="Logo Geração Pet"
          title="Logo Geração Pet"
        />
      </LogoStyled>
    </Link>
  );
};

export default Logo;
