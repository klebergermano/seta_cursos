import React, { Component } from "react";
import { Link } from "react-router-dom";

class Responsaveis extends Component {
  state = {};

  render() {
    return (
      <div className="page_dashboard">
        <nav>
          <ul>
            <li>
              <Link to="/profile/cadastrar_responsavel">
                Cadastrar Responsável
              </Link>
            </li>
          </ul>
        </nav>
        <h1>Responsáveis</h1>
        <table className="table_general">
          <thead>
            <tr>
              <th>id</th>
              <th>nome</th>
              <th>Tel</th>
              <th>control</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>aaaa</td>
              <td>aaaa</td>
              <td>aaaa</td>
              <td>Visualizar - Editar - Deletar</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Responsaveis;
