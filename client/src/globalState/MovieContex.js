import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    { id: 1, name: "Harry Potter" },
    { name: "GOT", id: 2 },
    { name: "Inception", id: 3 }
  ]);

  return (
    <div>
      <MovieContext.Provider value={[movies, setMovies]}>
        {/*<MovieList />*/}
        {props.children}
      </MovieContext.Provider>
    </div>
  );
};
