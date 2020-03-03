import React, { useState, createContext } from "react";

export const LoginContext = createContext();

export const LoginProvider = props => {
  const [user, setUser] = useState([
    {
      session_id: "s%3A0vhHmcqYjnn2nyqeFLXhXagB6YEEQyn9",
      name: "Fulano ",
      privilege: "admin"
    }
  ]);

  return (
    <div>
      <LoginContext.Provider value={[user, setUser]}>
        {props.children}
      </LoginContext.Provider>
    </div>
  );
};
