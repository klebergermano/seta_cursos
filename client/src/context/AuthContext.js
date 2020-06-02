import React, { useState, createContext } from "react";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const userStore = {
    username: { get: username, set: setUsername },
    loading: { get: loading, set: setLoading },
    isLoggedIn: { get: isLoggedIn, set: setIsLoggedIn },
  };

  return (
    <AuthContext.Provider value={userStore}>{children}</AuthContext.Provider>
  );
};
export { AuthProvider, AuthContext };
