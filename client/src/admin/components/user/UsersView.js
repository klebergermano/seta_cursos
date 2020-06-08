import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import NavUsers from "./NavUsers";
import config from "../../../config";
class UsersView extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("/users_view")
      .then((res) => res.json())
      .then((users) => this.setState({ users }))
      .then(() => {
        console.log(this.state);
      });
  }

  render() {
    return (
      <div className="page_dashboard">
        <NavUsers />
        <h1>Usuários</h1>
        <table className="table_general">
          <thead>
            <tr>
              <th>id</th>
              <th>Nome</th>
              <th>Cadastrado</th>
              <th></th>
            </tr>
          </thead>

          <tbody cellSpacing="0">
            {this.state.users.reverse().map((users) => (
              <tr key={users.id}>
                <td className="td_id">{users.id}</td>
                <td>{users.username}</td>

                <td className="td_cadastrado">{users.created}</td>

                <td className="td_control">
                  <Link
                    className="btn_edit"
                    to={config.BASE_URL_ADMIN + "/user_edit/" + users.id}
                  >
                    Editar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UsersView;
