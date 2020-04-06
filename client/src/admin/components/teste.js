import React, { Component } from "react";
import ReactDOM from "react-dom";
import InputMask from "react-input-mask";

class Teste extends Component {
  state = {
    telefone: "5555"
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };
  handleChangeTel = e => {
    let value = e.target.value;
    this.setState(prevState => ({
      teste: {
        ...prevState.telefones,
        telefone: value
      }
    }));
    e.preventDefault();
  };

  add = () => {
    console.log(this.state);
  };
  componentDidMount() {
    let num = 1;
    let target = document.querySelector("#block_tel_1");
    ReactDOM.render(
      <div className="div">
        <span>Tel 1: </span>
        <input
          type="text"
          id={"telefone_1"}
          className="input_tel"
          placeholder="0000.0000"
          onChange={this.handleChange}
          name="telefone"
        ></input>
      </div>,
      target,
      () => {
        let element = (document.querySelector("#telefone_1").value = "teste");
      }
    );
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <button onClick={this.add}>Add</button>
        <div className="bg_block_tel">
          <div className="block_tel" id="block_tel_1"></div>
          <div className="block_tel" id="block_tel_2"></div>
          <div className="block_tel" id="block_tel_3"></div>
          <div className="block_tel" id="block_tel_4"></div>
        </div>
      </div>
    );
  }
}

export default Teste;
