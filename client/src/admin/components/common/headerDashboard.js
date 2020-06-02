import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import config from "../../../config";
const HeaderDashboard = () => {
  const context = useContext(AuthContext);
  const userStore = context;

  const doLogout = () => {
    fetch("/doLogout", { method: "post" })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          console.log(res);
          userStore.loading.set(false);
          userStore.username.set("");
          userStore.isLoggedIn.set(false);
        }
      });
  };
  return (
    <header id="header_dash">
      <div id="bg_logo">
        <Link to={config.BASE_URL_ADMIN}>
          <img src={require("../../../admin/assets/img/logo.png")} />
        </Link>
      </div>
      <nav id="nav_header">
        <ul>
          <li>
            <a>
              Logado: <span className="username">{userStore.username.get}</span>
            </a>
          </li>

          <li>
            <button onClick={doLogout}>Sair</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderDashboard;
