import React, { useEffect, useState } from "react";
import Link from "next/link";
import { requestGet } from "../../../services";
import MenuStyled from "./styles";

const MenuSecond = ({ items }) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <Link href={`/[...page]`} as={`/${item.url}`}>
          <a>{item.name}</a>
        </Link>
        {item?.children?.length ? (
          <MenuThird items={item.children} />
        ) : (
          <MenuBanner />
        )}
      </li>
    ))}
  </ul>
);

const MenuThird = ({ items }) => (
  <React.Fragment>
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Link href={`/[...page]`} as={`/${item.url}`}>
            <a>{item.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    <MenuBanner />
  </React.Fragment>
);

const MenuBanner = () => (
  <ul>
    {/*<li>
      <img
        src="/assets/images/dog-banner.png"
        alt="Dog Banner"
        title="Dog Banner"
      />
    </li>*/}
  </ul>
);

const Menu = ({ items = [] }) => {
  const [menuItems, setMenuItems] = useState(items);
  // Retirar useEffect, fazer query na page
  const getMenu = async () => {
    const { data } = await requestGet(
      "http://localhost:3000/api/catalogs/categories"
    );
    setMenuItems(data);
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <MenuStyled>
      {menuItems.map((item) => (
        <li key={item.id}>
          <Link href={`/[...page]`} as={`/${item.url}`}>
            <a>{item.name}</a>
          </Link>
          {item?.children?.length ? (
            <MenuSecond items={item.children} />
          ) : (
            <MenuBanner />
          )}
        </li>
      ))}
    </MenuStyled>
  );
};

export default Menu;
