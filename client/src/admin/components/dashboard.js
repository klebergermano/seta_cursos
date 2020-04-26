import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { isAuthenticated } from "../../routes/auth";

import Main from "./home/Main";

import ResponsavelAdd from "./responsavel/ResponsavelAdd";
import ResponsaveisView from "./responsavel/ReponsaveisView";
import ResponsavelEdit from "./responsavel/ResponsavelEdit";
import ResponsavelResumo from "./responsavel/ResponsavelResumo";

import ContratoView from "./contrato/ContratoView";
import ContratoAdd from "./contrato/ContratoAdd";
import ContratoEdit from "./contrato/ContratoEdit";

import AlunoAdd from "./aluno/AlunoAdd";
import AlunosView from "./aluno/AlunosView";
import AlunoEdit from "./aluno/AlunoEdit";

import CursosView from "./curso/CursosView";
import CursoAdd from "./curso/CursoAdd";
import CursoEdit from "./curso/CursoEdit";

import CarnesView from "./carnes/CarnesView";
import CarneEdit from "./carnes/CarneEdit";
import CarneResumo from "./carnes/CarneResumo";
import CarneAdd from "./carnes/CarneAdd";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import GeradorBoleto from "./boleto/GeradorBoleto";
import HeaderDashboard from "./common/headerDashboard";
import NavDashboard from "./common/navDashboard";
import Test from "./teste/test";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: "",
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="dashboard_container">
        <HeaderDashboard />
        <NavDashboard />

        <div id="dashboard_content">
          <Switch>
            <Route path="/profile/test" component={Test} />

            <Route exact path="/profile" component={Main} />

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
            <Route
              path="/profile/responsavel_resumo/"
              component={ResponsavelResumo}
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
            <Route path="/profile/carne_resumo/" component={CarneResumo} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Dashboard;
