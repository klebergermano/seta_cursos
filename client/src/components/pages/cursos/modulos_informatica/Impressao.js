import React, { Component } from "react";
import { Animated } from "react-animated-css";

class Impressao extends Component {
  state = {};
  render() {
    return (
      <div className="modulos_informatica " id="modulo-impressao">
        <div className="modulo_content">
          <Animated
            animationIn="fadeIn"
            animationOut="fadeOut"
            isVisible={true}
          >
            <h1>Impressao</h1>
            <Animated
              animationIn="slideInUp"
              animationOut="fadeOut"
              isVisible={true}
              animationInDuration={2000}
            >
              <div className="resumo">
                <p>
                  Impressora ou dispositivo de impressão que, quando conectado a
                  um computador ou a uma rede de computadores, tem a função de
                  dispositivo de saída, imprimindo textos, gráficos ou qualquer
                  outro resultado de uma aplicação.
                </p>
              </div>

              <div className="conteudo_modulo">
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
            </Animated>
          </Animated>
        </div>
      </div>
    );
  }
}

export default Impressao;
