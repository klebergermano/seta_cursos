import React, { Component } from "react";
const Movie = ({ name, id }) => {
  return (
    <div>
      <h3>
        {name} : {id}
      </h3>
    </div>
  );
};

export default Movie;
