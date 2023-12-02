import React from "react";
import { items } from "./items";
import "./menu.scss";

interface deviceProps {
  device: string;
}

const MenuItems = (props: deviceProps) => {
  const { device } = props;
  return (
    <nav className={`${device && `menu-items__${device}`} menu-items`}>
      <ul className="menu-items__container">
        {items &&
          items.map((e) => {
            return <li className="menu-items__item">{e.name}</li>;
          })}
      </ul>
    </nav>
  );
};

export { MenuItems };
