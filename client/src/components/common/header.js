import React, { Component } from "react";
import NavHeader from "./navHeader";
class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <div id="header_center">
          <a href="./" id="logo">
            <img src={require("../../assets/img/logo.png")} />
          </a>
          <NavHeader />
        </div>
      </header>
    );
  }
}

export default Header;
