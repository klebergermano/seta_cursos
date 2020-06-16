import React, { Component } from "react";
import { Animated } from "react-animated-css";

class Hadware extends Component {
  state = {};
  render() {
    return (
      <div className="modulos_informatica " id="modulo-hadware">
        <div className="modulo_content">
          <div className="bloco_1">
            <Animated
              animationIn="fadeIn"
              animationOut="fadeOut"
              isVisible={true}
              animationInDuration={1500}
            >
              <h1>Hadware</h1>
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
                  hardware também. É importante saber, por exemplo, o que é um
                  HD (Hard Disk), para que serve o processador, qual a função da
                  memória RAM e assim por diante.
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
                <img
                  src={require("../../../../assets/img/informatica/modulo_hadware.png")}
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
