import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

class Carnes extends Component {
  constructor() {
    super();
    this.state = {
      carnes: []
    };
  }

  componentDidMount() {
    fetch("/profile/carnes")
      .then(res => res.json())
      .then(carnes => this.setState({ carnes }))
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
              <Link to="/profile/cadastrar_carne">+ Cadastrar carnes</Link>
            </li>
          </ul>
        </nav>
        <h1>carnes</h1>
        <table className="table_general">
          <thead>
            <tr>
              <th>id</th>
              <th>Responsável</th>

              <th></th>
            </tr>
          </thead>

          <tbody>
            {this.state.carnes.reverse().map(carnes => (
              <tr key={carnes.id}>
                <td>{carnes.id}</td>
                <td>{carnes.id_contrato}</td>
                <td>{carnes.status}</td>
                <td>{carnes.created}</td>

                <td>
                  <Link to="/profile/carnes">Resumo</Link> -{" "}
                  <Link to={"/profile/carne_edit/" + carnes.id}>Editar</Link>
                </td>
                <td>
                  <Link to="/profile/carnes">Deletar</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Carnes;
