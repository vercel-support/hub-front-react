import React from "react";
import Link from "next/link";
import MenuStyled from "./styles";

const MenuSecond = ({ items }) => (
  <ul>
    {items.map((item, i) => {
      if (i >= 30) return;

      return (
        <li key={item.id}>
          {/*<Link
          href={{
            pathname: "/[...page]",
            query: { name: "test" },
          }}
          as={`/${item.url}`}
        >*/}
          <Link href={`/${item.url}`}>
            <a>{item.name}</a>
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
          {/* {<Link href={`/[...page]`} as={`/${item.url}`}>} */}
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
        {/*<Link href={`/[...page]`} as={`/${item.url}`}>*/}
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
