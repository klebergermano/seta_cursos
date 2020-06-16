import React, { Component } from "react";
import { Animated } from "react-animated-css";

class Introducao extends Component {
  state = {};
  render() {
    return (
      <div className="modulos_informatica " id="modulo-introducao">
        <div className="modulo_content">
          <div className="bloco_1">
            <Animated
              animationIn="fadeIn"
              animationOut="fadeOut"
              isVisible={true}
            >
              <h1>Introdução a Informática</h1>
            </Animated>
            <Animated
              animationIn="slideInUp"
              animationOut="fadeOut"
              isVisible={true}
              animationInDuration={1000}
            >
              <div className="resumo">
                <p>
                  Informática é um termo usado para descrever o estudo e o
                  desenvolvimento das tecnologias de informação em prol das
                  pessoas, organizações e sociedades.
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
                  <li>Origem da Informática</li>
                  <li>O que são computadore</li>
                  <li>O uso da Tecnologia </li>

                  <li>Tipos de Computadores</li>

                  <li>Nomeclaturas e Terminologias</li>
                  <li>Sistema Computacional</li>
                  <li>Hadwares e Sofwares</li>
                  <li>Nomeclaturas e Terminologias</li>
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
                  src={require("../../../../assets/img/informatica/modulo_introducao.png")}
                />
              </Animated>
            </figure>
          </div>
        </div>
      </div>
    );
  }
}

export default Introducao;
