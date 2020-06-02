import React, { Component } from "react";
import { Link } from "react-router-dom";
import Icon from "../common/icons";
import config from "../../../config";
class NavAlunoClasse extends Component {
  state = {};
  render() {
    return (
      <nav id="nav_aluno_classe">
        <ul>
          <li>
            <Link to={config.BASE_URL_ADMIN + "/alunos_classe_view"}>
              <Icon name="eye" className="icon icon_eye" />
              Alunos Cursos
            </Link>
          </li>
          <li>
            <Link to={config.BASE_URL_ADMIN + "/alunos_classe"}>
              <Icon name="cog" className="icon icon_cog" />
              Aluno Cursos Status
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavAlunoClasse;
