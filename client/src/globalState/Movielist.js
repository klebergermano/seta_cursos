import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContex";
import Movie from "./Movie";
const MovieList = () => {
  const value = useContext(MovieContext);
  return (
    <div>
      {value}
      <h1>Movies List</h1>
      {/** 
           {movies.map(movie => (
        <Movie name={movie.name} id={movie.id} />
      ))}
      */}
    </div>
  );
};
export default MovieList;
