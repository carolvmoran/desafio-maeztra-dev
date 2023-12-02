import React from "react";
import { Account } from "../Account/Account";
import Logo from "../../../assets/logo-maeztra-novo.png";
import { Search } from "../Search/Search";

import "./MainHeader.scss";
interface deviceProps {
  device: string;
}
const MainHeader = (props: deviceProps) => {
  const { device } = props;
  return (
    <div className="main-header">
      <div className="main-header__container">
        <a href="/" title="Home" className="main-header__logo">
          <img src={Logo} alt="logo-maeztra" />
        </a>
        <Search />
        <Account device={device} />
      </div>
    </div>
  );
};

export { MainHeader };
