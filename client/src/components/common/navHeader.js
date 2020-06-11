import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

class NavHeader extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <nav id="nav_header">
        <ul>
          <li>
            <Link
              activeClass="active"
              to="link_top"
              spy={true}
              smooth={true}
              offset={0}
              duration={600}
            >
              Início
            </Link>
          </li>
          <li>
            <a id="a_cursos">
              <Link
                activeClass="active"
                to="bg_courses"
                spy={true}
                smooth={true}
                offset={-70}
                duration={600}
              >
                Cursos
              </Link>

              <ul>
                <li>
                  <Link
                    activeClass="active"
                    to="see_more"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={600}
                  >
                    Sobre os Cursos
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="bg_informatica"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={600}
                  >
                    Informática
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="sub_menu"
                    to="english_course"
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
                    to="excel_course"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={600}
                  >
                    Excel Avançado
                  </Link>
                </li>
              </ul>
            </a>
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
      </nav>
    );
  }
}

export default NavHeader;
