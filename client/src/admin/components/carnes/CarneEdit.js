import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as helpers from "../helpers/helpers";
import CurrencyInput from "react-currency-input";
import axios from "axios";
import { saveAs } from "file-saver";
import { handleTemplate } from "../boleto/HandleTemplate";

class ContratoAdd extends Component {
  state = {
    contratos: [],
    contrato: "",
    carne: {
      curso: "",
      aluno: "",
      id_contrato: "",
      id_resp: "",
      id_aluno: "",
      id_curso: "",
      valor: "",
      desconto: "00,00",
      valor_total: "",
      vencimento: "",
      created: "",
      obs: ""
    },
    carne_folhas: [],
    msg_send: ""
  };

  componentDidMount() {
    let url = window.location.href;
    let url_array = url.split("/");
    let i = url_array.length - 1;
    let id = url_array[i];

    fetch(`/profile/carne_edit/${id}`)
      .then(res => res.json())
      .then(results => {
        this.setState({
          carne: results.carne,
          carne_folhas: results.folhas,
          folhas_DB: results.folhas,
          id_carne: results.carne.id
        });
      })
      .then(() => {
        this.renderCarneFolhas();
      })
      .then(() => {
        for (let index in this.state.folhas_DB) {
          let i = parseInt(index);
          let j = parseInt(index) + 1;
          //Seta o valor dos input editaveis após renderizar a folha de carnê
          let vencimento = document.querySelector("#input_vencimento-" + j);
          let valor = document.querySelector("#input_valor-" + j);
          let desconto = document.querySelector("#input_desconto-" + j);
          let valor_total = document.querySelector("#input_valor_total-" + j);
          let n_lanc = document.querySelector("#input_n_lanc-" + j);

          vencimento.value = helpers.dateFormatDB(
            this.state.folhas_DB[i].vencimento
          );
          n_lanc.value = this.state.folhas_DB[i].n_lanc;
          valor.value = this.state.folhas_DB[i].valor;
          desconto.value = this.state.folhas_DB[i].desconto;
          valor_total.value = this.state.folhas_DB[i].valor_total;
          console.log(this.state.folhas_DB[i].vencimento);
          this.setState(prevState => ({
            carne_folhas: {
              ...prevState.carne_folhas,
              [i]: {
                ...prevState.carne_folhas[i],
                n_lanc: this.state.folhas_DB[i].n_lanc
              }
            }
          }));
        }
      })
      .then(() => {
        this.setState(prevState => ({
          carne: {
            ...prevState.carne,
            vencimento: helpers.dateFormatDB(this.state.carne.vencimento),
            created: helpers.dateFormatDB(this.state.carne.created)
          }
        }));
      });

    fetch("/profile/last_id_folhas")
      .then(res => res.json())
      .then(last_id_folhas =>
        this.setState({ last_id_folhas: last_id_folhas + 1 })
      );
    fetch("/profile/carnes")
      .then(res => res.json())
      .then(carnesDB => this.setState({ carnesDB }))
      .then(() => {
        let x = this.state.carnesDB.length - 1;
        let id_carne = this.state.carnesDB[x].id;
        this.setState({ novo_id_carne: id_carne + 1 });
      });
    fetch("/profile/contratos")
      .then(res => res.json())
      .then(contratos => this.setState({ contratos }))
      .then(() => {});
  }
  handleSelectContratoChange = e => {
    let id_contrato = e.target.value;
    this.setState({ id_contrato: e.target.value });
    let contratos = this.state.contratos;

    contratos.forEach(contrato => {
      if (id_contrato == contrato.id) {
        this.handleCarneInputs(contrato);
      }
    });
  };

  handleCarneInputs = contratos => {
    this.setState(
      {
        carne: {
          responsavel: contratos.responsavel,
          curso: contratos.curso,
          aluno: contratos.aluno,
          id_contrato: contratos.id,
          id_resp: contratos.id_resp,
          id_aluno: contratos.id_aluno,
          id_curso: contratos.id_curso,
          parcelas: contratos.parcelas,

          valor: contratos.valor,
          valor_total: contratos.valor_total,
          desconto: contratos.desconto,
          vencimento: helpers.dateFormatDB(contratos.data_contrato),
          created: helpers.dateFormatDB(contratos.created)
        }
      },
      () => {
        this.renderCarneFolhas();
      }
    );
  };

