import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { isAuthenticated } from "../../routes/auth";
import AlunoAdd from "./AlunoAdd";
import ResponsavelAdd from "./ResponsavelAdd";
import ResponsaveisView from "./ReponsaveisView";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import GeradorBoleto from "./boleto/GeradorBoleto";
import HeaderDashboard from "./common/headerDashboard";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: ""
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="dashboard_container">
        <HeaderDashboard />
        <div id="bg_main_nav">
          <nav id="nav_dashboard">
            <ul>
              <li>
                <span>Boletos</span>
                <ul>
                  <li>
                    <Link to="/gerador_boleto">Gerar Carnê</Link>
                  </li>
                  <li>
                    <Link to="/gerador_boleto">Carnês</Link>
                  </li>
                  <li>
                    <Link to="/gerador_boleto">Contratos</Link>
                  </li>
                </ul>
              </li>

              <li>
                <span>Cadastros</span>
                <ul>
                  <li>
                    <Link to="/profile/responsaveis">Responsáveis</Link>
                  </li>
                  <li>
                    <Link to="/profile/cadastrar_aluno">Alunos</Link>
                  </li>
                  <li>
                    <Link to="/gerador_boleto">Cursos</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div id="dashboard_content">
          <Route
            exact
            path="/profile/cadastrar_responsavel"
            component={ResponsavelAdd}
          />
          <Route exact path="/profile/cadastrar_aluno" component={AlunoAdd} />
          <Route
            exact
            path="/profile/responsaveis"
            component={ResponsaveisView}
          />
        </div>
      </div>
    );
  }
}

export default Dashboard;
