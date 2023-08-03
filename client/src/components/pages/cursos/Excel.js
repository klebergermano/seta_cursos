import React, { Component } from "react";
class Excel extends Component {
  state = {};
  render() {
    return (
      <div className="col-12" id="bg_excel">
        <h1>Excel</h1>
        <div id="excel_content">
          <div id="bloco_1">
            <div id="resumo_excel">
              <figure>
                <img
                  src={require("../../../assets/img/excel/excel-logo.png")}
                />
              </figure>
              <p>
                O uso de planilhas eletrônicas é cada dia mais exigido pelas
                empresas. O programa Microsoft Excel, sem dúvidas, é o mais
                utilizado no mercado. Desenvolvemos este curso especializado
                para cada aluno, focado nas suas necessidades e no que tem de
                novo mercado, focamos nas principais e mais avançadas funções.
              </p>
            </div>
            <div id="modulos_excel">
              <li>Analisar dados e aplicar fórmulas construtivas;</li>
              <li>
                Efetuar cálculos entre planilhas consolidadas, empregando
                vínculos;{" "}
              </li>
              <li>Aplicar conceitos dinâmicos do Excel;</li>
              <li>
                {" "}
                Empregar técnicas para amanipulação, agrupamento e ordenação de
                dados;
              </li>
              <li>Criar painéis e automatizar tarefas;</li>
              <li>
                Aplicar conhecimentos avançados para construção de Dashboards;
              </li>
              <li>
                {" "}
                Construir e personalizar macro de comando, automatizando uma
                planilha e definir procedimentos e rotinas para a construção de
                macros.
              </li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Excel;
