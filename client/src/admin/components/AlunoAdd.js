import React, { Component } from "react";
import InputMask from "react-input-mask";
//import maskJs from "../assets/js/vanilla-masker";

class AlunoAdd extends Component {
  state = {
    msg_send: "",
    nome: "",
    genero: "",
    endereco: "",
    bairro: "",
    email: "",

    data_nasc: "",
    created: ""
  };

  componentDidMount() {}

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  showStatus = () => {
    console.log(this.state);
  };

  cadastrar = e => {
    if (this.state.nome === "" || this.state.nome === " ") {
    } else {
      const data = this.state;
      fetch("/cadastrar_Aluno", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(res => res.text())
        .then(text => {
          this.setState({ msg_send: "Cadastrado com Sucesso!" });
          document.querySelector(".bg_inputs").style.display = "none";
          document.querySelector(".cadastro_sucesso").style.display = "block";
        });
    }

    e.preventDefault();
  };
  render() {
    return (
      <div>
        <form className="form_add" id="form_add_Aluno">
          <div className="cadastro_sucesso">
            <h3>Cadastrado com Sucesso</h3>
          </div>
          <div className="bg_inputs">
            <h1>Cadastro de Aluno</h1>

            <div className="add_nome">
              <label>Nome:</label>

              <input type="text" name="nome" onChange={this.handleChange} />
            </div>
            <div className="add_genero">
              <label>Genêro:</label>
              <select name="genero" onChange={this.handleChange}>
                <option disabled selected></option>
                <option>M</option>
                <option>F</option>
                <option>Outro</option>
              </select>
            </div>
            <div className="add_endereco">
              <label>Endereço:</label>
              <input type="text" name="endereco" onChange={this.handleChange} />
            </div>
            <div className="add_bairro">
              <label>Bairro:</label>
              <input type="text" name="bairro" onChange={this.handleChange} />
            </div>
            <div className="add_email">
              <label>Email:</label>
              <input type="text" name="email" onChange={this.handleChange} />
            </div>

            <div className="add_data_nasc">
              <label>Nasc.:</label>
              <input
                type="date"
                name="data_nasc"
                onChange={this.handleChange}
              />
            </div>
            <div className="add_created">
              <label>Cadastro</label>
              <input type="date" name="created" onChange={this.handleChange} />
            </div>
            <button onClick={this.cadastrar}> Cadastrar Aluno</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AlunoAdd;
