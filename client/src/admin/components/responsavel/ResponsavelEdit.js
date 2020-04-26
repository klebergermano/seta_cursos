import React, { Component } from "react";
import InputMask from "react-input-mask";

import { dateFormatDB } from "../helpers/helpers";

import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

class ResponsavelEdit extends Component {
  state = {
    telefones: [],
    celulares: {},
    nome: "",
    genero: "",
    endereco: "",
    bairro: "",
    email: "",
    rg: "",
    cpf: "",
    data_nasc: "",
    created: "",
    msg_send: "",
  };

  componentDidMount() {
    let url = window.location.href;
    let url_array = url.split("/");
    let i = url_array.length - 1;
    let id = url_array[i];

    fetch(`/profile/responsavel_edit/${id}`)
      .then((res) => res.json())
      .then((responsavel) =>
        this.setState({
          telefones: responsavel.telefones,
          celulares: responsavel.celulares,
          nome: responsavel.nome,
          genero: responsavel.genero,
          endereco: responsavel.endereco,
          bairro: responsavel.bairro,
          email: responsavel.email,
          rg: responsavel.rg,
          cpf: responsavel.cpf,
          data_nasc: responsavel.data_nasc,
          obs: responsavel.obs,
          temp_celular: responsavel.temp_celular,
          created: responsavel.created,
          msg_send: "",
        })
      )
      .then(() => {
        this.renderStateCel();
        this.renderStateTel();

        let data_created = dateFormatDB(this.state.created);
        let data_nasc = dateFormatDB(this.state.data_nasc);
        this.setState({ created: data_created });
        this.setState({ data_nasc: data_nasc });

        this.setState({ id: id });
        console.log(this.state);
      });
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  showStatus = () => {
    console.log(this.state);
  };

  delCel = (e) => {
    e.preventDefault();
    let num = document.querySelectorAll(".input_cel").length;
    let celular = "celular_" + num;
    let num_array = parseInt(num - 1);

    if (
      typeof this.state.celulares[num_array] != "undefined" &&
      typeof this.state.celulares[num_array].id != "undefined" &&
      typeof this.state.celulares[num_array].id_resp != "undefined"
    ) {
      let id = this.state.celulares[num_array].id;
      let id_resp = this.state.celulares[num_array].id_resp;

      this.setState((prevState) => ({
        celulares: {
          ...prevState.celulares,
          [num_array]: { id: id, id_resp: id_resp, numero: "delete" },
        },
      }));
    } else {
      this.setState((prevState) => ({
        celulares: {
          ...prevState.celulares,
          [num_array]: {},
        },
      }));
    }

    if (num > 0) {
      let target = document.getElementById("block_cel_" + num);
      ReactDOM.unmountComponentAtNode(target);

      num--;

      if (num < 1) {
        let btn_del = document.querySelector(".btn_delCel_input");
        btn_del.style.background = "#ccc";
      }
    }
  };
  handleSelectClick = (e) => {
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
    this.setState((prevState) => ({
      celulares: {
        ...prevState.celulares,
        [num_array]: { ...prevState.celulares[num_array], [campo]: value },
      },
    }));
  };

  renderStateTel = () => {
    let num = this.state.telefones.length;
    for (let i = 0; i < num; i++) {
      let j = i + 1;
      let target = document.querySelector("#block_tel_" + j);

      ReactDOM.render(
        <div className="div">
          <span>Tel {j}: </span>
          <InputMask
            className="input_tel"
            id={"telefone_" + j}
            {...this.props}
            //mask="9999-9999"
            maskChar="0"
            name="telefone"
            onChange={this.handleChangeTel}
          />
        </div>,
        target,
        () => {
          let value = this.state.telefones[i].telefone;
          let element = document.querySelector("#telefone_" + j);

          element.value = value;
        }
      );

      if (num > 0) {
        let btn_del = document.querySelector(".btn_delTel_input");
        btn_del.style.background = "#e22";
      }
    }
  };
  renderStateCel = () => {
    let num = this.state.celulares.length;
    for (let i = 0; i < num; i++) {
      let j = i + 1;
      let target = document.querySelector("#block_cel_" + j);

      ReactDOM.render(
        <div className="div">
          <span>Cel {j}:</span>
          <InputMask
            {...this.props}
            className="ddd_input"
            id={"ddd_" + j}
            // mask="99"
            maskChar="1"
            name="ddd"
            onChange={this.handleChangeCel}
            placeholder="DDD"
            //value={this.state.celulares[i].ddd}
          />
          <InputMask
            {...this.props}
            className="input_cel"
            id={"numero_" + j}
            // mask="99999-9999"
            name="celular"
            maskChar="0"
            onChange={this.handleChangeCel}
            //value={this.state.celulares[i].numero}
          />
          <div className="bg_checkbox_cel">
            <div></div>
            <label
              id={"whatsapp_" + j}
              className="img_off_whatsapp"
              onClick={this.handleSelectClick}
            ></label>
            <label
              id={"messenger_" + j}
              className="img_off_messenger"
              onClick={this.handleSelectClick}
            ></label>
          </div>
        </div>,
        target,
        () => {
          let ddd = this.state.celulares[i].ddd;
          let ddd_element = document.querySelector("#ddd_" + j);
          ddd_element.value = ddd;
          let numero = this.state.celulares[i].numero;
          let numero_element = document.querySelector("#numero_" + j);
          numero_element.value = numero;
        }
      );

      if (num > 0) {
        let btn_del = document.querySelector(".btn_delCel_input");
        btn_del.style.background = "#e22";
      }
      //--------------------------------------------------------------------
      if (
        typeof this.state.celulares[i].app != "undefined" &&
        this.state.celulares[i].app != ""
      ) {
        let app = this.state.celulares[i].app;
        let app_array = app.split(" ");

        for (let k = 0; k < app_array.length; k++) {
          let campo = app_array[k];
          let element = document.querySelector("#" + campo + "_" + [j]);
          element.className = "img_on_" + [campo];
          this.setState((prevState) => ({
            celulares: {
              ...prevState.celulares,
              [i]: { ...prevState.celulares[i], [campo]: campo },
            },
          }));
        }
      }
      //-------------------------------------------------------
    }
  };
  addCel = (e) => {
    e.preventDefault();
    let num = document.querySelectorAll(".input_cel").length + 1;
    if (num >= 4) {
      num = 4;
    }

    let target = document.querySelector("#block_cel_" + num);
    ReactDOM.render(
      <div className="div">
        <span>Cel {num}:</span>
        <InputMask
          {...this.props}
          className="ddd_input"
          id={"ddd_" + num}
          mask="99"
          maskChar="1"
          name="ddd"
          onChange={this.handleChangeCel}
          placeholder="DDD"
        />
        <InputMask
          {...this.props}
          className="input_cel"
          id={"numero_" + num}
          mask="99999-9999"
          maskChar="0"
          name="celular"
          onChange={this.handleChangeCel}
          placeholder="00000-0000"
        />
        <div className="bg_checkbox_cel">
          <div></div>
          <label
            id={"whatsapp_" + num}
            className="img_off_whatsapp"
            onClick={this.handleSelectClick}
          ></label>
          <label
            id={"messenger_" + num}
            className="img_off_messenger"
            onClick={this.handleSelectClick}
          ></label>
        </div>
      </div>,
      target
    );

    if (num > 0) {
      let btn_del = document.querySelector(".btn_delCel_input");
      btn_del.style.background = "#e22";
    }
  };

  handleChangeCel = (e) => {
    let id = e.target.id;
    let split = id.split("_");
    let num = split[1];
    let campo = split[0];

    // let celular = "celular_" + num;
    let value = e.target.value;
    let num_array = parseInt(num - 1);

    e.preventDefault();

    this.setState((prevState) => ({
      celulares: {
        ...prevState.celulares,
        [num_array]: { ...prevState.celulares[num_array], [campo]: value },
      },
    }));
  };
  //------------------------------------Tel----------------------------
  handleChangeTel = (e) => {
    let id = e.target.id;
    let split = id.split("_");
    let num = split[1];
    let num_array = parseInt(num - 1);
    let campo = split[0];

    let tel = e.target.id;
    let value = e.target.value;
    e.preventDefault();

    this.setState((prevState) => ({
      telefones: {
        ...prevState.telefones,
        [num_array]: { ...prevState.telefones[num_array], [campo]: value },
      },
    }));
  };

  addTel = (e) => {
    e.preventDefault();
    let num = document.querySelectorAll(".input_tel").length + 1;
    if (num >= 4) {
      num = 4;
    }

    let target = document.querySelector("#block_tel_" + num);
    ReactDOM.render(
      <div className="div">
        <span>Tel {num}: </span>
        <InputMask
          className="input_tel"
          id={"telefone_" + num}
          {...this.props}
          mask="9999-9999"
          maskChar="0"
          name="rg"
          onChange={this.handleChangeTel}
          placeholder="0000.0000"
        />
      </div>,
      target
    );

    if (num > 0) {
      let btn_del = document.querySelector(".btn_delTel_input");
      btn_del.style.background = "#e22";
    }
  };

  delTel = (e) => {
    e.preventDefault();
    let num = document.querySelectorAll(".input_tel").length;
    let num_array = parseInt(num - 1);

    if (num > 0) {
      let target = document.getElementById("block_tel_" + num);
      ReactDOM.unmountComponentAtNode(target);

      if (
        typeof this.state.telefones[num_array] != "undefined" &&
        typeof this.state.telefones[num_array].id != "undefined" &&
        typeof this.state.telefones[num_array].id_resp != "undefined"
      ) {
        let id = this.state.telefones[num_array].id;
        let id_resp = this.state.telefones[num_array].id_resp;
        this.setState((prevState) => ({
          telefones: {
            ...prevState.telefones,
            [num_array]: { id: id, id_resp: id_resp, telefone: "delete" },
          },
        }));
      } else {
        this.setState((prevState) => ({
          telefones: {
            // object that we want to update
            ...prevState.telefones, // keep all other key-value pairs
            [num_array]: {},
          },
        }));
      }

      num--;

      if (num < 1) {
        let btn_del = document.querySelector(".btn_delTel_input");
        btn_del.style.background = "#ccc";
      }
    }
  };

  atualizarCadastro = (e) => {
    if (this.state.nome === "" || this.state.nome === " ") {
    } else {
      const data = this.state;

      fetch("/profile/responsavel_update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => {
          this.setState({ msg_send: res.msg_send });
          console.log("Text: " + res.msg_send);
          document.querySelector(".bg_inputs").style.display = "none";
          document.querySelector(".cadastro_sucesso").style.display = "block";
        })
        .then((res) => {});
    }

    e.preventDefault();
  };
  render() {
    return (
      <div>
        <button onClick={this.showStatus}>Show Status</button>
        <div id="teste"></div>
        <form className="form_add" id="form_add_responsavel">
          <div className="cadastro_sucesso">
            <h3>{this.state.msg_send}</h3>
          </div>
          <div className="bg_inputs">
            <h1>Cadastro de Responsável</h1>

            <div className="add_nome">
              <label>Nome:</label>

              <input
                type="text"
                name="nome"
                onChange={this.handleChange}
                value={this.state.nome}
              />
            </div>
            <div className="add_genero">
              <label>Genêro:</label>
              <select
                name="genero"
                onChange={this.handleChange}
                value={this.state.genero}
              >
                <option disabled></option>

                <option value="M">M</option>
                <option value="F">F</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            <div className="add_telefone">
              <label>Telefone:</label>
              <div className="bg_block_tel">
                <div className="block_tel" id="block_tel_1"></div>
                <div className="block_tel" id="block_tel_2"></div>
                <div className="block_tel" id="block_tel_3"></div>
                <div className="block_tel" id="block_tel_4"></div>
              </div>
              <div className="bg_btn_inputs">
                <button
                  onClick={this.addTel}
                  className="btn_add_input btn_addTel_input "
                >
                  +
                </button>
                <button
                  onClick={this.delTel}
                  className="btn_del_input btn_delTel_input"
                >
                  -
                </button>
              </div>
            </div>

            <div className="add_celular">
              <label>Celular:</label>

              <div className="bg_block_cel">
                <div className="block_cel" id="block_cel_1"></div>
                <div className="block_cel" id="block_cel_2"></div>
                <div className="block_cel" id="block_cel_3"></div>
                <div className="block_cel" id="block_cel_4"></div>
              </div>
              <div className="bg_btn_inputs">
                <button
                  onClick={this.addCel}
                  className="btn_add_input btn_addCel_input"
                >
                  +
                </button>
                <button
                  onClick={this.delCel}
                  className="btn_del_input btn_delCel_input"
                >
                  -
                </button>
              </div>
            </div>
            <div className="add_endereco">
              <label>Endereço:</label>
              <input
                type="text"
                name="endereco"
                onChange={this.handleChange}
                value={this.state.endereco}
              />
            </div>
            <div className="add_bairro">
              <label>Bairro:</label>
              <input
                type="text"
                name="bairro"
                onChange={this.handleChange}
                value={this.state.bairro}
              />
            </div>
            <div className="add_email">
              <label>Email:</label>
              <input
                type="text"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
              />
            </div>
            <div className="add_rg">
              <label>RG:</label>
              <InputMask
                {...this.props}
                mask="99.999.999-*"
                maskChar="0"
                name="rg"
                onChange={this.handleChange}
                placeholder="00.000.000-0"
                value={this.state.rg}
              />
            </div>
            <div className="add_cpf">
              <label>CPF:</label>
              <InputMask
                {...this.props}
                mask="999.999.999-99"
                maskChar="0"
                name="cpf"
                onChange={this.handleChange}
                placeholder="000.000.000-00"
                value={this.state.cpf}
              />
            </div>
            <div className="add_data_nasc">
              <label>Nasc.:</label>
              <input
                type="date"
                name="data_nasc"
                onChange={this.handleChange}
                value={this.state.data_nasc}
              />
            </div>
            <div className="add_created">
              <label>Cadastro</label>
              <input
                type="date"
                name="created"
                onChange={this.handleChange}
                value={this.state.created}
              />
            </div>
            <div className="add_obs">
              <label>Obs.:</label>
              <input
                type="text"
                name="obs"
                onChange={this.handleChange}
                value={this.state.obs}
              />
            </div>
            <button className="btn_cadastrar" onClick={this.atualizarCadastro}>
              {" "}
              Atualizar Responsável
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ResponsavelEdit;
