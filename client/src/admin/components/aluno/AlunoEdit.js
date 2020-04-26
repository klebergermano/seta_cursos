import React, { Component } from "react";
import InputMask from "react-input-mask";

import { dateFormatDB, dateFormatReverse } from "../helpers/helpers";

import ReactDOM from "react-dom";

class AlunoEdit extends Component {
  state = {
    responsaveis: [],
    telefones: [],
    celulares: {},

    nome: "",
    id_resp: "",
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
    fetch("/api/resp_aluno")
      .then((res) => res.json())
      .then((responsaveis) => this.setState({ responsaveis }))
      .then(() => {
        console.log(this.state);
      });

    let url = window.location.href;
    let url_array = url.split("/");
    let i = url_array.length - 1;
    let id = url_array[i];

    fetch(`/profile/aluno_edit/${id}`)
      .then((res) => res.json())
      .then((aluno) => {
        if (aluno.vinculado_resp === "sim") {
          this.setState({ antigo_id_resp: aluno.id_resp });
        }
        this.setState({
          telefones: aluno.telefones,
          celulares: aluno.celulares,
          vinculado_resp: aluno.vinculado_resp,
          nome: aluno.nome,
          parentesco: aluno.parentesco,
          responsavel: aluno.responsavel,
          id_resp: aluno.id_resp,
          genero: aluno.genero,
          endereco: aluno.endereco,
          bairro: aluno.bairro,
          email: aluno.email,
          obs: aluno.obs,

          data_nasc: aluno.data_nasc,
          temp_celular: aluno.temp_celular,
          created: aluno.created,
          msg_send: "",
        });
      })

      .then(() => {
        this.renderStateCel();
        this.renderStateTel();

        let data_created = dateFormatDB(this.state.created);
        let data_nasc = dateFormatDB(this.state.data_nasc);
        this.setState({ created: data_created });
        this.setState({ data_nasc: data_nasc });

        this.setState({ id: id });
        this.set_pre_state_vinculo_aluno_responsavel();
        console.log(this.state);

        let btn_vincular = document.querySelector("#btn_vincular");
        btn_vincular.disabled = "true";
        btn_vincular.display = "none";
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
      typeof this.state.celulares[num_array].id_aluno != "undefined"
    ) {
      let id = this.state.celulares[num_array].id;
      let id_aluno = this.state.celulares[num_array].id_aluno;

      this.setState((prevState) => ({
        celulares: {
          ...prevState.celulares,
          [num_array]: { id: id, id_aluno: id_aluno, numero: "delete" },
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
        typeof this.state.telefones[num_array].id_aluno != "undefined"
      ) {
        let id = this.state.telefones[num_array].id;
        let id_aluno = this.state.telefones[num_array].id_aluno;
        this.setState((prevState) => ({
          telefones: {
            ...prevState.telefones,
            [num_array]: { id: id, id_aluno: id_aluno, telefone: "delete" },
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

      fetch("/profile/aluno_update", {
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

  handleSelectRespChange = (e) => {
    this.setState({ id_resp: e.target.value }, () => {
      for (let i in this.state.responsaveis) {
        if (this.state.id_resp == this.state.responsaveis[i].id) {
          let responsavel = this.state.responsaveis[i].nome;
          this.setState({ responsavel: responsavel });
        }
      }
    });

    let btn_vincular = document.querySelector("#btn_vincular");

    if (this.state.vinculado_resp == "sim") {
      this.setState({ vinculado_resp: "" });
      let btn_vincular = document.querySelector(".btn_vincular_on");
      btn_vincular.className = "btn_vincular_off";
      btn_vincular.innerHTML = "Vincular como Aluno";

      this.clear_vinculo_aluno_responsavel();
      btn_vincular.removeAttribute("disabled");
    }

    var optionData = e.target.options[e.target.selectedIndex].getAttribute(
      "data"
    );

    if (optionData === "vinculado_aluno") {
      console.log(optionData);
      btn_vincular.disabled = "true";
    } else {
      btn_vincular.removeAttribute("disabled");
    }
  };

  set_pre_state_vinculo_aluno_responsavel = () => {
    if (this.state.vinculado_resp == "sim") {
      let btn = document.querySelector(".btn_vincular_off");

      let block_fields = document.querySelector(".block_fields");
      block_fields.style.display = "block";

      btn.className = "btn_vincular_on";
      btn.innerHTML = "Vinculado como Aluno  	&#10004;";
    }
  };

  set_vinculo_aluno_responsavel = () => {
    let id_resp = this.state.id_resp;

    for (let props in this.state.responsaveis) {
      if (id_resp == this.state.responsaveis[props].id) {
        let responsavel = this.state.responsaveis[props];

        this.setState({
          vinculado_resp: "sim",
          nome: responsavel.nome,
          parentesco: "N.D",

          /*
          telefones: responsavel.telefones,
          celulares: responsavel.celulares,
          */
          email: responsavel.email,
          genero: responsavel.genero,
          endereco: responsavel.endereco,
          bairro: responsavel.bairro,
          data_nasc: dateFormatDB(responsavel.data_nasc),
          create: dateFormatReverse(responsavel.created),
        });
      }
    }
  };
  clear_vinculo_aluno_responsavel = () => {
    this.setState({
      vinculado_resp: "",
      nome: "",
      genero: "",
      endereco: "",
      bairro: "",
      data_nasc: "",
      created: "",
    });
  };
  vincular_responsavel = (e) => {
    e.preventDefault();

    //---------------------------------------------------------------
    let btn = e.target;
    let block_fields = document.querySelector(".block_fields");
    if (btn.className == "btn_vincular_off") {
      btn.className = "btn_vincular_on";
      btn.innerHTML = "Vinculado como Aluno  	&#10004;";

      block_fields.style.display = "block";
      this.set_vinculo_aluno_responsavel();
    } else {
      btn.className = "btn_vincular_off";
      btn.innerHTML = "Vincular como Aluno";
      block_fields.style.display = "none";
      this.clear_vinculo_aluno_responsavel();
    }
    //---------------------------------------------------------------
  };

  msgRespAlunoOption = (e) => {
    if (e == "sim") {
      return " --- (vinculado)";
    }
  };
  classRespAlunoOption = (e) => {
    if (e == "sim") {
      return "vinculado_aluno";
    } else {
      return "nao_vinculado_aluno";
    }
  };
  render() {
    return (
      <div>
        <button onClick={this.showStatus}>Show Status</button>
        <div id="teste"></div>
        <form className="form_add" id="form_add_aluno">
          <div className="cadastro_sucesso">
            <h3>{this.state.msg_send}</h3>
          </div>
          <div className="bg_inputs">
            <h1>Editar Aluno</h1>

            <div id="bg_responsavel_aluno">
              <div className="add_nome">
                <label>Responsável:</label>

                <select
                  onChange={this.handleSelectRespChange}
                  value={this.state.id_resp}
                >
                  <option value="" selected disabled></option>
                  {this.state.responsaveis.reverse().map((responsaveis) => (
                    <option
                      data={this.classRespAlunoOption(
                        responsaveis.vinculado_aluno
                      )}
                      className={this.classRespAlunoOption(
                        responsaveis.vinculado_aluno
                      )}
                      key={responsaveis.id}
                      value={responsaveis.id}
                    >
                      {responsaveis.id} - {responsaveis.nome}
                      {this.msgRespAlunoOption(responsaveis.vinculado_aluno)}
                    </option>
                  ))}
                </select>
                <button
                  id="btn_vincular"
                  onClick={this.vincular_responsavel}
                  className="btn_vincular_off"
                >
                  Vincular como Aluno
                </button>
              </div>
            </div>
            {/* bg responsavel*/}
            <div className="block_fields"></div>

            <div className="add_parentesco">
              <label>Parentesco:</label>

              <select
                name="parentesco"
                onChange={this.handleChange}
                value={this.state.parentesco}
              >
                <option value="" selected disabled></option>
                <option value="filho(a)">Filho / Filha</option>
                <option value="irmão(a)">Irmão / Irmã</option>
                <option value="sobrinho(a)">Sobrinho / Sobrinha</option>
                <option value="afiliado(a)">Afilhado / Afilhada</option>
                <option value="amigo(a)">Enteado / Enteada</option>

                <option value="neto(a)">Neto / Neta</option>

                <option value="amigo(a)">Amigo / Amiga</option>
                <option value="outro">Outro</option>
                <option value="N.D">N.D</option>
              </select>
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
            <div className="add_nome">
              <label>Nome:</label>

              <input
                type="text"
                name="nome"
                onChange={this.handleChange}
                value={this.state.nome}
              />
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
            <div className="add_email">
              <label>Email:</label>
              <input
                type="text"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
              />
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
              Atualizar Aluno
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AlunoEdit;
