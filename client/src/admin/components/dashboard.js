import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { isAuthenticated } from "../../routes/auth";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: ""
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="dashboard_container">
        <header id="header_dash">
          <div id="bg_logo">
            <img src={require("../../admin/assets/img/logo.png")} />
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

        <div id="bg_main_nav">
          <nav id="nav_dashboard"></nav>
        </div>
        <div id="dashboard_content">
          <div id="bg_blocks"></div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
