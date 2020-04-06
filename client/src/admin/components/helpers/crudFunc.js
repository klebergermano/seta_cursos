import React, { Component } from "react";
import InputMask from "react-input-mask";

function handleSelectClick(e) {
  let id = e.target.id;
  let split = id.split("_");
  let num = split[1];
  let num_array = parseInt(num - 1);
  let campo = split[0];
  let celular = "celular_" + num;

  let value;
  let btn = e.currentTarget;
  if (btn.className == "img_off_whatsapp") {
    btn.className = "img_on_whatsapp";
    value = "whatsapp";
  } else if (btn.className == "img_on_whatsapp") {
    btn.className = "img_off_whatsapp";
    value = "";
  }
  if (btn.className == "img_off_messenger") {
    btn.className = "img_on_messenger";
    value = "messenger";
  } else if (btn.className == "img_on_messenger") {
    btn.className = "img_off_messenger";
    value = "";
  }
  this.setState(prevState => ({
    celulares: {
      ...prevState.celulares,
      [num_array]: { ...prevState.celulares[num_array], [campo]: value }
    }
  }));
}

function handleChangeCel(e) {
  let id = e.target.id;
  let split = id.split("_");
  let num = split[1];
  let campo = split[0];

  // let celular = "celular_" + num;
  let value = e.target.value;
  let num_array = parseInt(num - 1);

  e.preventDefault();

  this.setState(prevState => ({
    celulares: {
      ...prevState.celulares,
      [num_array]: { ...prevState.celulares[num_array], [campo]: value }
    }
  }));
}
export function CelularBlock() {
  var num = 5;
  return (
    <div className="div">
      <span>Cel {num}:</span>
      <InputMask
        {...this.props}
        className="ddd_input"
        id={"ddd_" + num}
        mask="99"
        maskChar="1"
        name="ddd"
        onChange={handleChangeCel()}
        placeholder="DDD"
      />
      <InputMask
        {...this.props}
        className="input_cel"
        id={"numero_" + num}
        mask="99999-9999"
        maskChar="0"
        name="celular"
        onChange={handleChangeCel()}
        placeholder="00000-0000"
      />
      <div className="bg_checkbox_cel">
        <div></div>
        <label
          id={"whatsapp_" + num}
          className="img_off_whatsapp"
          onClick={handleSelectClick()}
        ></label>
        <label
          id={"messenger_" + num}
          className="img_off_messenger"
          onClick={handleSelectClick()}
        ></label>
      </div>
    </div>
  );
}
