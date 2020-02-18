import React, { Component, useState, useContext } from "react";
import { MovieContext } from "./MovieContex";
import { AddMovie } from "./AddMovie";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <nav>
      {movies.length}
      <AddMovie />
    </nav>
  );
};

export default Nav;
