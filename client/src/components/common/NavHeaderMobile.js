import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Animated } from "react-animated-css";

import Icons from "../../assets/icons";
class NavHeaderMobile extends Component {
  constructor() {
    super();
    this.state = {};
  }
  handleMenuClick() {
    let submenu = document.querySelector("#submenu_mobile");
    submenu.classList.toggle("submenu_closed");
  }

  render() {
    return (
      <nav id="nav_header_mobile">
        <ul>
          <li>
            <a id="btn_menu" onClick={this.handleMenuClick}>
              <Icons id="icon_menu" className="icon" name="menu" />
            </a>

            <ul id="submenu_mobile" className="submenu_closed">
              <li>
                <Link
                  activeClass="active"
                  to="bg_informatica"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={600}
                >
                  Informática
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  className="sub_menu "
                  to="bg_english"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                >
                  Inglês
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  className="sub_menu"
                  to="bg_excel"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                >
                  Excel Avançado
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-130}
                  duration={600}
                >
                  Contato
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavHeaderMobile;
