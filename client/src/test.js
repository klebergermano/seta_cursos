import React, { useContext } from "react";
import "./assets/css/style.css";
import MovieList from "./globalState/Movielist";
import Navlist from "./globalState/Nav";
import { MovieProvider } from "./globalState/MovieContex";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Nav from "./globalState/Nav";

function Test() {
  return (
    <MovieProvider>
      <div>
        <h1>Test</h1>
        <Navlist />
      </div>
    </MovieProvider>
  );
}

export default Test;
