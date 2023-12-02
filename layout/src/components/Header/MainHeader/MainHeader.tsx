import React from "react";
import { Account } from "../Account/Account";
import Logo from "../../../assets/logo-maeztra-novo.png";
import { Search } from "../Search/Search";
interface deviceProps {
  device: string;
}
const MainHeader = (props: deviceProps) => {
  const { device } = props;
  return (
    <>
      <a href="/" title="Home">
        <img src={Logo} alt="logo-maeztra" />
      </a>
      <Search />
      <Account device={device} />
    </>
  );
};

export { MainHeader };