  valorTotal = index => {
    let i = index;
    let valor = this.state.carne_folhas[i].valor;

    valor = valor.replace(",", ".");

    let desconto = this.state.carne_folhas[i].desconto;
    desconto = desconto.replace(",", ".");

    let valor_total = valor - desconto;
    let valorFormatado = valor_total
      .toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      })
      .replace("R$", "");

    this.setState(
      prevState => ({
        carne_folhas: {
          ...prevState.carne_folhas,
          [i]: {
            ...prevState.carne_folhas[i],
            valor_total: valorFormatado
          }
        }
      }),
      () => {
        let input_valor_total = document.querySelector(
          "#input_valor_total-" + (i + 1)
        );
        input_valor_total.value = this.state.carne_folhas[i].valor_total;
      }
    );

    // this.setState({ valor_total: valorFormatado });
  };

  showStatus = () => {
    console.log(this.state);
  };
  handleChangeObs = e => {
    let value = e.target.value;

    this.setState(prevState => ({
      carne: {
        ...prevState.carne,
        obs: value
      }
    }));
  };

  atualizarCarne = e => {
    if (this.state.carne.id_resp === "") {
    } else {
      const data = this.state;
      fetch("/profile/carne_update", {
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

  //---------------------------------------------RENDER FOLHAS------------------------------------

  handleChangeFolhas = e => {
    let id = e.target.id;
    let id_split = id.split("-");
    let name = e.target.name;
    let value = e.target.value;
    let i = parseInt(id_split[1]) - 1;
    this.setState(
      prevState => ({
        carne_folhas: {
          ...prevState.carne_folhas,
          [i]: {
            ...prevState.carne_folhas[i],
            [name]: value
          }
        }
      }),
      () => {
        if (name == "valor" || name == "desconto") {
          this.valorTotal(i);
        }
      }
    );
  };

  createAndDownloadPdf = () => {
    let nomeResp = this.state.boleto_master.responsavel.trim();
    let n_carne = this.state.boleto_master.n_carne.trim();
    let docName = "Carnê-" + n_carne + "-" + nomeResp;

    nomeResp = "teste";
    n_carne = "teste";
    docName = "teste";
    // document.querySelector("#load_img").style.display = "block";

    axios
      .post("http://localhost:3000/create-pdf", this.state)
      .then(() => axios.get("fetch-pdf", { responseType: "blob" }))
      .then(res => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });

        saveAs(pdfBlob, docName + ".pdf");
      })
      .then(() => {
        document.querySelector("#load_img").style.display = "none";
      });
  };

  renderCarneFolhas = e => {
    let parcelas_num = parseInt(this.state.carne.parcelas);
    let insert_folhas = document.getElementsByClassName("insert_folhas");

    let folhas_num = insert_folhas.length;
    //Removo folhas previamente renderizadas de inser folhas com o unmoutComponent...
    for (let k = 0; k < folhas_num; k++) {
      this.setState(
        {
          carne_folhas: {}
        },
        () => {
          let target = document.querySelector("#insert_folha_" + (k + 1));

          ReactDOM.unmountComponentAtNode(target);
        }
      );
    }
    //renderiza as folhas do carne baseado no numero de parcelas

    for (let i = 0; i < parcelas_num; i++) {
      let j = i + 1;
      let n_lanc =
        "C" +
        (this.state.novo_id_carne + "").padStart(3, "0") +
        "B" +
        (parseInt(this.state.last_id_folhas) + i + "").padStart(3, "0");
      let RA = "RA" + (this.state.carne.id_aluno + "").padStart(3, "0");

      //adiciona os meses na data contrato nas folhas do carne
      let date = this.state.carne.vencimento;
      let vencimento = helpers.AddDateMonth(i, date);

      //------------------------------------------------------------------------------
      this.setState(
        prevState => ({
          carne_folhas: {
            ...prevState.carne_folhas,
            [i]: {
              ...prevState.carne_folhas[i],
              id: this.state.folhas_DB[i].id,
              id_carne: this.state.carne.id,
              id_aluno: this.state.carne.id_aluno,
              id_curso: this.state.carne.id_curso,
              id_resp: this.state.carne.id_resp,
              id_contrato: this.state.carne.id_contrato,

              responsavel: this.state.carne.responsavel,
              aluno: this.state.carne.aluno,
              curso: this.state.carne.curso,
              n_lanc: n_lanc,
              parcela: i + 1 + "/" + this.state.carne.parcelas,
              vencimento: vencimento,
              valor: this.state.carne.valor,
              desconto: this.state.carne.desconto,
              valor_total: this.state.carne.valor_total,
              RA: RA,
              created: new Date()
            }
          }
        }),
        () => {
          //Executa após o setState setar as propriedades das folhas
          let target = document.querySelector("#insert_folha_" + j);
          ReactDOM.render(
            <div className="folhas" id={"bg_folha_" + j}>
              <h3>Folha {i + 1}</h3>
              <div className="row_1">
                <div
                  className="folha_div folha_campo_bloqueado"
                  id="folha_responsavel"
                >
                  <label>Resp.:</label>

                  <input
                    readOnly
                    type="text"
                    name="responsavel"
                    value={this.state.carne_folhas[i].responsavel}
                  />
                </div>
                <div
                  className="folha_div folha_campo_bloqueado"
                  id="folha_aluno"
                >
                  <label>Aluno:</label>

                  <input
                    readOnly
                    type="text"
                    name={"aluno"}
                    value={this.state.carne_folhas[i].aluno}
                  />
                </div>
                <div
                  className="folha_div folha_campo_bloqueado"
                  id="folha_curso"
                >
                  <label>Curso:</label>

                  <input
                    readOnly
                    type="text"
                    name={"curso"}
                    value={this.state.carne_folhas[i].curso}
                  />
                </div>
              </div>
              <div className="row_2">
                <div
                  className="folha_div folha_campo_bloqueado"
                  id="folha_n_lanc"
                >
                  <label>Nº Lanc.:</label>

                  <input
                    id={"input_n_lanc-" + j}
                    readOnly
                    type="text"
                    name={"n_lanc"}
                    value={this.state.carne_folhas[i].n_lanc}
                  />
                </div>
                <div
                  className="folha_div folha_campo_bloqueado"
                  id="folha_parcela"
                >
                  <label>Parcela</label>

                  <input
                    readOnly
                    type="text"
                    name={"parcela"}
                    value={this.state.carne_folhas[i].parcela}
                  />
                </div>
                <div
                  className="folha_div  folha_campo_editavel"
                  id="folha_vencimento"
                >
                  <label>Vencimento:</label>

                  <input
                    id={"input_vencimento-" + j}
                    onChange={event => this.handleChangeFolhas(event)}
                    type="date"
                    name={"vencimento"}
                    //value={this.state.carne_folhas[i].vencimento}
                  />
                </div>
                <div
                  className="folha_div folha_campo_editavel"
                  id="folha_valor"
                >
                  <label>Valor:</label>

                  <CurrencyInput
                    thousandSeparator="."
                    decimalSeparator=","
                    id={"input_valor-" + j}
                    type="text"
                    name={"valor"}
                    onChangeEvent={event => this.handleChangeFolhas(event)}
                  />
                </div>

                <div
                  className="folha_div folha_campo_editavel"
                  id="folha_desconto"
                >
                  <label>Desc.:</label>

                  <CurrencyInput
                    thousandSeparator="."
                    decimalSeparator=","
                    id={"input_desconto-" + j}
                    type="text"
                    name={"desconto"}
                    onChangeEvent={event => this.handleChangeFolhas(event)}
                  />
                </div>
                <div
                  className="folha_div folha_campo_bloqueado"
                  id="folha_valor_total"
                >
                  <label>Total:</label>

                  <CurrencyInput
                    readOnly
                    thousandSeparator="."
                    decimalSeparator=","
                    id={"input_valor_total-" + j}
                    type="text"
                    name={"valor_total"}
                    //onChange={event => this.handleChangeFolhas(event)}
                    //value={this.state.carne_folhas[i].valor_total}
                  />
                </div>
                <div className="folha_div folha_campo_bloqueado" id="folha_RA">
                  <label>RA:</label>

                  <input
                    readOnly
                    type="text"
                    name={"RA"}
                    value={this.state.carne_folhas[i].RA}
                  />
                </div>
              </div>
            </div>,
            target,
            () => {
              //Seta o valor dos input editaveis após renderizar a folha de carnê
              let vencimento = document.querySelector("#input_vencimento-" + j);
              let valor = document.querySelector("#input_valor-" + j);
              let desconto = document.querySelector("#input_desconto-" + j);
              let valor_total = document.querySelector(
                "#input_valor_total-" + j
              );

              vencimento.value = this.state.carne_folhas[i].vencimento;
              valor.value = this.state.carne_folhas[i].valor;
              desconto.value = this.state.carne_folhas[i].desconto;
              valor_total.value = this.state.carne_folhas[i].valor_total;
            }
          );
        }
      );
    }
  };
  //------------------------------------------------------------------------------------------
  render() {
    return (
      <div>
        <button onClick={this.showStatus}>Show Status</button>
        <form className="form_add form_carne" id="form_add_carne">
          <div className="cadastro_sucesso">
            <h3>{this.state.msg_send}</h3>
          </div>
          <div className="bg_inputs">
            <h1>Atualizar Carnê</h1>
            <div className="bg_contrato_obs">
              <div className="div_add add_contrato">
                <label>Contrato:</label>
                <div className="bg_buttons">
                  <button
                    id="btn_download_pdf"
                    onClick={this.createAndDownloadPdf}
                  >
                    Download PDF
                  </button>
                </div>
                <select
                  onChange={this.handleSelectContratoChange}
                  value={this.state.carne.id_contrato}
                >
                  <option id="option" value="" disabled></option>
                  {this.state.contratos.reverse().map(contratos => (
                    <option
                      className="curso_options"
                      key={contratos.id}
                      value={contratos.id}
                    >
                      {contratos.id} - {contratos.responsavel}
                    </option>
                  ))}
                </select>
              </div>
              <div className="div_add add_obs">
                <label>Obs.:</label>
                <input
                  type="text"
                  name="obs"
                  placeholder="Observações sobre o carnê"
                  value={this.state.carne.obs}
                  onChange={this.handleChangeObs}
                />
              </div>
            </div>
            <div className="bg_carne_divs">
              <div className="div_add add_responsavel">
                <label>Resp.:</label>
                <input
                  type="text"
                  value={this.state.carne.responsavel}
                  readOnly
                />
              </div>

              <div className="div_add add_aluno">
                <label>Aluno:</label>
                <input type="text" value={this.state.carne.aluno} readOnly />
              </div>
              <div className="div_add add_curso">
                <label>Curso:</label>

                <input type="text" value={this.state.carne.curso} readOnly />
              </div>
              <div className="div_add add_RA">
                <label>R.A</label>
                <input
                  type="text"
                  name="id_aluno"
                  value={this.state.carne.id_aluno}
                  readOnly
                />
              </div>
              <div className="div_add add_parcelas">
                <label>Parcelas:</label>

                <input
                  type="text"
                  name="parcelas"
                  value={this.state.carne.parcelas}
                  readOnly
                />
              </div>

              <div className="div_add add_valor">
                <label>Valor R$:</label>
                <CurrencyInput
                  name="valor"
                  placeholder="00,00"
                  thousandSeparator="."
                  decimalSeparator=","
                  readOnly
                  value={this.state.carne.valor}
                />
              </div>
              <div className="div_add add_desconto">
                <label>Desconto R$:</label>

                <CurrencyInput
                  type="text"
                  name="desconto"
                  placeholder="00,00"
                  thousandSeparator="."
                  decimalSeparator=","
                  value={this.state.carne.desconto}
                  readOnly
                />
              </div>
              <div className=" div_add add_valor_total">
                <label>Total R$:</label>

                <input
                  name="valor_total"
                  placeholder="00,00"
                  value={this.state.carne.valor_total}
                  readOnly
                />
              </div>
              <div className="div_add add_data_contrato">
                <label>Data Inicio</label>
                <input
                  type="date"
                  name="vencimento"
                  value={this.state.carne.vencimento}
                  readOnly
                />
              </div>
              <div className="div_add add_created">
                <label>Cadastrado</label>
                <input
                  type="date"
                  name="created"
                  value={this.state.carne.created}
                  readOnly
                />
              </div>
            </div>
          </div>
        </form>
        {/*-----------------------------------Folhas Carnê--------------------------------------------- */}
        <br />
        <div className="bg_folhas_carne">
          <div className="insert_folhas" id="insert_folha_1"></div>
          <div className="insert_folhas" id="insert_folha_2"></div>
          <div className="insert_folhas" id="insert_folha_3"></div>
          <div className="insert_folhas" id="insert_folha_4"></div>
          <div className="insert_folhas" id="insert_folha_5"></div>
          <div className="insert_folhas" id="insert_folha_6"></div>
          <div className="insert_folhas" id="insert_folha_7"></div>
          <div className="insert_folhas" id="insert_folha_8"></div>
          <div className="insert_folhas" id="insert_folha_9"></div>
          <div className="insert_folhas" id="insert_folha_10"></div>
          <div className="insert_folhas" id="insert_folha_11"></div>
          <div className="insert_folhas" id="insert_folha_12"></div>
          <div className="insert_folhas" id="insert_folha_13"></div>
          <div className="insert_folhas" id="insert_folha_14"></div>
          <div className="insert_folhas" id="insert_folha_15"></div>
          <div className="insert_folhas" id="insert_folha_16"></div>
          <div className="insert_folhas" id="insert_folha_17"></div>
          <div className="insert_folhas" id="insert_folha_18"></div>
          <div className="insert_folhas" id="insert_folha_19"></div>
          <div className="insert_folhas" id="insert_folha_20"></div>
          <div className="insert_folhas" id="insert_folha_21"></div>
          <div className="insert_folhas" id="insert_folha_22"></div>
          <div className="insert_folhas" id="insert_folha_23"></div>
          <div className="insert_folhas" id="insert_folha_24"></div>
          <button className="btn_cadastrar" onClick={this.atualizarCarne}>
            {" "}
            Atualizar Carnê
          </button>
        </div>
      </div>
    );
  }
}

export default ContratoAdd;
