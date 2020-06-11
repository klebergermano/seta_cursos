import React, { Component } from "react";
import { Animated } from "react-animated-css";
import { Link } from "react-scroll"; //Link Scroll page

class ResumoCursos extends Component {
  render() {
    return (
      <div id="bg_resumo_cursos">
        <h1>Conheça Nossos Cursos</h1>
        <div id="resumo_informatica">
          <h2>Cusos de Informática</h2>
          <p>
            LNunc vel finibus magna. Aliquam euismod eu ante ut eleifend.
            Phasellus quam erat, fringilla sed lectus eget, gravida maximus
            enim. Curabitur euismod in ante et bibendum. Quisque id orci eu
            lorem efficitur dapibus et et eros. Quisque condimentum erat quam,
            id consequat nunc condimentum lacinia.
          </p>
          <Link
            activeClass="active"
            to="computing_course"
            spy={true}
            smooth={true}
            offset={0}
            duration={600}
          >
            Saiba Mais
          </Link>
        </div>
        <div id="resumo_english">
          <h2>Cusos de Inglês</h2>
          <p>
            LNunc vel finibus magna. Aliquam euismod eu ante ut eleifend.
            Phasellus quam erat, fringilla sed lectus eget, gravida maximus
            enim. Curabitur euismod in ante et bibendum. Quisque id orci eu
            lorem efficitur dapibus et et eros. Quisque condimentum erat quam,
            id consequat nunc condimentum lacinia.
          </p>
          <Link
            activeClass="active"
            to="computing_course"
            spy={true}
            smooth={true}
            offset={0}
            duration={600}
          >
            Saiba Mais
          </Link>
        </div>
        <div id="resumo_excel">
          <h2>Cusos de Excel</h2>
          <p>
            LNunc vel finibus magna. Aliquam euismod eu ante ut eleifend.
            Phasellus quam erat, fringilla sed lectus eget, gravida maximus
            enim. Curabitur euismod in ante et bibendum. Quisque id orci eu
            lorem efficitur dapibus et et eros. Quisque condimentum erat quam,
            id consequat nunc condimentum lacinia.
          </p>
          <Link
            activeClass="active"
            to="computing_course"
            spy={true}
            smooth={true}
            offset={0}
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
