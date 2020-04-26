import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import * as helpers from "../helpers/helpers";

class Carnes extends Component {
  constructor() {
    super();
    this.state = {
      carnes: [],
    };
  }

  componentDidMount() {
    fetch("/profile/carnes")
      .then((res) => res.json())
      .then((carnes) => this.setState({ carnes }))
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
              <Link to="/profile/cadastrar_carne">+ Cadastrar Carnês</Link>
            </li>
          </ul>
        </nav>
        <h1>Carnês</h1>
        <table className="table_general view_carne">
          <thead>
            <tr>
              <th>ID</th>
              <th>Responsável</th>
              <th>Aluno</th>
              <th>Curso</th>

              <th>Parcelas</th>
              <th>Valor</th>
              <th>Cadastrado</th>
              <th>ID Contrato</th>

              <th></th>
            </tr>
          </thead>

          <tbody>
            {this.state.carnes.reverse().map((carnes) => (
              <tr key={carnes.id}>
                <td className="td_id">{carnes.id}</td>
                <td>{carnes.responsavel}</td>
                <td>{carnes.aluno}</td>
                <td className="td_curso">{carnes.curso}</td>

                <td className="td_parcelas">{carnes.parcelas}</td>
                <td className="td_parcelas">R$: {carnes.valor_total}</td>
                <td className="td_cadastrado">
                  {" "}
                  {helpers.dateFormatBR(carnes.created)}
                </td>
                <td className="id_carne_contrato_view">{carnes.id_contrato}</td>

                <td className="td_control">
                  <Link
                    className="btn_resumo"
                    to={"/profile/carne_resumo/" + carnes.id}
                  >
                    Resumo
                  </Link>{" "}
                  <Link
                    className="btn_edit"
                    to={"/profile/carne_edit/" + carnes.id}
                  >
                    Editar
                  </Link>
                  <Link className="btn_delete" to="/profile/carnes">
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

export default Carnes;
