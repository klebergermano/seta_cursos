import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Fulano",
      password: "123",
      privilege: "student"
    };
  }

  handleUserChange = event => {
    this.setState({ username: event.target.value });
  };
  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };
  handlePrivilegeChange = event => {
    this.setState({ privilege: event.target.value });
  };

  createUser = e => {
    const data = this.state;
    fetch("/form_create_user", {
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
      <div className="pages" id="bg_create_user">
        <h1>Adicionar Usuário</h1>
        <form id="form_create_user">
          <div>
            <label>Usuário: </label>
            <input
              onChange={this.handleUserChange}
              type="text"
              value={this.state.username}
            />
          </div>
          <div>
            <label>Senha: </label>
            <input
              onChange={this.handlePasswordChange}
              type="password"
              value={this.state.password}
            />
          </div>
          <div>
            <label>Privilégio: </label>
            <select
              onChange={this.handlePrivilegeChange}
              value={this.state.value}
            >
              <option value="admin">Admin</option>
              <option value="student">Aluno</option>
            </select>
          </div>
          <button id="btn_login" onClick={this.createUser}>
            Salvar
          </button>
        </form>
        <div id="bg_link_goback">
          <Link to="/">Voltar para o site</Link>
        </div>
      </div>
    );
  }
}

export default CreateUser;
