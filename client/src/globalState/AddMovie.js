import React, { Component, useState, useContext } from "react";
import { MovieContext } from "./MovieContex";
const [movies, setMovies] = "./MovieContex";

export const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const updateName = e => {
    setName(e.target.value);
  };
  const updatePrice = e => {
    setPrice(e.target.value);
  };

  const addMovie = e => {
    e.preventDefault();
    setMovies(prevMovies => [...prevMovies, { name: name, price: price }]);
  };
  return (
    <div>
      <h1>Add Movie</h1>
      <form>
        <input type="text" value={name} onChange={updateName} name="name" />
        <input type="text" value={price} onChange={updatePrice} name="price" />
        <button>Add Movie</button>
      </form>
    </div>
  );
};
