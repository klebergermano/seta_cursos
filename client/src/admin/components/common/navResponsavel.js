import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavResponsavel extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/cadastrar_responsavel">Adicionar Responsável</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavResponsavel;
