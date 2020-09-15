import React from "react";
import Link from "next/link";
import MenuStyled from "./styles";

const MenuSecond = ({ items }) => (
  <ul>
    {items.map((item, i) => {
      if (i >= 10) return;

      return (
        <li key={item.id}>
          <Link href={`/${item.url}`}>
            <a>
              <div>{item.name}</div>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.29492 16.59L12.8749 12L8.29492 7.41L9.70492 6L15.7049 12L9.70492 18L8.29492 16.59Z"></path>
              </svg>
            </a>
          </Link>
          {
            item?.children?.length ? (
              <MenuThird items={item.children} />
            ) : null /*(
          <MenuBanner />
        )*/
          }
        </li>
      );
    })}
  </ul>
);

const MenuThird = ({ items }) => (
  <React.Fragment>
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Link href={`/${item.url}`}>
            <a>{item.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    {/*<MenuBanner />*/}
  </React.Fragment>
);

const MenuBanner = () => (
  <ul>
    <li>
      <img
        src="/assets/images/dog-banner.png"
        alt="Dog Banner"
        title="Dog Banner"
      />
    </li>
  </ul>
);

const Menu = ({ categories = [] }) => (
  <MenuStyled>
    {categories.map((item) => (
      <li key={item.id}>
        <Link href={`/${item.url}`}>
          <a>{item.name}</a>
        </Link>
        {
          item?.children?.length ? (
            <MenuSecond items={item.children} />
          ) : null /*(
          <MenuBanner />
        )*/
        }
      </li>
    ))}
  </MenuStyled>
);

export default Menu;
