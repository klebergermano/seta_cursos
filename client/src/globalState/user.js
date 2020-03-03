import React, { Component } from "react";
const User = ({ id, name, privilege }) => {
  return (
    <div>
      <h3>
        {id} : {name} : {privilege}
      </h3>
    </div>
  );
};

export default User;
