import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as helpers from "../helpers/index";
import Icon from "../common/icons";

const styles = {
  fontFamily: "sans-serif",
};
class Main extends Component {
  state = {
    info_cadastros: {
      last_resp: "",
      last_alunos: "",
      last_contratos: "",
      last_carnes: { id_resp: 0 },
      last_cursos: "",
    },
  };
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
          <div id="block_resp" className="blocks">
            <h3>
              <Link to="/profile/responsaveis">
                <Icon name="home" className="icon icon_home" />
                Responsáveis
              </Link>
            </h3>
            <div className="b_content">
              <p>
                Responsáveis Cadastrados:
                <span className="result">
                  {this.state.info_cadastros.num_resp}
                </span>
              </p>
              <span className="result">
                <span className="last_results">
                  <Link
                    to={
                      "/profile/responsavel_resumo/" +
                      this.state.info_cadastros.last_resp.id
                    }
                  >
                    <span className="label">Último Cadastro: </span>
                    <span className="nome">
                      {this.state.info_cadastros.last_resp.nome}{" "}
                    </span>
                    <span className="created">
                      {this.state.info_cadastros.last_resp.created}
                    </span>
                  </Link>
                </span>
              </span>
            </div>
          </div>
          <div id="block_alunos" className="blocks">
            <h3>
              <Link to="/profile/alunos">
                Alunos
                <Icon name="users" className="icon icon_users" />
              </Link>
            </h3>

            <div className="b_content">
              <p>
                Alunos Cadastrados:
                <span className="result">
                  {this.state.info_cadastros.num_alunos}
                </span>
              </p>
              <span className="result">
                <span className="last_results">
                  <Link
                    to={
                      "/profile/responsavel_resumo/" +
                      this.state.info_cadastros.last_alunos.id_resp
                    }
                  >
                    <span className="label">Último Cadastro: </span>
                    <span className="nome">
                      {this.state.info_cadastros.last_alunos.nome}{" "}
                    </span>
                    <span className="created">
                      {helpers.dateFunc.dateFormatBR(
                        this.state.info_cadastros.last_alunos.created
                      )}
                    </span>
                  </Link>
                </span>
              </span>
            </div>
          </div>

          <div id="block_contratos" className="blocks">
            <h3>
              <Link to="/profile/contratos">
                Contratos
                <Icon name="file-text2" className="icon icon_user" />
              </Link>
            </h3>
            <div className="b_content">
              <p>
                Contratos Cadastrados:
                <span className="result">
                  {this.state.info_cadastros.num_contratos}
                </span>
              </p>
              <span className="result">
                <span className="last_results">
                  <Link
                    to={
                      "/profile/responsavel_resumo/" +
                      this.state.info_cadastros.last_contratos.id_resp
                    }
                  >
                    <span className="label">Último Cadastro: </span>
                    <span className="nome">
                      {this.state.info_cadastros.last_contratos.responsavel}{" "}
                    </span>
                    <span className="created">
                      {helpers.dateFunc.dateFormatBR(
                        this.state.info_cadastros.last_contratos.created
                      )}
                    </span>
                  </Link>
                </span>
              </span>
            </div>
          </div>
          <div id="block_carnes" className="blocks">
            <h3>
              <Link to="/profile/carnes">
                Carnês
                <Icon name="credit-card" className="icon icon_credit_card" />
              </Link>
            </h3>
            <div className="b_content">
              <p>
                Carnês Cadastrados:
                <span className="result">
                  {this.state.info_cadastros.num_carnes}
                </span>
              </p>
              <span className="result">
                <span className="last_results">
                  <Link
                    to={
                      "/profile/responsavel_resumo/" +
                      this.state.info_cadastros.last_carnes.id_resp
                    }
                  >
                    <span className="label">Último Cadastro: </span>
                    <span className="nome">
                      {this.state.info_cadastros.last_carnes.responsavel}{" "}
                    </span>
                    <span className="created">
                      {helpers.dateFunc.dateFormatBR(
                        this.state.info_cadastros.last_carnes.created
                      )}
                    </span>
                  </Link>
                </span>
              </span>
            </div>
          </div>
          <div id="block_cursos" className="blocks">
            <h3>
              <Link to="/profile/cursos">
                Cursos
                <Icon name="books" className="icon icon_books" />
              </Link>
            </h3>
            <div className="b_content">
              <p>
                Cursos Cadastrados:{" "}
                <span className="result">
                  {this.state.info_cadastros.num_cursos}
                </span>
              </p>
            </div>
          </div>
          <div id="block_outros" className="blocks">
            <h3>Outros</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
