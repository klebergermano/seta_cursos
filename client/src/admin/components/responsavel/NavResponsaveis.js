import React, { Component } from "react";
import { Link } from "react-router-dom";
import Icon from "../common/icons";
import config from "../../../config";

class NavResponsaveis extends Component {
  state = {};
  render() {
    return (
      <nav class="nav_cadastros" id="nav_responsaveis">
        <ul>
          <li>
            <Link to={config.BASE_URL_ADMIN + "/responsaveis"}>
              <Icon name="eye" className="icon icon_eye" />
              Ver Responsáveis
            </Link>
          </li>
          <li>
            <Link to={config.BASE_URL_ADMIN + "/cadastrar_responsavel"}>
              <Icon name="add-user" className="icon icon_user" />
              Cadastrar Responsável
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavResponsaveis;
