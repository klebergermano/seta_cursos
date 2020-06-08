import React, { Component } from "react";
import { Link } from "react-router-dom";
import Icon from "../common/icons";
import config from "../../../config";
class NavCursos extends Component {
  state = {};
  render() {
    return (
      <nav className="nav_cadastros" id="nav_contrawtos">
        <ul>
          <li>
            <Link to={config.BASE_URL_ADMIN + "/users_view"}>
              <Icon name="eye" className="icon icon_eye" />
              Ver Usuários
            </Link>
          </li>
          <li>
            <Link to={config.BASE_URL_ADMIN + "/cadastrar_usuario"}>
              <Icon name="books" className="icon icon_books" />
              Cadastrar Usuário
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavCursos;
