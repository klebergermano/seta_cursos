import React, { Component } from "react";
import { Link } from "react-router-dom";
import Icon from "../common/icons";
import config from "../../../config";
class NavCarnes extends Component {
  render() {
    return (
      <nav class="nav_cadastros" id="nav_contrawtos">
        <ul>
          <li>
            <Link to={config.BASE_URL_ADMIN + "/cadastrar_carne"}>
              <Icon name="file-text2" className="icon icon_user" />
              Cadastrar Carnê
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavCarnes;
