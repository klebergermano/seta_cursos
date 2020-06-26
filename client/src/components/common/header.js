import React, { useContext } from "react";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import { MobileContext } from "../../context/MobileContext";

const Header = () => {
  const mobileInfo = useContext(MobileContext);

  if (mobileInfo.isMobile) {
    return <HeaderMobile />;
  } else {
    return <HeaderDesktop />;
  }
};
export default Header;
