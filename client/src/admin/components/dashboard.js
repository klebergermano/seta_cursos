import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { isAuthenticated } from "../../routes/auth";
import ResponsavelAdd from "./ResponsavelAdd";
import ResponsaveisView from "./ReponsaveisView";
import ResponsavelEdit from "./ResponsavelEdit";

import ContratoView from "./ContratoView";
import ContratoAdd from "./ContratoAdd";
import ContratoEdit from "./ContratoEdit";

import AlunoAdd from "./AlunoAdd";

import AlunosView from "./AlunosView";
import AlunoEdit from "./AlunoEdit";

import CursosView from "./CursosView";
import CursoAdd from "./CursoAdd";
import CursoEdit from "./CursoEdit";

import CarnesView from "./carnes/CarnesView";
import CarneEdit from "./carnes/CarneEdit";
import CarneAdd from "./carnes/CarneAdd";

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
                    <Link to="/profile/carnes">Carnês</Link>
                  </li>
                  <li>
                    <Link to="/profile/contratos">Contratos</Link>
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
                    <Link to="/profile/alunos">Alunos</Link>
                  </li>
                  <li>
                    <Link to="/profile/cursos">Cursos</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div id="dashboard_content">
          <Switch>
            <Route
              exact
              path="/profile/cadastrar_responsavel"
              component={ResponsavelAdd}
            />

            <Route
              exact
              path="/profile/responsaveis"
              component={ResponsaveisView}
            />
            <Route
              path="/profile/responsavel_edit/"
              component={ResponsavelEdit}
            />
            <Route path="/profile/aluno_edit/" component={AlunoEdit} />
            <Route exact path="/profile/cadastrar_aluno" component={AlunoAdd} />
            <Route exact path="/profile/alunos" component={AlunosView} />

            <Route path="/profile/cadastrar_contrato" component={ContratoAdd} />
            <Route path="/profile/contrato_edit/" component={ContratoEdit} />
            <Route path="/profile/contratos" component={ContratoView} />

            <Route path="/profile/cursos" component={CursosView} />
            <Route path="/profile/cadastrar_curso" component={CursoAdd} />
            <Route path="/profile/curso_edit/" component={CursoEdit} />

            <Route path="/profile/carnes" component={CarnesView} />
            <Route path="/profile/cadastrar_carne" component={CarneAdd} />
            <Route path="/profile/carne_edit/" component={CarneEdit} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Dashboard;
