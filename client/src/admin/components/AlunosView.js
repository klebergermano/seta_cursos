import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

class Alunos extends Component {
  constructor() {
    super();
    this.state = {
      alunos: []
    };
  }

  componentDidMount() {
    fetch("/api/alunos")
      .then(res => res.json())
      .then(alunos => this.setState({ alunos }))
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
              <Link to="/profile/cadastrar_aluno">+ Cadastrar Alunos</Link>
            </li>
          </ul>
        </nav>
        <h1>Alunos</h1>
        <div id="teste"></div>
        <table className="table_general">
          <thead>
            <tr>
              <th>id</th>
              <th>nome</th>
              <th>Telefone</th>
              <th>Celular</th>
              <th>Email</th>
              <th>Cadastrado</th>
              <th>control</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {this.state.alunos.reverse().map(alunos => (
              <tr key={alunos.id}>
                <td>{alunos.id}</td>
                <td>{alunos.nome}</td>
                <td>{alunos.temp_telefone}</td>
                <td>{alunos.temp_celular}</td>
                <td>{alunos.email}</td>
                <td>{alunos.created}</td>
                <td>
                  <Link to="/profile/alunos">Resumo</Link> -{" "}
                  <Link to={"/profile/aluno_edit/" + alunos.id}>Editar</Link>
                </td>
                <td>
                  <Link to="/profile/alunos">Deletar</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Alunos;
