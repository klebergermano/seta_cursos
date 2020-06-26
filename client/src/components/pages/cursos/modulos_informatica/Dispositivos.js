import React, { Component } from "react";
import { Animated } from "react-animated-css";
import ImageInformatica from "./ImageInformatica";

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
              <h1>Interfaces</h1>
            </Animated>
            <Animated
              animationIn="slideInUp"
              animationOut="fadeOut"
              isVisible={true}
              animationInDuration={1000}
            >
              <div className="resumo">
                <p>
                  O aluno aprendera alem de digitação diferentes interfaces como
                  touchpad e o funcionamento de telas touchscreen, padrão QWERTY
                  e atalhos ASCII
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
                <ImageInformatica
                  imgDesktop={"modulo_dispositivos.png"}
                  imgMobile={"modulo_dispositivos-mob.png"}
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
