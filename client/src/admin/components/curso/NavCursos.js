import React, { Component } from "react";
import { Link } from "react-router-dom";
import Icon from "../common/icons";
import config from "../../../config";
class NavCursos extends Component {
  state = {};
  render() {
    return (
      <nav class="nav_cadastros" id="nav_contrawtos">
        <ul>
          <li>
            <Link to={config.BASE_URL_ADMIN + "/cursos"}>
              <Icon name="eye" className="icon icon_eye" />
              Ver Cursos
            </Link>
          </li>
          <li>
            <Link to={config.BASE_URL_ADMIN + "/cadastrar_curso"}>
              <Icon name="books" className="icon icon_books" />
              Cadastrar Curso
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavCursos;
