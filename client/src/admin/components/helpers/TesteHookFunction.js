import React, { useState, Component } from "react";
import { Bar, Line, Pie, Area } from "react-chartjs-2";

function Counter() {
  let [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <React.Fragment>
      <button onClick={handleClick}>Click Add</button>
      <h3>{count}</h3>
    </React.Fragment>
  );
}

export default Counter;
