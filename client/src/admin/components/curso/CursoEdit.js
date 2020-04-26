import React, { Component } from "react";

import { dateFormatDB } from "../helpers/helpers";

class CursoEdit extends Component {
  state = {
    cursos: [],
    curso: "",
    duracao: "",
    obs: "",
    valor: "",
    created: "",
    msg_send: "",
  };

  componentDidMount() {
    let url = window.location.href;
    let url_array = url.split("/");
    let i = url_array.length - 1;
    let id = url_array[i];

    fetch(`/profile/curso_edit/${id}`)
      .then((res) => res.json())
      .then((curso) =>
        this.setState({
          curso: curso.nome,
          duracao: curso.duracao,
          obs: curso.obs,
          valor: curso.valor,

          created: curso.created,
          msg_send: "",
        })
      )
      .then(() => {
        let data_created = dateFormatDB(this.state.created);
        this.setState({ created: data_created });

        this.setState({ id: id });
      });
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  showStatus = () => {
    console.log(this.state);
  };

  atualizarCadastro = (e) => {
    if (this.state.curso === "" || this.state.curso === " ") {
    } else {
      const data = this.state;

      fetch("/profile/curso_update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => {
          this.setState({ msg_send: res.msg_send });
          console.log("Text: " + res.msg_send);
          document.querySelector(".cadastro_sucesso").style.display = "block";
        })
        .then((res) => {});
    }

    e.preventDefault();
  };

  render() {
    return (
      <div>
        <button onClick={this.showStatus}>Show Status</button>
        <div id="teste"></div>
        <form className="form_add form_curso" id="form_add_curso">
          <div className="cadastro_sucesso">
            <h3>{this.state.msg_send}</h3>
          </div>
          <div className="bg_inputs_curso">
            <h1>Cadastro de Curso</h1>

            <div className="add_curso">
              <label>Nome:</label>

              <input
                type="text"
                name="curso"
                onChange={this.handleChange}
                value={this.state.curso}
              />
            </div>

            <div className="add_duracao">
              <label>Duração Meses:</label>

              <input
                type="number"
                name="duracao"
                onChange={this.handleChange}
                value={this.state.duracao}
              />
            </div>
            <div className="add_obs">
              <label>Obs.:</label>

              <input
                type="text"
                name="obs"
                onChange={this.handleChange}
                value={this.state.obs}
              />
            </div>

            <div className="add_valor">
              <label>Valor</label>
              <input
                type="number"
                name="valor"
                onChange={this.handleChange}
                value={this.state.valor}
              />
            </div>

            <div className="add_created">
              <label>Cadastro</label>
              <input
                type="date"
                name="created"
                onChange={this.handleChange}
                value={this.state.created}
              />
            </div>

            <button className="btn_cadastrar" onClick={this.atualizarCadastro}>
              {" "}
              Atualizar Cadastro
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CursoEdit;
