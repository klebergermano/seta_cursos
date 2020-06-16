import React, { Component } from "react";
class NavInformatica extends Component {
  state = {};

  displayModulos(e) {
    let a_element = document.getElementsByClassName("a_element");

    for (let i = 0; i < a_element.length; i++) {
      a_element[i].classList.remove("active");
    }

    let a_name = e.target.name;
    e.target.classList.add("active");

    let modulo = document.querySelector("#modulo-" + a_name);
    var modulos = document.getElementsByClassName("modulos_informatica");
    for (var i = 0; i < modulos.length; i++) {
      modulos[i].style.display = "none";
    }

    modulo.style.display = "block";
  }

  render() {
    return (
      <nav id="nav_informatica">
        <ul>
          <li id="windows" onMouseOver={this.handleDisplayModules}>
            <a
              className="a_element active"
              name="windows"
              onMouseOver={this.displayModulos}
            >
              Windows 10
            </a>
          </li>

          <li id="office" onMouseOver={this.handleDisplayModules}>
            <a
              className="a_element"
              name="office"
              onMouseOver={this.displayModulos}
            >
              Pacote Office
            </a>
          </li>
          <li id="hadware" onMouseOver={this.handleDisplayModules}>
            <a
              className="a_element"
              name="hadware"
              onMouseOver={this.displayModulos}
            >
              {" "}
              Hadware
            </a>
          </li>
          <li id="redes" onMouseOver={this.handleDisplayModules}>
            <a
              className="a_element"
              name="rede"
              onMouseOver={this.displayModulos}
            >
              {" "}
              Rede
            </a>
          </li>

          <li id="internet" onMouseOver={this.handleDisplayModules}>
            <a
              className="a_element"
              name="internet"
              onMouseOver={this.displayModulos}
            >
              {" "}
              Internet
            </a>
          </li>
          <li id="impressao" onMouseOver={this.handleDisplayModules}>
            <a
              className="a_element"
              name="impressao"
              onMouseOver={this.displayModulos}
            >
              {" "}
              Inpressão de Arquivos
            </a>
          </li>
          <li
            id="intro_info"
            className=""
            onMouseOver={this.handleDisplayModules}
          >
            <a
              className="a_element"
              name="introducao"
              onMouseOver={this.displayModulos}
            >
              Instrodução
            </a>
          </li>

          <li id="hadware" onMouseOver={this.handleDisplayModules}>
            <a
              className="a_element"
              name="dispositivos"
              onMouseOver={this.displayModulos}
            >
              {" "}
              Digitação e Dispositivos
            </a>
          </li>

          <li id="Celulares" onMouseOver={this.handleDisplayModules}>
            <a
              className="a_element"
              name="celulares"
              onMouseOver={this.displayModulos}
            >
              {" "}
              Celulares
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavInformatica;
