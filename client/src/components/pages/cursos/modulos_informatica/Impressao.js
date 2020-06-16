import React, { Component } from "react";
import { Animated } from "react-animated-css";

class Impressao extends Component {
  state = {};
  render() {
    return (
      <div className="modulos_informatica " id="modulo-impressao">
        <div className="modulo_content">
          <div className="bloco_1">
            <Animated
              animationIn="fadeIn"
              animationOut="fadeOut"
              isVisible={true}
              animationInDuration={1500}
            >
              <h1>Impressao</h1>
            </Animated>
            <Animated
              animationIn="slideInUp"
              animationOut="fadeOut"
              isVisible={true}
              animationInDuration={1000}
            >
              <div className="resumo">
                <p>
                  Impressora ou dispositivo de impressão que, quando conectado a
                  um computador ou a uma rede de computadores, tem a função de
                  dispositivo de saída, imprimindo textos, gráficos ou qualquer
                  outro resultado de uma aplicação.
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
                  <li>O que são Impressoras</li>
                  <li>Tipos de Impressoras</li>
                  <li>Como imprimir</li>
                  <li>Como Scanear</li>
                  <li>Tipos de Papel</li>
                  <li>Configuração </li>
                  <li>Instalação da Impressora</li>
                </div>
              </div>
            </Animated>
          </div>
          <div className="bloco_2">
            <figure>
              <Animated
                animationIn="slideInRight"
                animationOut="fadeOut"
                isVisible={true}
                animationInDuration={1000}
              >
                <img
                  src={require("../../../../assets/img/informatica/modulo_impressao.png")}
                />
              </Animated>
            </figure>
          </div>
        </div>
      </div>
    );
  }
}

export default Impressao;
