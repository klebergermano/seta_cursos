import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import * as helpers from "../helpers/index";
import NavAlunoClasse from "./NavAlunoClasse";

class AlunoClasseView extends Component {
  constructor() {
    super();
    this.state = {
      alunos_status: [],
      contratos: [],
    };
  }

  componentDidMount() {
    fetch("/profile/alunos_classe")
      .then((res) => res.json())
      .then((alunos_status) => this.setState({ alunos_status }))
      .then(() => {
        console.log(this.state);
      });
  }

  render() {
    return (
      <div className="page_dashboard">
        <NavAlunoClasse />
        <h1>Alunos Curso Status</h1>
        <table className="table_general view_aluno_classe">
          <thead>
            <tr>
              <th>ID Aluno</th>
              <th>Nome</th>
              <th>Curso</th>
              <th>Cadastrado</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {this.state.alunos_status.reverse().map((alunos_status) => (
              <tr key={alunos_status.id}>
                <td className="td_id">{alunos_status.id_aluno}</td>
                <td>{alunos_status.nome}</td>
                <td>{alunos_status.curso}</td>

                <td className="td_cadastrado">
                  {" "}
                  {helpers.dateFunc.dateFormatBR(alunos_status.created)}
                </td>
                <td className={"status " + alunos_status.status}>
                  {alunos_status.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AlunoClasseView;
