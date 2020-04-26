import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import * as helpers from "../helpers/index";

class Responsaveis extends Component {
  constructor() {
    super();
    this.state = {
      responsaveis: [],
    };
  }

  componentDidMount() {
    fetch("/profile/responsaveis")
      .then((res) => res.json())
      .then((responsaveis) => this.setState({ responsaveis }))
      .then(() => {
        console.log(this.state);
      });
  }

  render() {
    return (
      <div className="page_dashboard page_responsavel_view">
        <nav className="nav_cadastros">
          <ul>
            <li>
              <Link to="/profile/cadastrar_responsavel">
                + Cadastrar Responsável
              </Link>
            </li>
          </ul>
        </nav>
        <h1>Responsáveis</h1>
        <div id="teste"></div>
        <table className="table_general">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Obs</th>
              <th>CPF</th>
              <th>Cadastrado</th>
              <th></th>
            </tr>
          </thead>

          <tbody cellspacing="0">
            {this.state.responsaveis.reverse().map((responsaveis) => (
              <tr key={responsaveis.id}>
                <td className="td_id">{responsaveis.id}</td>
                <td>{responsaveis.nome}</td>

                <td className="td_obs">{responsaveis.obs}</td>
                <td className="td_cpf">{responsaveis.cpf}</td>
                <td className="td_cadastrado">{responsaveis.created}</td>
                <td className="td_control">
                  <Link
                    className="btn_resumo"
                    to={"/profile/responsavel_resumo/" + responsaveis.id}
                  >
                    Resumo
                  </Link>
                  <Link
                    className="btn_edit"
                    to={"/profile/responsavel_edit/" + responsaveis.id}
                  >
                    Editar
                  </Link>
                  <Link className="btn_delete" to="/profile/responsaveis">
                    x
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Responsaveis;
