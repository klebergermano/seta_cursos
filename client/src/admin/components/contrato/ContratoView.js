import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import * as helpers from "../helpers/index";
import NavContratos from "./NavContratos";

class Contratos extends Component {
  constructor() {
    super();
    this.state = {
      contratos: [],
    };
  }

  componentDidMount() {
    fetch("/profile/contratos")
      .then((res) => res.json())
      .then((contratos) => this.setState({ contratos }))
      .then(() => {
        console.log(this.state);
      });
  }
  vinculadoCarne = (id_carne) => {
    if (id_carne !== null && id_carne !== 0) {
      return "vinculado_carne_view";
    } else {
      return "nao_vinculado_carne_view";
    }
  };

  render() {
    return (
      <div className="page_dashboard">
        <NavContratos />
        <h1>Contratos</h1>
        <table className="table_general view_contrato">
          <thead>
            <tr>
              <th>id</th>
              <th>Responsável</th>
              <th>Aluno</th>
              <th>Curso</th>
              <th>CPF</th>
              <th>Parcelas</th>
              <th>Cadastrado</th>
              <th>ID Carnê</th>

              <th></th>
            </tr>
          </thead>

          <tbody>
            {this.state.contratos.reverse().map((contratos) => (
              <tr
                key={contratos.id}
                className={this.vinculadoCarne(contratos.id_carne)}
              >
                <td className="td_id">{contratos.id}</td>
                <td>{contratos.responsavel}</td>
                <td>{contratos.aluno}</td>
                <td>{contratos.curso}</td>
                <td className="td_cpf">{contratos.cpf}</td>
                <td className="td_parcelas">{contratos.parcelas}</td>

                <td className="td_cadastrado">
                  {helpers.dateFunc.dateFormatBR(contratos.created)}
                </td>
                <td className="id_carne_contrato_view">{contratos.id_carne}</td>

                <td className="td_control">
                  <Link
                    className="btn_resumo"
                    to={"/profile/responsavel_resumo/" + contratos.id_resp}
                  >
                    Resumo
                  </Link>{" "}
                  <Link
                    className="btn_edit"
                    to={"/profile/contrato_edit/" + contratos.id}
                  >
                    Editar
                  </Link>
                  <Link className="btn_delete" to="/profile/contratos">
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

export default Contratos;
