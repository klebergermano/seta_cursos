import React, { Component } from "react";
import NavUsers from "./NavUsers";
import FormUser from "./FormUser";
class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      privilege: "",
    };
  }
  createUser = (values) => {
    const data = values;
    fetch("/user_add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.text())
      .then((text) => {
        //this.setState({ msg_send: text });
      });
  };

  render() {
    return (
      <div id="page_user_form" className="page_form">
        <NavUsers />

        <FormUser
          title="Adicionar Usuário"
          state={this.state}
          submit={this.createUser}
        />
      </div>
    );
  }
}

export default CreateUser;
