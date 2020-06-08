import React, { Component } from "react";

import * as helpers from "../helpers/index";
import NavUsers from "./NavUsers";
import FormUser from "./FormUser";
import ReactDOM from "react-dom";
class UserEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      privilege: "",
    };
  }

  componentDidMount() {
    //Pega a ID na ultima posição da URL e envia para o backend
    let url = window.location.href;
    let url_array = url.split("/");
    let i = url_array.length - 1;
    let id = url_array[i];

    fetch(`/user_edit_view/${id}`)
      .then((res) => res.json())
      .then((user) => {
        this.setState({
          username: user.username,
          privilege: user.privilege,
          password: user.password,
          msg_send: "",
        });
      })
      .then(() => {
        this.setState({ id: id });
      })
      .then(() => {
        ReactDOM.render(
          <FormUser
            title="Atualizar Usuário"
            state={this.state}
            submit={this.editUser}
          />,
          document.querySelector("#span_form")
        );
      });
  }

  editUser = (value) => {
    const data = this.value;
    fetch(`/user_edit`, {
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
  };

  render() {
    return (
      <div id="page_form">
        <NavUsers />
        <span id="span_form"></span>
      </div>
    );
  }
}

export default UserEdit;
