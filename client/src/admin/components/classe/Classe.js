import React, { Component } from "react";
import NavAlunoClasse from "./NavAlunoClasse";
class Classe extends Component {
  state = {};
  render() {
    return (
      <div id="page_aluno_classe">
        <h1>Classe</h1>
        <div id="wrap_classe">
          <NavAlunoClasse />
          <div className="blocks">a</div>
          <div className="blocks">b</div>
          <div className="blocks">c</div>
        </div>
      </div>
    );
  }
}

export default Classe;
