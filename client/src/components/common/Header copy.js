import React, { Component, useContext } from "react";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import { MobileContext } from "../../context/MobileContext";

class Header extends Component {
  context = useContext(MobileContext);
  state = {
    isMobile: "",
  };
  updateDimesion() {
    let windowSize = window.innerWidth;
    if (windowSize <= 560) {
      this.setState({ isMobile: true });
    } else {
      this.setState({ isMobile: false });
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimesion.bind(this));
  }
  render() {
    if (!this.state.isMobile) {
      return <HeaderDesktop />;
    } else {
      return <HeaderMobile />;
    }
  }
}

export default Header;
