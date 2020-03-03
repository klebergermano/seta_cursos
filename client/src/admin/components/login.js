import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";
import Users from "./users";
import { Session_id } from "../../globalState/session_id";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Test",
      password: "123",
      authenticated: [],
      user: {
        session_id: "",
        name: "",
        privilege: ""
      }
    };
  }

  componentDidMount() {
    this.setState({ user: { session_id: true } });
  }
  handleUserChange = event => {
    this.setState({ username: event.target.value });
  };
  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  logar = e => {
    e.preventDefault();

    const data = this.state;
    fetch("/form_login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          user: {
            session_id: res.session_id,
            name: res.name,
            privilege: res.privilege
          }
        });
        this.setState({ authenticated: res.result });
      })
      .then(res => {
        console.log(this.state.user);
      });
  };

  redirect() {
    if (this.state.authenticated == true) {
      return <Redirect to="/profile" />;
    }
  }
  render() {
    return (
      <div className="pages" id="bg_login">
        <Session_id />
        <h1>Login</h1>
        {this.redirect()}
        <form id="form_login">
          <p>{this.state.authenticated}</p>

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
