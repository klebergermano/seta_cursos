import React, { useState, useEffect, useContext } from "react";
import Dashboard from "./Dashboard";
import { AuthContext } from "../../context/AuthContext";
import LoginForm from "./LoginForm";
import "../../admin/assets/css/style.css";
import config from "../../config";

const Admin = () => {
  const context = useContext(AuthContext);
  const userStore = context;
  console.log(config);
  useEffect(() => {
    (async () => {
      fetch(`${config.API_URL}/isLoggedIn`, { method: "post" })
        .then((res) => res.json())
        .then((res) => {
          if (res && res.success) {
            userStore.loading.set(false);
            userStore.username.set(res.username);
            userStore.isLoggedIn.set(true);
          } else {
            userStore.isLoggedIn.set(false);
            userStore.loading.set(false);
          }
        });
    })();
  });

  if (userStore.loading.get) {
    return <div>Is Loading ...</div>;
  } else {
    if (userStore.isLoggedIn.get) {
      return <Dashboard />;
    } else {
      return (
        <div>
          <LoginForm />
        </div>
      );
    }
  }
};

export default Admin;
