import React, { Component } from "react";
import InputMask from "react-input-mask";
import ReactDOM from "react-dom";
import { dateFormatDB } from "./helpers/helpers";
import CurrencyInput from "react-currency-input";

class ContratoEdit extends Component {
  state = {
    responsaveis: [],
    cursos: [],
    alunos: [],

    responsavel: "",
    aluno: "",
    curso: "",

    id_resp: "",
    id_aluno: "",
    id_curso: "",

    horas_aula: "2",
    duracao: "",
    valor: "",
    desconto: "00,00",
    valor_total: "",
    data_contrato: "",
    created: "",
    msg_send: ""
  };

  componentDidMount() {
    let url = window.location.href;
    let url_array = url.split("/");
    let i = url_array.length - 1;
    let id = url_array[i];

    fetch(`/profile/contrato_edit/${id}`)
      .then(res => res.json())
      .then(contrato =>
        this.setState(
          {
            id_resp: contrato.id_resp,
            id_curso: contrato.id_curso,
            id_aluno: contrato.id_aluno,
            cpf: contrato.cpf,

            responsavel: contrato.responsavel,
            aluno: contrato.aluno,
            curso: contrato.curso,

            duracao: contrato.duracao,
            parcelas: contrato.parcelas,
            horas_aula: contrato.horas_aula,
            valor: contrato.valor,

            desconto: contrato.desconto,
            obs: contrato.obs,

            data_contrato: contrato.data_contrato,

            created: contrato.created,
            msg_send: ""
          },
          () => {
            console.log(contrato);
          }
        )
      )
      .then(() => {
        let data_created = dateFormatDB(this.state.created);
        let data_contrato = dateFormatDB(this.state.data_contrato);
        this.setState({ created: data_created, data_contrato: data_contrato });
        this.setState({ id: id });
        this.valorTotal();
      });

    fetch("/profile/resp_contrato")
      .then(res => res.json())
      .then(responsaveis => this.setState({ responsaveis }))
      .then(() => {
        console.log(this.state);
      });
    fetch("/profile/aluno_contrato")
      .then(res => res.json())
      .then(alunos => this.setState({ alunos }))
      .then(() => {
        console.log(this.state);
      });

    fetch("/profile/curso_contrato")
      .then(res => res.json())
      .then(cursos => this.setState({ cursos }))
      .then(() => {
        console.log(this.state);
      });
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSelectCursoChange = e => {
    let cursos = this.state.cursos;
    let id_curso = e.target.value;
    this.setState({ id_curso: e.target.value });
    cursos.forEach(curso => {
      if (id_curso == curso.id) {
        this.setState(
          {
            duracao: curso.duracao,
            parcelas: curso.duracao,
            valor: curso.valor,
            curso: curso.nome
          },
          () => {
            this.valorTotal();
          }
        );
      }
    });
  };
  handleSelectAlunoChange = e => {
    let id_aluno = e.target.value;

    this.setState({ id_aluno: e.target.value });
    let alunos = this.state.alunos;
    alunos.forEach(aluno => {
      if (id_aluno == aluno.id) {
        this.setState({ aluno: aluno.nome });
      }
    });
  };

  handleSelectRespChange = e => {
    let id_resp = e.target.value;
    this.setState({ id_resp: e.target.value });
    let responsaveis = this.state.responsaveis;
    responsaveis.forEach(responsavel => {
      if (id_resp == responsavel.id) {
        this.setState({ responsavel: responsavel.nome, cpf: responsavel.cpf });
      }
    });
  };
  showStatus = () => {
    console.log(this.state);
  };

  valorTotal = () => {
    let valor = this.state.valor;

    valor = valor.replace(",", ".");

    let desconto = this.state.desconto;
    desconto = desconto.replace(",", ".");

    let valor_total = valor - desconto;
    let valorFormatado = valor_total
      .toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      })
      .replace("R$", "");

