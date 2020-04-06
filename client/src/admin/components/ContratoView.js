import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

class Contratos extends Component {
  constructor() {
    super();
    this.state = {
      contratos: []
    };
  }

  componentDidMount() {
    fetch("/profile/contratos")
      .then(res => res.json())
      .then(contratos => this.setState({ contratos }))
      .then(() => {
        console.log(this.state);
      });
  }

  render() {
    return (
      <div className="page_dashboard">
        <nav className="nav_cadastros">
          <ul>
            <li>
              <Link to="/profile/cadastrar_contrato">
                + Cadastrar contratos
              </Link>
            </li>
          </ul>
        </nav>
        <h1>contratos</h1>
        <table className="table_general">
          <thead>
            <tr>
              <th>id</th>
              <th>Responsável</th>
              <th>Aluno</th>
              <th>Curso</th>
              <th>CPF</th>
              <th>Parcelas</th>
              <th>Cadastrado</th>
              <th>control</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {this.state.contratos.reverse().map(contratos => (
              <tr key={contratos.id}>
                <td>{contratos.id}</td>
                <td>{contratos.responsavel}</td>
                <td>{contratos.aluno}</td>
                <td>{contratos.curso}</td>
                <td>{contratos.cpf}</td>
                <td>{contratos.parcelas}</td>

                <td>{contratos.created}</td>
                <td>
                  <Link to="/profile/contratos">Resumo</Link> -{" "}
                  <Link to={"/profile/contrato_edit/" + contratos.id}>
                    Editar
                  </Link>
                </td>
                <td>
                  <Link to="/profile/contratos">Deletar</Link>
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
