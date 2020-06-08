import React, { Component } from "react";
import { Link } from "react-router-dom";
import Icon from "./icons";
import config from "../../../config";
class NavDashboard extends Component {
  state = {};
  render() {
    return (
      <div id="bg_main_nav">
        <nav id="nav_dashboard">
          <ul>
            <ul>
              <li>
                <Link to={config.BASE_URL_ADMIN}>
                  <Icon name="home" className="icon icon_home" />
                  Início
                </Link>
              </li>
            </ul>
            <li>
              <span>Gerenciamento</span>

              <ul>
                <li>
                  <Link to={config.BASE_URL_ADMIN + "/users_view"}>
                    <Icon name="mug" className="icon icon_resp" />
                    Usuários
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <span>Cadastros</span>

              <ul>
                <li>
                  <Link to={config.BASE_URL_ADMIN + "/responsaveis"}>
                    <Icon name="user" className="icon icon_resp" />
                    Responsáveis
                  </Link>
                </li>
                <li>
                  <Link to={config.BASE_URL_ADMIN + "/alunos"}>
                    <Icon name="users" className="icon icon_users" />
                    Alunos
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <Link to={config.BASE_URL_ADMIN + "/contratos"}>
                    <Icon name="file-text2" className="icon icon_user" />
                    Contratos
                  </Link>
                </li>
                <li>
                  <Link to={config.BASE_URL_ADMIN + "/carnes"}>
                    <Icon
                      name="credit-card"
                      className="icon icon_credit_card"
                    />
                    Carnês
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <span>Outros</span>
              <ul>
                <li>
                  <Link to={config.BASE_URL_ADMIN + "/cursos"}>
                    <Icon name="books" className="icon icon_books" />
                    Cursos
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <span>Classe</span>
              <ul>
                <li>
                  <Link to={config.BASE_URL_ADMIN + "/alunos_classe_view"}>
                    <Icon name="class" className="icon icon_books" />
                    Alunos Curso Status{" "}
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavDashboard;
