import React, { useState } from "react";
import CategoryDescriptionStyled from "./styles";

const CategoryDescription = ({ description, maxCarac = 300 }) => {
  const [open, setOpen] = useState(false);
  const isBigger = description.length > maxCarac;

  return (
    <CategoryDescriptionStyled>
      {description.substr(0, open ? description.length : maxCarac)}
      {isBigger && (
        <span onClick={() => setOpen(!open)}>
          {open ? "Leia Menos" : "Leia Mais"}
        </span>
      )}
    </CategoryDescriptionStyled>
  );
};

export default CategoryDescription;
