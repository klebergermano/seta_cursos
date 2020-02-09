import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavUser extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="bg_nav_user">
        <nav id="nav_user">
          <ul>
            <li>
              <Link to="login">Logar</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavUser;
