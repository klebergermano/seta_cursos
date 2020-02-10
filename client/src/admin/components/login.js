import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Fulano",
      password: "123"
    };
  }

  handleUserChange = event => {
    this.setState({ username: event.target.value });
  };
  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  logar = e => {
    const data = this.state;
    fetch("/form_login", {
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
      <div className="pages" id="bg_login">
        <h1>Login</h1>
        <form id="form_login">
          <div>
            <label>Nome: </label>
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
          <button id="btn_login" onClick={this.logar}>
            Logar
          </button>
        </form>
        <div id="bg_link_goback">
          <Link to="/">Voltar para o site</Link>
        </div>
      </div>
    );
  }
}

export default Login;
