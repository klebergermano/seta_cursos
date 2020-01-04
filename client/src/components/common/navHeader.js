import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavHeader extends Component {
  state = {};
  render() {
    return (
      <nav id="nav_header">
        <ul>
          <li>
            <Link to="./">Início</Link>
          </li>
          <li>
            <Link to="./services">Serviços</Link>
          </li>
          <li>
            <Link to="./about">Sobre</Link>
          </li>
          <li>
            <Link to="./contact">Contato</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavHeader;
