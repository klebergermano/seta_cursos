import React, { Component } from "react";
import { Animated } from "react-animated-css";

class Dispositivos extends Component {
  state = {};
  render() {
    return (
      <div className="modulos_informatica " id="modulo-dispositivos">
        <div className="modulo_content">
          <div className="bloco_1">
            <Animated
              animationIn="fadeIn"
              animationOut="fadeOut"
              isVisible={true}
              animationInDuration={1500}
            >
              <h1>Dispositivos</h1>
            </Animated>
            <Animated
              animationIn="slideInUp"
              animationOut="fadeOut"
              isVisible={true}
              animationInDuration={1000}
            >
              <div className="resumo">
                <p>
                  Em Informática existem uma grande variedade de dispositivos
                  conhece-los é fundamental para entender com mais profundidade
                  esse mundo da Informática.
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
                  <li>Digitação</li>
                  <li>Padrão QWERTY</li>
                  <li>Teclado e Mouse</li>
                  <li>Telas e Monitores</li>
                  <li>Microfones</li>
                  <li>Telas Touch Screen</li>
                  <li>Touch Pad</li>
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
                  src={require("../../../../assets/img/informatica/modulo_dispositivos.png")}
                />
              </Animated>
            </figure>
          </div>
        </div>
      </div>
    );
  }
}

export default Dispositivos;
