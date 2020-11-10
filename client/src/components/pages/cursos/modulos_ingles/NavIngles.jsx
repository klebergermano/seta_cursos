import React, { Component } from "react";
class NavIngles extends Component {
  state = {};

  displayModulosIngles(e) {
    let a_element = document.getElementsByClassName("a_element");

    for (let i = 0; i < a_element.length; i++) {
      a_element[i].classList.remove("active_ingles");
    }

    let a_name = e.target.name;
    e.target.classList.add("active_ingles");

    let modulo = document.querySelector("#sub_page_" + a_name);
    var modulos = document.getElementsByClassName("sub_pages_ingles");
    for (var i = 0; i < modulos.length; i++) {
      modulos[i].style.display = "none";
    }

    modulo.style.display = "block";
  }

  render() {
    return (
      <nav id="nav_ingles">
        <ul>
          <li id="sobre_ingles" onMouseOver={this.handleDisplayModules}>
            <a
              className="a_element active_ingles"
              name="sobre_ingles"
              onMouseOver={this.displayModulosIngles}
            >
              Sobre o Curso
            </a>
          </li>

          <li id="modulo_ingles" onMouseOver={this.handleDisplayModules}>
            <a
              className="a_element"
              name="modulo_ingles"
              onMouseOver={this.displayModulosIngles}
            >
              Módulos do Curso
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavIngles;
