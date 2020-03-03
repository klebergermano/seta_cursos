import React, { Component, useState, useContext } from "react";
import { LoginContext } from "./logingContex";

export const Session_id = () => {
  const [user, setUser] = useContext(LoginContext);

  return (
    <div>
      {user.map(use => (
        <h1>{use.session_id}</h1>
      ))}
    </div>
  );
};
