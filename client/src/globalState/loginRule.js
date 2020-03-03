import React, { Component, useContext, useState } from "react";
import { LoginContext } from "./logingContex";
import User from "./user";

export const LoginRule = () => {
  const [user, setUser] = useContext(LoginContext);

  return (
    <div>
      <h1>Teste Login</h1>
      {user.map(user => (
        <h1>
          <User
            id={user.session_id}
            name={user.name}
            privilege={user.privilege}
          />
        </h1>
      ))}
    </div>
  );
};
