import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

class CursosView extends Component {
  constructor() {
    super();
    this.state = {
      cursos: [],
    };
  }

  componentDidMount() {
    fetch("/profile/cursos")
      .then((res) => res.json())
      .then((cursos) => this.setState({ cursos }))
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
              <Link to="/profile/cadastrar_curso">+ Cadastrar Curso</Link>
            </li>
          </ul>
        </nav>
        <h1>Cursos</h1>
        <table className="table_general">
          <thead>
            <tr>
              <th>id</th>
              <th>Nome</th>
              <th>Cadastrado</th>
              <th></th>
            </tr>
          </thead>

          <tbody cellspacing="0">
            {this.state.cursos.reverse().map((cursos) => (
              <tr key={cursos.id}>
                <td className="td_id">{cursos.id}</td>
                <td>{cursos.nome}</td>

                <td className="td_cadastrado">{cursos.created}</td>

                <td className="td_control">
                  <Link className="btn_resumo" to="/profile/cursos">
                    Resumo
                  </Link>{" "}
                  <Link
                    className="btn_edit"
                    to={"/profile/curso_edit/" + cursos.id}
                  >
                    Editar
                  </Link>
                  <Link className="btn_delete" to="/profile/cursos">
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

export default CursosView;
