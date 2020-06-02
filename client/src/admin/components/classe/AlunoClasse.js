import React, { Component } from "react";
import InputMask from "react-input-mask";
import ReactDOM from "react-dom";
import * as helpers from "../helpers";
import NavAlunoClasse from "./NavAlunoClasse";

class AlunoClasse extends Component {
  state = {
    contratos: [],
    alunos_classe: [],
    alunos: [],
  };

  componentDidMount() {
    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });

    fetch("/profile/alunos_classe")
      .then((res) => res.json())
      .then((alunos_classe) => this.setState({ alunos_classe }))
      .then(() => {
        console.log(this.state);
        this.renderAlunoStatus();
      });
    fetch("/profile/contratos")
      .then((res) => res.json())
      .then((contratos) => this.setState({ contratos }))
      .then(() => {
        console.log(this.state);
        this.renderAlunoStatus();
      });
    fetch("/profile/alunos")
      .then((res) => res.json())
      .then((alunos) => this.setState({ alunos }))
      .then(() => {
        console.log(this.state);
        this.renderAlunoStatus();
      });
  }

  showStatus = () => {
    console.log(this.state);
  };

  salvarEdicoes = (e) => {
    let index = parseInt(e.target.dataset.index);
    let id = e.target.id;

    const data = this.state.alunos_classe[index];
    fetch("/profile/aluno_classe_edit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({ msg_send: res.msg_send });
      })
      .then(() => {
        // document.querySelector(".bg_inputs").style.display = "none";
        let msg_success = document.querySelector(
          "#msg_update_sucesso-" + (index + 1)
        );
        msg_success.style.opacity = "1";
        let btn_salvar = document.querySelector("#" + id);
        btn_salvar.disabled = true;

        let element = document.querySelector("#form_add-" + (index + 1));
        element.classList.add("success_background");

        setTimeout(() => {
          msg_success.style.opacity = "0";
          element.classList.remove("success_background");
        }, 1000);
      });

    e.preventDefault();
  };
  //------------------------------------------------------------------------------------------
  vinculoContrato = (contrato_status) => {
    if (contrato_status == "ativo") {
      return "contrato_ativo";
    }
  };
  vinculoContratoText = (contrato_status) => {
    if (contrato_status == "ativo") {
      return " - ativo ";
    }
  };
  vinculoContratoOptionDisabled = (contrato_status) => {
    if (contrato_status == "ativo") {
      return "disabled";
    }
  };

  handleChange = (e) => {
    let id = e.target.id;
    let id_split = id.split("-");
    let name = e.target.name;
    let value = e.target.value;
    let i = parseInt(id_split[1]) - 1;
    this.setState(
      (prevState) => ({
        alunos_classe: {
          ...prevState.alunos_classe,
          [i]: {
            ...prevState.alunos_classe[i],
            [name]: value,
          },
        },
      }),
      () => {
        let btn_salvar = document.querySelector("#btn_salvar-" + [i + 1]);
        btn_salvar.removeAttribute("disabled");
      }
    );

    if (name == "status") {
      let select = document.querySelector("#" + id);
      select.className = value;
    }
  };
  checkStatus = (e) => {};

  renderAlunoStatus = () => {
    let target = document.querySelector(".span_aluno_status");
    let alunos_classe = this.state.alunos_classe;

    let content = [];
    const alunos_nomes = [];

    // Monta alunos_nomes com a ID e o Nome do Aluno ex: "19-Gloria Fulana da Silva"
    for (let j = 0; j < alunos_classe.length; j++) {
      alunos_nomes[j] =
        alunos_classe[j].id_aluno + "-" + alunos_classe[j].nome.trim();
    } //for alunos

    // Retira os nomes repetidos do alunos_nomes com o filter

    const subcontent_repetidos = alunos_nomes.filter((values, index, arr) => {
      return arr.indexOf(values) != index;
    });
    let num_subcontent_repetidos = parseInt(subcontent_repetidos.length);

    const unique_alunos_nomes = alunos_nomes.filter(
      (x, i, a) => a.indexOf(x) == i
    );

    let aluno_array;
    let aluno_nome;
    let aluno_id;

    for (let i = 0; i < unique_alunos_nomes.length; i++) {
      //Separa as strings do alunos_nomes para separar ID e o Nome do Aluno
      aluno_array = alunos_nomes[i].split("-");

      aluno_id = aluno_array[0]; //ID do Aluno
      aluno_nome = aluno_array[1]; // Nome do Aluno

      // Gera o bloco Content dos Alunos e chama a função contentAlunoContrato para gerar o Subcontent
      content[i] = (
        <div className="bg_aluno_contrato">
          <h3>{aluno_nome}</h3>
          {
            /*Gera o Subcontent de cada Aluno */
            this.contentAlunoContrato(aluno_id)
          }
        </div>
      );
    }
    var num_alunos = unique_alunos_nomes.length;
    ReactDOM.render(content, target, () => {
      for (let j = 0; j < num_alunos; j++) {
        let k = j + 1;
        let turma = document.querySelector("#input_turma-" + k);
        let obs = document.querySelector("#input_obs-" + k);
        let aula_semana = document.querySelector("#input_aula_semana-" + k);
        let data_inicio = document.querySelector("#input_data_inicio-" + k);
        let status = document.querySelector("#input_status-" + k);
        let conclusao = document.querySelector(
          "#input_data_conclusao_prevista-" + k
        );
        let conclusao_efetiva = document.querySelector(
          "#input_data_conclusao_efetiva-" + k
        );

        obs.value = this.state.alunos_classe[j].obs;

        status.value = this.state.alunos_classe[j].status;
        turma.value = this.state.alunos_classe[j].turma;
        aula_semana.value = this.state.alunos_classe[j].aula_semana;

        data_inicio.value = helpers.dateFunc.dateFormatDB(
          this.state.alunos_classe[j].data_inicio
        );

        conclusao.value = helpers.dateFunc.dateFormatDB(
          this.state.alunos_classe[j].data_conclusao_prevista
        );
        conclusao_efetiva.value = helpers.dateFunc.dateFormatDB(
          this.state.alunos_classe[j].data_conclusao_efetiva
        );
      }

      // Desabilita os botões salvar apos renderizar
      var btn_salvar = document.getElementsByClassName("btn_salvar");

      for (let y = 0; y < btn_salvar.length; y++) {
        btn_salvar[y].disabled = "disabled";
      }
    });
  };

  contentAlunoContrato = (aluno_id) => {
    let subContent = [];
    let alunos_classe = this.state.alunos_classe;

    for (let i = 0; i < alunos_classe.length; i++) {
      let j = i + 1;
      if (alunos_classe[i].id_aluno == aluno_id) {
        subContent[i] = (
          <form className="form_status form_aluno_status" id={"form_add-" + j}>
            <div className="bg_inputs">
              <div
                className="msg_update_sucesso"
                id={"msg_update_sucesso-" + j}
              >
                <span>{this.state.msg_send}Atualizado com Sucesso</span>
              </div>
              <div className="line_1">
                <span className="red_line"></span>
                <div className="div_add add_curso">
                  <label>Curso:</label>
                  <p>{alunos_classe[i].curso}</p>
                </div>

                <div className="div_add add_duracao">
                  <label>Duração:</label>
                  <p>{alunos_classe[i].duracao} Meses</p>
                </div>
                <div className="div_add add_contrato">
                  <label>Contrato:</label>
                  <p>{alunos_classe[i].id}</p>
                </div>

                <div className=" div_add add_duracao">
                  <label>Turma: </label>

                  <input
                    id={"input_turma-" + j}
                    type="text"
                    name="turma"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="div_add add_dia_semana">
                  <label>Aula Semana:</label>

                  <input
                    id={"input_aula_semana-" + j}
                    type="text"
                    name="aula_semana"
                    onChange={(event) => this.handleChange(event)}
                  />
                </div>
              </div>
              {/*line 1 */}
              <div className="line_2">
                <span className="red_line"></span>

                <div className=" div_add add_data_inicio">
                  <label>Data Início: </label>
                  <input
                    id={"input_data_inicio-" + j}
                    type="date"
                    name="data_inicio"
                    onChange={(event) => this.handleChange(event)}
                  />
                </div>
                <div className=" div_add add_conclusao_prevista">
                  <label>Conclusão Prevista:</label>
                  <input
                    id={"input_data_conclusao_prevista-" + j}
                    type="date"
                    name="data_conclusao_prevista"
                    onChange={(event) => this.handleChange(event)}
                  />
                </div>

                <div className=" div_add add_conclusao_efetiva">
                  <label>Conclusão Efetiva:</label>
                  <input
                    id={"input_data_conclusao_efetiva-" + j}
                    type="date"
                    name="data_conclusao_efetiva"
                    onChange={(event) => this.handleChange(event)}
                  />
                </div>
              </div>
              {/*line 2 */}
              <div className="line_3">
                <span className="red_line"></span>
                <div className="div_add add_obs">
                  <textarea
                    className="obs"
                    id={"input_obs-" + j}
                    placeholder="Observações sobre o aluno aqui..."
                    name="obs"
                    onChange={(event) => this.handleChange(event)}
                  ></textarea>
                </div>
              </div>
              {/*line 3 */}
            </div>

            <div className="bg_button">
              <div className={"div_add add_status"}>
                <label>Status:</label>
                {/*
                  <input
                  type="text"
                  onChange={(event) => this.handleChange(event)}
                  value={this.state.alunos_classe[i].status}
                />
                 */}

                <select
                  id={"input_status-" + j}
                  name="status"
                  className={this.state.alunos_classe[i].status}
                  onChange={(event) => this.handleChange(event)}
                >
                  <option className="option_cursando" value="cursando">
                    Cursando
                  </option>
                  <option className="option_concluido" value="concluido">
                    Concluido
                  </option>
                  <option className="option_pausado" value="pausado">
                    Pausado
                  </option>
                  <option className="option_cancelado" value="cancelado">
                    Cancelado
                  </option>
                </select>
              </div>

              <button
                id={"btn_salvar-" + [j]}
                data-index={[i]}
                className="btn_salvar"
                onClick={this.salvarEdicoes}
              >
                Salvar
              </button>
            </div>
          </form>
        );
      }
    }
    return subContent;
  };

  render() {
    return (
      <div id="page_status_aluno">
        <button onClick={this.showStatus}>Show Status</button>
        <NavAlunoClasse />
        <h1>Alunos Cursos Status</h1>

        <div className="span_aluno_status"></div>
      </div>
    );
  }
}

export default AlunoClasse;
