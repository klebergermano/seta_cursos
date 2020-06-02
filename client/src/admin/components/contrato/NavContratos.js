import React, { Component } from "react";
import { Link } from "react-router-dom";
import Icon from "../common/icons";
import config from "../../../config";
class NavContratos extends Component {
  state = {};
  render() {
    return (
      <nav class="nav_cadastros" id="nav_contrawtos">
        <ul>
          <li>
            <Link to={config.BASE_URL_ADMIN + "/contratos"}>
              <Icon name="eye" className="icon icon_eye" />
              Ver Contratos
            </Link>
          </li>
          <li>
            <Link to={config.BASE_URL_ADMIN + "/cadastrar_contrato"}>
              <Icon name="file-text2" className="icon icon_user" />
              Cadastrar Contrato
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavContratos;
