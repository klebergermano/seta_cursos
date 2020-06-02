import React, { Component } from "react";
import { Link } from "react-router-dom";
import Icon from "../common/icons";
import config from "../../../config";
class NavAlunos extends Component {
  state = {};
  render() {
    return (
      <nav class="nav_cadastros" id="nav_alunos">
        <ul>
          <li>
            <Link to={config.BASE_URL_ADMIN + "/alunos"}>
              <Icon name="eye" className="icon icon_eye" />
              Ver Alunos
            </Link>
          </li>
          <li>
            <Link to={config.BASE_URL_ADMIN + "/cadastrar_aluno"}>
              <Icon name="add-user" className="icon icon_user" />
              Cadastrar Aluno
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavAlunos;
