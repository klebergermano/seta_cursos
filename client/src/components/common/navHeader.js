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
        <ul className="ul_pagina_unica">
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
                to="bg_resumo_cursos"
                spy={true}
                smooth={true}
                offset={-60}
                duration={600}
              >
                Cursos
              </Link>

              <ul>
                <li>
                  <Link
                    activeClass="active"
                    to="bg_resumo_cursos"
                    spy={true}
                    smooth={true}
                    offset={-60}
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
                    offset={-60}
                    duration={600}
                  >
                    Informática
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="sub_menu"
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
                <li id="link_certificadosx">
                  <a href="/certificados"> Certificados</a>
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
              offset={-70}
              duration={600}
            >
              Contato
            </Link>
          </li>
        </ul>

        {/* -------------------------------------Menu de multiplas páginas */}
        <ul className="ul_pagina_externa">
          <li>
            <a href="/">Início</a>
          </li>
          <li>
            <a id="a_cursos">
              <a href="/#bg_informatica">Cursos</a>

              <ul>
                <li>
                  <Link
                    activeClass="active"
                    to="bg_resumo_cursos"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={600}
                  >
                    Sobre os Cursos
                  </Link>
                </li>
                <li>
                  <a href="/#bg_informatica">Informática</a>
                </li>
            
                <li>
                <a href="/#bg_english">Inglês</a>
           
             
                </li>
                <li >
                  <a href="/#bg_excel"> Excel Avançado</a>
                </li>
                <li >
                  <a href="/certificados"> Certificados</a>
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
              to="bg_contact"
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
