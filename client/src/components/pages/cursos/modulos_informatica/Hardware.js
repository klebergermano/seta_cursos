import React, { Component } from "react";
import { Animated } from "react-animated-css";
import ImageInformatica from "./ImageInformatica";

class Hadware extends Component {
  state = {};
  render() {
    return (
      <div className="modulos_informatica " id="modulo-hardware">
        <div className="modulo_content">
          <div className="bloco_1">
            <Animated
              animationIn="fadeIn"
              animationOut="fadeOut"
              isVisible={true}
              animationInDuration={1500}
            >
              <h1>Hardware</h1>
            </Animated>
            <Animated
              animationIn="slideInUp"
              animationOut="fadeOut"
              isVisible={true}
              animationInDuration={1000}
            >
              <div className="resumo">
                <p>
                  Aprenda e amplie seus conhecimentos sobre o hardware de
                  computador entendendo as funções específicas de cada peça e
                  quais são recomendadas na hora de fazer um upgrade em seu
                  computador.
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
                  <li>Instalação de Dispositivos e Periférico</li>
                  <li>Instalação de Dispositivos</li>
                  <li>Normas de Segurança </li>
                  <li> Montagem da CPU</li>
                  <li> Troca de Peças </li>
                  <li>Estrutura da Placa Mãe</li>
                  <li>Tipos de HD</li>
                  <li> Conceito de Memória Ram</li>
                  <li> Conceito de Processadores </li>
                  <li>Fontes e Alimentação da CPU</li>
                  <li>Dicas de Compra de Equipamentos</li>
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
                  imgDesktop={"modulo_hardware.png"}
                  imgMobile={"modulo_hardware-mob.png"}
                />
              </Animated>
            </figure>
          </div>
        </div>
      </div>
    );
  }
}

export default Hadware;
