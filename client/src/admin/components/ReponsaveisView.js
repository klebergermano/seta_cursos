import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

class Responsaveis extends Component {
  constructor() {
    super();
    this.state = {
      responsaveis: []
    };
  }

  componentDidMount() {
    fetch("/api/clients")
      .then(res => res.json())
      .then(responsaveis => this.setState({ responsaveis }))
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

          <tbody cellspacing="0">
            {this.state.responsaveis.reverse().map(responsaveis => (
              <tr key={responsaveis.id}>
                <td>{responsaveis.id}</td>
                <td>{responsaveis.nome}</td>
                <td>
                  <input type="text" value={responsaveis.temp_telefone} />
                </td>
                <td>
                  <input type="text" value={responsaveis.temp_celular} />
                </td>
                <td>{responsaveis.email}</td>
                <td>{responsaveis.created}</td>
                <td>
                  <Link to="/profile/responsaveis">Resumo</Link> -{" "}
                  <Link to={"/profile/responsavel_edit/" + responsaveis.id}>
                    Editar
                  </Link>
                </td>
                <td>
                  <Link to="/profile/responsaveis">Deletar</Link>
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
