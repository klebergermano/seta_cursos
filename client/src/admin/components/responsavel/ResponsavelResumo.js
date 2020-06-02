import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import NavResponsaveis from "./NavResponsaveis";

import * as helpers from "../helpers/";
const responsavel = [{ telefones: [] }];
class ResponsavelResumo extends Component {
  state = {
    responsavel: [],
  };

  componentDidMount() {
    let url = window.location.href;
    let url_array = url.split("/");
    let i = url_array.length - 1;
    let id = url_array[i];

    fetch(`/profile/resumo/${id}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          alunos: res.alunos,
          contratos: res.contratos,
          carnes: res.carnes,
        });
      })
      .then(() => {
        this.renderAlunos();
        this.renderContratos();
        this.renderCarnes();
      });

    fetch(`/profile/responsavel_edit/${id}`)
      .then((res) => res.json())
      .then((responsavel) => {
        this.setState({ responsavel });
      })
      .then(() => {
        this.setState({ id_resp: id }, () => {
          var id_resp = this.state.id_resp;
          this.setState({ id_resp_pad: id_resp.padStart(2, "0") });
        });
        console.log(this.state);
      })
      .then(() => {
        this.viewCelular(this.state.responsavel.celulares, "#span_cel");
        this.viewTelefone(this.state.responsavel.telefones, "#span_tel");
      });

    fetch(`/profile/resumo/${id}`)
      .then((res) => res.json())
      .then((resumo) => {
        this.setState({ alunos: resumo.alunos });
      });
  }
  viewTelefone = (state, target_id) => {
    let telefones = state;
    let target2 = document.querySelector(target_id);

    let telefones_num = 0;
    if (typeof telefones !== "undefined") {
      telefones_num = telefones.length;
    }
    let viewTel = [];
    for (let i = 0; i < telefones_num; i++) {
      let j = i + 1;
      viewTel.push(
        <span className="span_tel_block"> {telefones[i].telefone}</span>
      );
    }
    if (telefones_num > 0) {
      viewTel = (
        <p id="p_tel">
          <span className="label">Telefones: </span>
          {viewTel}
        </p>
      );
    } else {
      viewTel = (
        <p id="p_tel">
          <span className="label">Telefones: </span>N.D
        </p>
      );
    }

    ReactDOM.render(viewTel, target2);
  };
  viewCelular = (state, target_id) => {
    let celulares = state;
    let target = document.querySelector(target_id);
    let celulares_num = celulares.length;
    let viewCel = [];
    let div_view_cel;
    let app;
    for (let i = 0; i < celulares_num; i++) {
      app = helpers.viewFunc.celularAppView(celulares[i].app);
      viewCel.push(
        <span className="span_cel_block">
          {" "}
          ({celulares[i].ddd}) {celulares[i].numero} {app[0]} {app[1]}{" "}
        </span>
      );
    }
    if (celulares_num > 0) {
      viewCel = (
        <p id="p_cel">
          <span className="label">Celulares:</span>
          {viewCel}
        </p>
      );
    } else {
      viewCel = (
        <p id="p_cel">
          <span className="label">Celular:</span>N.D
        </p>
      );
    }

    ReactDOM.render(viewCel, target);
  };
  showStatus = () => {
    console.log(this.state);
  };
  //-------------------------------Render Carnês---------------------
  renderCarnes = () => {
    let carnes_num = 0;
    for (let index in this.state.carnes) {
      carnes_num++;
    }
    ReactDOM.render(carnes_num, document.querySelector("#num_carnes"));
    for (let index in this.state.carnes) {
      let i = parseInt(index) + 1;

      let target = document.querySelector("#span_carne_" + i);
      ReactDOM.render(
        <div className="info_table" id={"contrato_" + i}>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Aluno</th>
                <th>Curso</th>
                <th>Parcelas</th>
                <th>Valor</th>
                <th>Vencimento</th>
                <th>Cadastrado</th>
                <th>ID Contrato</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.carnes[index].id}</td>
                <td> {this.state.carnes[index].responsavel}</td>
                <td> {this.state.carnes[index].aluno} </td>
                <td> {this.state.carnes[index].curso} </td>
                <td> {this.state.carnes[index].parcelas} </td>
                <td> {this.state.carnes[index].valor_total} </td>
                <td>
                  {helpers.dateFunc.dateFormatBR(
                    this.state.carnes[index].vencimento
                  )}
                </td>
                <td>
                  {helpers.dateFunc.dateFormatBR(
                    this.state.carnes[index].created
                  )}
                </td>
                <td> {this.state.carnes[index].id_contrato} </td>
                <td className="td_control">
                  <a
                    className="btn_resumo"
                    href={
                      "/profile/carne_resumo/" + this.state.carnes[index].id
                    }
                  >
                    Resumo
                  </a>{" "}
                  <a
                    className="btn_edit"
                    href={"/profile/carne_edit/" + this.state.carnes[index].id}
                  >
                    Editar
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>,
        target
      );
    }
  };
  //-------------------------------Render Contratos---------------------
  renderContratos = () => {
    let contratos_num = 0;
    for (let index in this.state.contratos) {
      contratos_num++;
    }
    ReactDOM.render(contratos_num, document.querySelector("#num_contratos"));

    for (let index in this.state.contratos) {
      let i = parseInt(index) + 1;
      let target = document.querySelector("#span_contrato_" + i);
      ReactDOM.render(
        <div className="info_table contrato_table" id={"contrato_" + i}>
          <p className="id_contrato">
            <span className="label">ID:</span>
            {this.state.contratos[index].id}
          </p>
          <p className="nome">
            <span className="label">Resp.:</span>
            {this.state.contratos[index].responsavel}
          </p>
          <p className="aluno">
            <span className="label">Aluno:</span>
            {this.state.contratos[index].aluno}
          </p>
          <p className="curso">
            <span className="label">Curso:</span>
            {this.state.contratos[index].curso}
          </p>
          <p className="horas_aula">
            <span className="label">Horas Aula:</span>
            {this.state.contratos[index].horas_aula}
          </p>
          <p className="duracao">
            <span className="label">Duração:</span>
            {this.state.contratos[index].duracao}
          </p>
          <p className="parcelas">
            <span className="label">Parcelas:</span>
            {this.state.contratos[index].parcelas}
          </p>
          <p className="valor">
            <span className="label">valor R$:</span>
            {this.state.contratos[index].valor}
          </p>
          <p className="desconto">
            <span className="label">desconto R$:</span>
            {this.state.contratos[index].desconto}
          </p>
          <p className="valor_total">
            <span className="label">Total R$:</span>
            {this.state.contratos[index].valor_total}
          </p>
          <p className="data_contrato">
            <span className="label">Data Contrato:</span>
            {helpers.dateFunc.dateFormatBR(
              this.state.contratos[index].data_contrato
            )}
          </p>
          <p className="vencimento">
            <span className="label">Vencimento:</span>
            {helpers.dateFunc.dateFormatBR(
              this.state.contratos[index].vencimento
            )}
          </p>
          <p className="cadastrado">
            <span className="label">Cadastrado:</span>
            {helpers.dateFunc.dateFormatBR(this.state.contratos[index].created)}
          </p>
        </div>,

        target
      );
    }
  };
  //-------------------------------Render ALunos---------------------

  renderAlunos = () => {
    let alunos_num = 0;
    for (let index in this.state.alunos) {
      alunos_num++;
    }
    ReactDOM.render(alunos_num, document.querySelector("#num_alunos"));

    for (let index in this.state.alunos) {
      let i = parseInt(index) + 1;
      let target = document.querySelector("#span_aluno_" + i);

      ReactDOM.render(
        <div className="info_table" id={"aluno_" + i}>
          <div className="lines line_nome">
            <p className="id_aluno">
              <span className="label">ID:</span> {this.state.alunos[index].id}
            </p>{" "}
            <p className="nome">
              <span className="label">Nome:</span>{" "}
              {this.state.alunos[index].nome}
            </p>
            <p className="genero">
              <span className="label">Genêro:</span>{" "}
              {this.state.alunos[index].genero}
            </p>
          </div>
          <div className="lines line_endereco">
            <p className="endereco">
              <span className="label">Endereço:</span>{" "}
              {this.state.alunos[index].endereco}
            </p>
            <p className="bairro">
              <span className="label">Bairro:</span>{" "}
              {this.state.alunos[index].bairro}
            </p>
          </div>
          <div className="lines line_telefones">
            <span id={"span_cel_" + i}>a</span>
            <span id={"span_tel_" + i}></span>
          </div>
          <div className="lines line_4">
            <p className="email">
              <span className="label">Email:</span>{" "}
              {this.state.alunos[index].email}
            </p>
          </div>
          <div className="lines line_5">
            <p className="data_nasc">
              <span className="label">Data Nasc.:</span>
              {helpers.dateFunc.dateFormatBR(
                this.state.alunos[index].data_nasc
              )}
            </p>
            <p className="cadastrado">
              <span className="label">Cadastrado:</span>{" "}
              {helpers.dateFunc.dateFormatBR(this.state.alunos[index].created)}
            </p>
          </div>
        </div>,
        target,
        () => {
          this.viewCelular(
            this.state.alunos[index].celulares,
            "#span_cel_" + i
          );
          this.viewTelefone(
            this.state.alunos[index].telefones,
            "#span_tel_" + i
          );
        }
      );
    }
  };
  render() {
    return (
      <div className="bg_resumo_view">
        <NavResponsaveis />

        <button onClick={this.showStatus}>Show Status</button>
        <h1>Resumos </h1>

        <div className="resumo_block resumo_responsavel">
          <div className="info_table bg_info_table_resp">
            <h2>Responsável</h2>
            <div className="lines line_nome">
              {" "}
              <p className="id_resp">
                {" "}
                <span className="label">ID: </span> {this.state.responsavel.id}
              </p>
              <p className="nome">
                <span className="label">Nome:</span>{" "}
                {this.state.responsavel.nome}
              </p>
              <p className="genero">
                <span className="label">Genêro:</span>{" "}
                {this.state.responsavel.genero}
              </p>
            </div>
            <div className="lines line_endereco">
              <p className="endereco">
                <span className="label">Endereço:</span>{" "}
                {this.state.responsavel.endereco}
              </p>
              <p className="bairro">
                <span className="label">Bairro:</span>{" "}
                {this.state.responsavel.bairro}
              </p>
            </div>
            <div className="lines line_tel"></div>

            <div className="lines line_telefones">
              <span id="span_cel"></span>
              <span id="span_tel"></span>
            </div>
            <div className="lines line_3">
              <p className="cpf">
                <span className="label">CPF:</span> {this.state.responsavel.cpf}
              </p>
              <p className="rg">
                <span className="label">RG:</span> {this.state.responsavel.rg}
              </p>
            </div>
            <div className="lines line_4">
              <p className="email">
                <span className="label">Email:</span>{" "}
                {this.state.responsavel.email}
              </p>
            </div>
            <div className="lines line_5">
              <p className="data_nasc">
                <span className="label">Data Nasc.:</span>
                {helpers.dateFunc.dateFormatBR(
                  this.state.responsavel.data_nasc
                )}
              </p>
              <p className="cadastrado">
                <span className="label">Cadastrado:</span>{" "}
                {helpers.dateFunc.dateFormatBR(this.state.responsavel.created)}
              </p>
            </div>
          </div>
          {/*Info table */}
        </div>
        <div className="resumo_block ">
          <div className="bg_info_table_alunos">
            <h2>
              Alunos: <span id="num_alunos"></span>
            </h2>

            <span className="target_span" id="span_aluno_1"></span>
            <span className="target_span" id="span_aluno_2"></span>
            <span className="target_span" id="span_aluno_3"></span>
            <span className="target_span" id="span_aluno_4"></span>
            <span className="target_span" id="span_aluno_5"></span>
            <span className="target_span" id="span_aluno_6"></span>
            <span className="target_span" id="span_aluno_7"></span>
            <span className="target_span" id="span_aluno_8"></span>
            <span className="target_span" id="span_aluno_9"></span>
            <span className="target_span" id="span_aluno_10"></span>
          </div>
        </div>
        <div className="resumo_block ">
          <div className="bg_info_table_contratos">
            <h2>
              Contratos: <span id="num_contratos"></span>
            </h2>

            <span className="target_span" id="span_contrato_1"></span>
            <span className="target_span" id="span_contrato_2"></span>
            <span className="target_span" id="span_contrato_3"></span>
            <span className="target_span" id="span_contrato_4"></span>
            <span className="target_span" id="span_contrato_5"></span>
            <span className="target_span" id="span_contrato_6"></span>
            <span className="target_span" id="span_contrato_7"></span>
            <span className="target_span" id="span_contrato_8"></span>
            <span className="target_span" id="span_contrato_9"></span>
            <span className="target_span" id="span_contrato_10"></span>
          </div>
        </div>
        <div className="resumo_block ">
          <div className="bg_info_table_carnes">
            <h2>
              Carnês: <span id="num_carnes"></span>
            </h2>

            <span className="target_span" id="span_carne_1"></span>
            <span className="target_span" id="span_carne_2"></span>
            <span className="target_span" id="span_carne_3"></span>
            <span className="target_span" id="span_carne_4"></span>
            <span className="target_span" id="span_carne_5"></span>
            <span className="target_span" id="span_carne_6"></span>
            <span className="target_span" id="span_carne_7"></span>
            <span className="target_span" id="span_carne_8"></span>
            <span className="target_span" id="span_carne_9"></span>
            <span className="target_span" id="span_carne_10"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default ResponsavelResumo;
