import React, { Component } from "react";
import { Animated } from "react-animated-css";
import { Link } from "react-scroll"; //Link Scroll page

class ResumoCursos extends Component {
  render() {
    return (
      <div id="bg_resumo_cursos">
        <h1>Conheça nossos Cursos</h1>
        <div className="bloco_resumo" id="resumo_informatica">
          <h2>Informática</h2>
          <p>
            LNunc vel finibus magna. Aliquam euismod eu ante ut eleifend.
            Phasellus quam erat, fringilla sed lectus eget, gravida maximus
            enim. Curabitur euismod in ante et bibendum. Quisque id orci eu
            lorem efficitur dapibus et et eros. Quisque condimentum erat quam,
            id consequat nunc condimentum lacinia.
          </p>
          <Link
            activeClass="active"
            to="bg_informatica"
            spy={true}
            smooth={true}
            offset={-60}
            duration={600}
          >
            Saiba Mais
          </Link>
        </div>
        <div className="bloco_resumo" id="resumo_english">
          <h2>Inglês</h2>
          <p>
            LNunc vel finibus magna. Aliquam euismod eu ante ut eleifend.
            Phasellus quam erat, fringilla sed lectus eget, gravida maximus
            enim. Curabitur euismod in ante et bibendum. Quisque id orci eu
            lorem efficitur dapibus et et eros. Quisque condimentum erat quam,
            id consequat nunc condimentum lacinia.
          </p>
          <Link
            activeClass="active"
            to="bg_english"
            spy={true}
            smooth={true}
            offset={-60}
            duration={600}
          >
            Saiba Mais
          </Link>
        </div>
        <div className="bloco_resumo" id="resumo_excel">
          <h2>Excel</h2>
          <p>
            LNunc vel finibus magna. Aliquam euismod eu ante ut eleifend.
            Phasellus quam erat, fringilla sed lectus eget, gravida maximus
            enim. Curabitur euismod in ante et bibendum. Quisque id orci eu
            lorem efficitur dapibus et et eros. Quisque condimentum erat quam,
            id consequat nunc condimentum lacinia.
          </p>
          <Link
            activeClass="active"
            to="bg_excel"
            spy={true}
            smooth={true}
            offset={-60}
            duration={600}
          >
            Saiba Mais
          </Link>
        </div>
      </div>
    );
  }
}

export default ResumoCursos;
