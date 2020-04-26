import React, { Component } from "react";
import { Link } from "react-router-dom";
import Icon from "./icons";

class NavDashboard extends Component {
  state = {};
  render() {
    return (
      <div id="bg_main_nav">
        <nav id="nav_dashboard">
          <ul>
            <ul>
              <li>
                <Link to="/profile/">
                  <Icon name="home" className="icon icon_home" />
                  Início
                </Link>
              </li>
            </ul>
            <li>
              <span>Cadastros</span>

              <ul>
                <li>
                  <Link to="/profile/responsaveis">
                    <Icon name="user" className="icon icon_resp" />
                    Responsáveis
                  </Link>
                </li>
                <li>
                  <Link to="/profile/alunos">
                    <Icon name="users" className="icon icon_users" />
                    Alunos
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <Link to="/profile/contratos">
                    <Icon name="file-text2" className="icon icon_user" />
                    Contratos
                  </Link>
                </li>
                <li>
                  <Link to="/profile/carnes">
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
                  <Link to="/profile/cursos">
                    <Icon name="books" className="icon icon_books" />
                    Cursos
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
