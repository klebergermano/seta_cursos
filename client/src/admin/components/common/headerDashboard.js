import React, { Component } from "react";
import { Link } from "react-router-dom";

class HeaderDashboard extends Component {
  state = {};
  render() {
    return (
      <header id="header_dash">
        <div id="bg_logo">
          <Link to="/profile">
            <img src={require("../../../admin/assets/img/logo.png")} />
          </Link>
        </div>
        <nav id="nav_header">
          <ul>
            <li>
              <a>Usuário: </a>
            </li>

            <li>
              <Link to="/user">Sair</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default HeaderDashboard;
