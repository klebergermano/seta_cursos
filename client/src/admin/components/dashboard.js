import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { isAuthenticated } from "../../routes/auth";
import FormAddResponsavel from "./formAddResponsavel";
import Responsaveis from "./Reponsaveis";
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
                    <Link to="/gerador_boleto">Alunos</Link>
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
            component={FormAddResponsavel}
          />
          <Route exact path="/profile/responsaveis" component={Responsaveis} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
