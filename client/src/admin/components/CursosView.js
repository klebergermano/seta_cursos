import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

class CursosView extends Component {
  constructor() {
    super();
    this.state = {
      cursos: []
    };
  }

  componentDidMount() {
    fetch("/profile/cursos")
      .then(res => res.json())
      .then(cursos => this.setState({ cursos }))
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
        <div id="teste"></div>
        <table className="table_general">
          <thead>
            <tr>
              <th>id</th>
              <th>Curso</th>
              <th>Cadastrado</th>
              <th>control</th>
              <th></th>
            </tr>
          </thead>

          <tbody cellspacing="0">
            {this.state.cursos.reverse().map(cursos => (
              <tr key={cursos.id}>
                <td>{cursos.id}</td>
                <td>{cursos.curso}</td>

                <td>{cursos.created}</td>
                <td>
                  <Link to="/profile/cursos">Resumo</Link> -{" "}
                  <Link to={"/profile/curso_edit/" + cursos.id}>Editar</Link>
                </td>
                <td>
                  <Link to="/profile/cursos">Deletar</Link>
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
