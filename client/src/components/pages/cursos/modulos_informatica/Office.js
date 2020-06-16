import React, { Component } from "react";
import { Animated } from "react-animated-css";

class Office extends Component {
  state = {};
  render() {
    return (
      <div className="modulos_informatica " id="modulo-office">
        <div className="modulo_content">
          <div className="bloco_1">
            <Animated
              animationIn="fadeIn"
              animationOut="fadeOut"
              isVisible={true}
              animationInDuration={1500}
            >
              <h1>Office</h1>
            </Animated>
            <Animated
              animationIn="slideInUp"
              animationOut="fadeOut"
              isVisible={true}
              animationInDuration={1000}
            >
              <div className="resumo">
                <p>
                  O mercado de trabalho exige conhecimentos básicos de
                  informática, não só no que se refere aos softwares, mas ao
                  hardware também. É importante saber, por exemplo.
                </p>
              </div>
            </Animated>
            <Animated
              animationIn="fadeInUp"
              animationOut="fadeOut"
              isVisible={true}
              animationInDuration={1200}
            >
              <div className="conteudo">
                <h3>Conteúdo Programático</h3>
                <div>
                  <span className="span_office">
                    <h4>Word</h4>
                    <li>Instrodução</li>
                    <li>Interface </li>
                    <li>Cabeçalho e Rodapé</li>
                    <li>Formatação de Texto</li>
                    <li>Orientação de Página</li>
                    <li>Layout de Página</li>
                    <li>Inserção de Imagens</li>
                    <li>Area de Tranferência</li>
                    <li>Armazenamento de Arquivos</li>
                    <li>Templates de Documento</li>
                    <li>Formataçao de Curriculos</li>
                    <li>Listas</li>
                    <li>TabulaçãoMala Direta</li>
                    <li>Sumário automatico</li>
                    <li>Norma ABNT</li>
                    <li>Design de Página</li>
                    <li>Formatação com Estilo</li>
                    <li>Teclad de Atalho</li>
                    <li>Inserindo Objetos</li>
                    <li>Formas 3D</li>
                    <li>Trabalhando com Documentos</li>
                    <li>Corretor Ortográfico</li>
                    <li>Modo de Exibição</li>
                    <li>Recurso Diga-me</li>
                  </span>
                  <span className="span_office">
                    <h4>Excel</h4>
                    <li>Interface</li>
                    <li>Area de Tranferência</li>
                    <li>Modo de Exibição</li>
                    <li>Layout de Página</li>
                    <li>Pastas de Trabalho</li>
                    <li>Conceito de Planilhas</li>
                    <li>Conceitos de Tabelas</li>
                    <li>Navegação</li>
                    <li>Inserção de Informações</li>
                    <li>Operações Aritméticas</li>
                    <li>Personalização de Tabelas</li>

                    <li>Formatar como tabela</li>
                    <li>Formatação condicionais</li>
                    <li>Manipulação de Gráficos</li>
                    <li>Mini Gráficos</li>
                    <li>Trabalhando com Planilhas</li>
                    <li>Trabalhando com Tabelas</li>
                    <li>Tabela Dinâmica</li>
                    <li>Funções Condicionais</li>
                    <li>Formulas e Funções </li>
                    <li>Hyper Links</li>
                    <li>Funções Financeiras</li>
                    <li>Cálculo com Data e Hora</li>
                    <li>Atalhos</li>
                    <li>Seleção Inteligente</li>
                    <li>Filtro e Classificaçao</li>
                    <li>Impressão de Relatórios</li>
                  </span>
                  <span className="span_office">
                    <h4>Powerpoint</h4>
                    <li>Instrodução Power Point</li>
                    <li>Interface</li>
                    <li>Modo de Apresentação</li>
                    <li>Modo de Edição</li>
                    <li>Criação de Slides</li>
                    <li>Efeito de Animação</li>
                    <li>Efeito de Transição</li>
                    <li>Design de Slide </li>
                    <li>Inserção de Objetos</li>
                    <li>Inserção de Vídeos</li>
                    <li>Objetos 3D</li>
                    <li>Gravação de Slides</li>
                    <li>Apresentação em Vídeo</li>
                    <li>Hyperlinks</li>
                    <li>Telas Compartilhadas</li>
                    <li>Teclas de Atalhos</li>
                    <li>Dicas de Apresentaçao</li>
                    <li>Dicas de Seminários</li>
                  </span>
                </div>
              </div>
            </Animated>
          </div>
          {/*bloco 1 */}

          <div className="bloco_2">
            <figure>
              <Animated
                animationIn="slideInRight"
                animationOut="fadeOut"
                isVisible={true}
                animationInDuration={1000}
              >
                <img
                  src={require("../../../../assets/img/informatica/modulo_office.png")}
                />
              </Animated>
            </figure>
          </div>
        </div>
      </div>
    );
  }
}

export default Office;
