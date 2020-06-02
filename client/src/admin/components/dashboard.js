import React, { Component } from "react";

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

import ClasseView from "./classe/Classe";
import AlunoClasseView from "./classe/AlunoClasseView";
import AlunoClasse from "./classe/AlunoClasse";
import AlunoStatusEdit from "./classe/AlunoStatusEdit";

import CursosView from "./curso/CursosView";
import CursoAdd from "./curso/CursoAdd";
import CursoEdit from "./curso/CursoEdit";

import CarnesView from "./carnes/CarnesView";
import CarneEdit from "./carnes/CarneEdit";
import CarneResumo from "./carnes/CarneResumo";
import CarneAdd from "./carnes/CarneAdd";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HeaderDashboard from "./common/headerDashboard";
import NavDashboard from "./common/navDashboard";
import config from "../../config";
class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard_container">
        <HeaderDashboard />
        <NavDashboard />

        <div id="dashboard_content">
          <Switch>
            <Route exact path={config.BASE_URL_ADMIN} component={Main} />

            <Route
              exact
              path={config.BASE_URL_ADMIN + "/cadastrar_responsavel"}
              component={ResponsavelAdd}
            />

            <Route
              exact
              path={config.BASE_URL_ADMIN + "/responsaveis"}
              component={ResponsaveisView}
            />
            <Route
              path={config.BASE_URL_ADMIN + "/responsavel_edit/"}
              component={ResponsavelEdit}
            />
            <Route
              path={config.BASE_URL_ADMIN + "/responsavel_resumo/"}
              component={ResponsavelResumo}
            />
            <Route
              path={config.BASE_URL_ADMIN + "/aluno_edit/"}
              component={AlunoEdit}
            />
            <Route
              exact
              path={config.BASE_URL_ADMIN + "/cadastrar_aluno"}
              component={AlunoAdd}
            />
            <Route
              exact
              path={config.BASE_URL_ADMIN + "/alunos"}
              component={AlunosView}
            />

            <Route
              exact
              path={config.BASE_URL_ADMIN + "/classe"}
              component={ClasseView}
            />
            <Route
              exact
              path={config.BASE_URL_ADMIN + "/Alunos_classe_view"}
              component={AlunoClasseView}
            />
            <Route
              exact
              path={config.BASE_URL_ADMIN + "/Alunos_classe"}
              component={AlunoClasse}
            />
            <Route
              exact
              path={config.BASE_URL_ADMIN + "/Alunos_status_edit"}
              component={AlunoStatusEdit}
            />

            <Route
              path={config.BASE_URL_ADMIN + "/cadastrar_contrato"}
              component={ContratoAdd}
            />
            <Route
              path={config.BASE_URL_ADMIN + "/contrato_edit"}
              component={ContratoEdit}
            />
            <Route
              path={config.BASE_URL_ADMIN + "/contratos"}
              component={ContratoView}
            />

            <Route
              path={config.BASE_URL_ADMIN + "/cursos"}
              component={CursosView}
            />
            <Route
              path={config.BASE_URL_ADMIN + "/cadastrar_curso"}
              component={CursoAdd}
            />
            <Route
              path={config.BASE_URL_ADMIN + "/curso_edit"}
              component={CursoEdit}
            />

            <Route
              path={config.BASE_URL_ADMIN + "/carnes"}
              component={CarnesView}
            />
            <Route
              path={config.BASE_URL_ADMIN + "/cadastrar_carne"}
              component={CarneAdd}
            />
            <Route
              path={config.BASE_URL_ADMIN + "/carne_edit"}
              component={CarneEdit}
            />
            <Route
              path={config.BASE_URL_ADMIN + "/carne_resumo"}
              component={CarneResumo}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Dashboard;