    this.setState({ valor_total: valorFormatado });
  };
  handleDescontoChange = e => {
    let desconto = e.target.value;

    this.setState({ desconto: desconto }, () => {
      this.valorTotal();
    });
  };
  handleValorChange = e => {
    this.setState({ valor: e.target.value }, () => {
      this.valorTotal();
    });
  };

  delTel = e => {
    e.preventDefault();
    let num = document.querySelectorAll(".input_tel").length;
    let num_array = parseInt(num - 1);

    if (num > 0) {
      let target = document.getElementById("block_tel_" + num);
      ReactDOM.unmountComponentAtNode(target);
      let tel = "tel_" + num;
      this.setState(prevState => ({
        telefones: {
          // object that we want to update
          ...prevState.telefones, // keep all other key-value pairs
          [num_array]: {}
        }
      }));

      num--;

      if (num < 1) {
        let btn_del = document.querySelector(".btn_delTel_input");
        btn_del.style.background = "#ccc";
      }
    }
  };

  atualizar = e => {
    if (this.state.id_resp === "") {
    } else {
      const data = this.state;
      fetch("/profile/contrato_update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(res => {
          this.setState({ msg_send: res.msg_send });
          console.log("Text: " + res.msg_send);
          document.querySelector(".bg_inputs").style.display = "none";
          document.querySelector(".cadastro_sucesso").style.display = "block";
        })
        .then(res => {});
    }

    e.preventDefault();
  };
  render() {
    return (
      <div>
        <button onClick={this.showStatus}>Show Status</button>
        <div id="teste"></div>
        <form className="form_add form_contrato" id="form_add_contrato">
          <div className="cadastro_sucesso">
            <h3>{this.state.msg_send}</h3>
          </div>
          <div className="bg_inputs">
            <h1>Atualizar Contrato</h1>

            <div className="div_add add_responsavel">
              <label>Resp.:</label>
              <select
                onChange={this.handleSelectRespChange}
                value={this.state.id_resp}
              >
                <option
                  id="option"
                  value=""
                  data-duracao="data-teste"
                  selected
                  disabled
                ></option>
                {this.state.responsaveis.reverse().map(responsaveis => (
                  <option
                    className="curso_options"
                    key={responsaveis.id}
                    value={responsaveis.id}
                  >
                    {responsaveis.id} - {responsaveis.nome}
                  </option>
                ))}
              </select>
            </div>

            <div className="div_add add_aluno">
              <label>Aluno:</label>

              <select
                onChange={this.handleSelectAlunoChange}
                value={this.state.id_aluno}
              >
                <option value="" selected disabled></option>
                {this.state.alunos.reverse().map(alunos => (
                  <option key={alunos.id} value={alunos.id}>
                    {alunos.id} - {alunos.nome}
                  </option>
                ))}
              </select>
            </div>
            <div className="div_add add_curso">
              <label>Curso:</label>

              <select
                onChange={this.handleSelectCursoChange}
                value={this.state.id_curso}
              >
                <option value="" selected disabled></option>
                {this.state.cursos.reverse().map(cursos => (
                  <option
                    data-duracao="teste"
                    key={cursos.id}
                    value={cursos.id}
                  >
                    {cursos.id} - {cursos.nome}
                  </option>
                ))}
              </select>
            </div>
            <div className="div_add add_hora_aula">
              <label>Horas Aula</label>

              <input
                type="number"
                name="horas_aula"
                onChange={this.handleChange}
                value={this.state.horas_aula}
              />
            </div>
            <div className="div_add add_duracao">
              <label>D. Meses:</label>

              <input
                type="number"
                name="duracao"
                onChange={this.handleChange}
                value={this.state.duracao}
              />
            </div>
            <div className="div_add add_parcelas">
              <label>Parcelas:</label>

              <input
                type="number"
                name="parcelas"
                onChange={this.handleChange}
                value={this.state.parcelas}
              />
            </div>

            <div className="div_add add_valor">
              <label>Valor R$:</label>
              <CurrencyInput
                name="valor"
                onChangeEvent={this.handleValorChange}
                placeholder="00,00"
                thousandSeparator="."
                decimalSeparator=","
                value={this.state.valor}
              />
            </div>
            <div className="div_add add_desconto">
              <label>Desconto R$:</label>

              <CurrencyInput
                type="text"
                name="desconto"
                onChangeEvent={this.handleDescontoChange}
                placeholder="00,00"
                thousandSeparator="."
                decimalSeparator=","
                value={this.state.desconto}
              />
            </div>
            <div className="add_valor_total">
              <label>Total R$:</label>

              <input
                type="text"
                name="total"
                placeholder="00,00"
                value={this.state.valor_total}
              />
            </div>
            <div className="div_add add_data_contrato">
              <label>Data Contrado</label>
              <input
                type="date"
                name="data_contrato"
                onChange={this.handleChange}
                value={this.state.data_contrato}
              />
            </div>
            <div className="div_add add_created">
              <label>Cadastro</label>
              <input
                type="date"
                name="created"
                onChange={this.handleChange}
                value={this.state.created}
              />
            </div>
            <div className="div_add add_obs">
              <label>Obs.:</label>

              <input
                type="text"
                name="obs"
                onChange={this.handleChange}
                value={this.state.obs}
              />
            </div>
            <button className="btn_cadastrar" onClick={this.atualizar}>
              {" "}
              Atualizar Contrato
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContratoEdit;
