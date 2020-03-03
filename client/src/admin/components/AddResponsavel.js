import React, { Component } from "react";
import axios from "axios";

class FormAddResponsavel extends Component {
  state = {
    nome: "",
    genero: "",
    endereco: "",
    bairro: "",
    email: "",
    rg: "",
    cpf: "",
    data_nasc: "",
    created: ""
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  showStatus = () => {
    console.log(this.state);
  };

  cadastrar = e => {
    const data = this.state;
    fetch("/cadastrar_responsavel", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.text())
      .then(text => {
        //this.setState({ msg_send: text });
      });

    e.preventDefault();
  };
  render() {
    return (
      <div>
        <button onClick={this.showStatus}>Show State</button>
        <form className="form_add" id="form_add_responsavel">
          <h1>Cadastro de Responsável</h1>

          <div>
            <label>Nome:</label>
            <input type="text" name="nome" onChange={this.handleChange} />
          </div>
          <div>
            <label>Genêro:</label>
            <input type="text" name="genero" onChange={this.handleChange} />
          </div>
          <div>
            <label>Endereço:</label>
            <input type="text" name="endereco" onChange={this.handleChange} />
          </div>
          <div>
            <label>Bairro:</label>
            <input type="text" name="bairro" onChange={this.handleChange} />
          </div>
          <div>
            <label>Email:</label>
            <input type="text" name="email" onChange={this.handleChange} />
          </div>
          <div>
            <label>RG:</label>
            <input type="text" name="rg" onChange={this.handleChange} />
          </div>
          <div>
            <label>CPF:</label>
            <input type="text" name="cpf" onChange={this.handleChange} />
          </div>
          <div>
            <label>Data Nasc.:</label>
            <input type="text" name="data_nasc" onChange={this.handleChange} />
          </div>
          <div>
            <label>Data Cadastro</label>
            <input type="text" name="created" onChange={this.handleChange} />
          </div>
          <button onClick={this.cadastrar}> Cadastrar Responsável</button>
        </form>
      </div>
    );
  }
}

export default FormAddResponsavel;
