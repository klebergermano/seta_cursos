import React, { Component } from "react";
import { Link } from "react-router-dom";
import config from "../../../config";

class NavClasse extends Component {
  state = {};
  render() {
    return (
      <nav id="nav_classe">
        <ul>
          <li>
            <Link to={config.BASE_URL_ADMIN + "/alunos_classe_view"}>
              Aluno Classe View
            </Link>
          </li>
          <li>
            <Link to={config.BASE_URL_ADMIN + "/alunos_classe"}>
              Aluno Classe Status
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavClasse;
