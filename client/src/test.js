import React, { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
function Test() {
  const ctx = useContext(AuthContext);
  console.log("-------------------");
  console.log(ctx);
  console.log("--------------------");
  return <div>Teste</div>;
}

export default Test;
