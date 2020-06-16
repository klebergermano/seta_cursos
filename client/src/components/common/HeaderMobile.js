import React, { Component } from "react";
import NavHeaderMobile from "./NavHeaderMobile";

class HeaderMobile extends Component {
  state = {};
  render() {
    return (
      <header id="header_website_mobile">
        <a href="./" id="logo">
          <img src={require("../../assets/img/logo.png")} />
        </a>
        <NavHeaderMobile />
      </header>
    );
  }
}

export default HeaderMobile;
