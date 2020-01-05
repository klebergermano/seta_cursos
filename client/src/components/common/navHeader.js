import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

class NavHeader extends Component {
  state = {};
  render() {
    return (
      <nav id="nav_header">
        <ul>
          <li>
            <Link
              activeClass="active"
              to="slide_home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="courses"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
            >
              Cursos
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
              offset={-70}
              duration={600}
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavHeader;
