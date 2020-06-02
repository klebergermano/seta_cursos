import React, { Component } from "react";

import { Link } from "react-router-dom";
import * as helpers from "../helpers/index";
import Icon from "../common/icons";

import ChartAlunoMes from "../common/chart/chartAlunoMes";
import ChartAlunoIdade from "../common/chart/chartAlunoIdade";
import config from "../../../config";
const styles = {
  fontFamily: "sans-serif",
};
class Main extends Component {
  constructor() {
    super();
    this.state = {
      data_ano: "",

      info_cadastros: {
        last_resp: "",
        last_alunos: "",
        last_contratos: "",
        last_carnes: { id_resp: 0 },
        last_cursos: "",
      },
    };
  }
  componentDidMount() {
    fetch("/profile/cadastros_info")
      .then((res) => res.json())
      .then((info_cadastros) => {
        if (typeof info_cadastros !== "undefined") {
          this.setState({ info_cadastros });
        } else {
        }
      });
  }

  componentWillMount() {}

  showStatus = () => {
    console.log(this.state);
  };

  //----------------------------------------------------------------------

  //-----------------------------------------------------------------------
  render() {
    return (
      <div id="bg_main">
        <button onClick={this.showStatus}>Show Status</button>

        <div id="wrap">
          <div id="nav_utilitarios">
            <div id="block_cursos" className="block">
              <Link to={config.BASE_URL_ADMIN + "/alunos_classe_view"}>
                <Icon name="users" className="icon icon_books" />
                Alunos Curso Status
              </Link>
            </div>
            <div id="block_cursos" className="block">
              <Link to={config.BASE_URL_ADMIN + "/cursos"}>
                <Icon name="books" className="icon icon_books" />
                Cursos
              </Link>
            </div>
          </div>
          <div id="block_resp" className="blocks">
            <h3>
              <Link to={config.BASE_URL_ADMIN + "/responsaveis"}>
                <Icon name="home" className="icon icon_home" />
                Responsáveis:{" "}
                <span className="result">
                  {this.state.info_cadastros.num_resp}
                </span>
              </Link>
            </h3>
            <div className="b_content">
              <span className="result">
                <span className="last_results">
                  <Link
                    to={
                      config.BASE_URL_ADMIN +
                      "/responsavel_resumo/" +
                      this.state.info_cadastros.last_resp.id
                    }
                  >
                    <span className="label">Último Cadastro: </span>

                    <span className="created">
                      {this.state.info_cadastros.last_resp.created}
                    </span>
                    <span className="nome">
                      {this.state.info_cadastros.last_resp.nome}{" "}
                    </span>
                  </Link>
                </span>
              </span>
            </div>
          </div>
          <div id="block_alunos" className="blocks">
            <h3>
              <Link to={config.BASE_URL_ADMIN + "/alunos"}>
                <Icon name="users" className="icon icon_users" />
                Alunos:{" "}
                <span className="result">
                  {this.state.info_cadastros.num_alunos}
                </span>
              </Link>
            </h3>

            <div className="b_content">
              <span className="result">
                <span className="last_results">
                  <Link
                    to={
                      config.BASE_URL_ADMIN +
                      "/responsavel_resumo/" +
                      this.state.info_cadastros.last_alunos.id_resp
                    }
                  >
                    <span className="label">Último Cadastro: </span>
                    <span className="created">
                      {helpers.dateFunc.dateFormatBR(
                        this.state.info_cadastros.last_alunos.created
                      )}
                    </span>
                    <span className="nome">
                      {this.state.info_cadastros.last_alunos.nome}{" "}
                    </span>
                  </Link>
                </span>
              </span>
            </div>
          </div>

          <div id="block_contratos" className="blocks">
            <h3>
              <Link to={config.BASE_URL_ADMIN + "/contratos"}>
                <Icon name="file-text2" className="icon icon_user" />
                Contratos:{" "}
                <span className="result">
                  {this.state.info_cadastros.num_contratos}
                </span>
              </Link>
            </h3>
            <div className="b_content">
              <span className="result">
                <span className="last_results">
                  <Link
                    to={
                      config.BASE_URL_ADMIN +
                      "/responsavel_resumo/" +
                      this.state.info_cadastros.last_contratos.id_resp
                    }
                  >
                    <span className="label">Último Cadastro: </span>
                    <span className="created">
                      {helpers.dateFunc.dateFormatBR(
                        this.state.info_cadastros.last_contratos.created
                      )}
                    </span>
                    <span className="nome">
                      {this.state.info_cadastros.last_contratos.responsavel}{" "}
                    </span>
                  </Link>
                </span>
              </span>
            </div>
          </div>
          <div id="block_carnes" className="blocks">
            <h3>
              <Link to={config.BASE_URL_ADMIN + "/carnes"}>
                <Icon name="credit-card" className="icon icon_credit_card" />
                Carnês:{" "}
                <span className="result">
                  {this.state.info_cadastros.num_carnes}
                </span>
              </Link>
            </h3>
            <div className="b_content">
              <span className="result">
                <span className="last_results">
                  <Link
                    to={
                      config.BASE_URL_ADMIN +
                      "/responsavel_resumo/" +
                      this.state.info_cadastros.last_carnes.id_resp
                    }
                  >
                    <span className="label">Último Cadastro: </span>
                    <span className="created">
                      {helpers.dateFunc.dateFormatBR(
                        this.state.info_cadastros.last_carnes.created
                      )}
                    </span>
                    <span className="nome">
                      {this.state.info_cadastros.last_carnes.responsavel}{" "}
                    </span>
                  </Link>
                </span>
              </span>
            </div>
          </div>

          <div className="bg_charts_main" id="chart-1">
            <div className="bg_chartLine">
              <ChartAlunoMes chartData={this.state.chartDataAlunoMes} />
            </div>
          </div>
          <div className="bg_charts_main" id="chart-2">
            <div className="bg_chartLine">
              <ChartAlunoIdade />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
