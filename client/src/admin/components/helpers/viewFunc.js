import React, { Component } from "react";
export function telefoneView(tel) {
  let telefone = tel.trim();
  if (
    telefone !== null &&
    telefone !== "undefined" &&
    telefone !== "null" &&
    telefone !== ""
  ) {
    return telefone;
  } else {
    return "N.D";
  }
}
export function celularView(cel) {
  let celular = cel.trim();
  if (
    celular !== null &&
    celular !== "undefined" &&
    celular !== "null" &&
    celular !== ""
  ) {
    return celular;
  } else {
    return "N.D";
  }
}
export function celularAppView(cel) {
  let celular = [];
  let cel_array = cel.split(" ");

  if (cel_array[0] === "whatsapp") {
    celular[0] = <span className="img_whatsapp_celular"></span>;
  } else {
    celular[0] = "";
  }
  if (cel_array[1] === "messenger") {
    celular[1] = <span className="img_messenger_celular"></span>;
  } else {
    celular[1] = "";
  }
  return celular;
}
