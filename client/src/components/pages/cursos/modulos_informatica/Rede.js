import React, { Component } from "react";
import { Animated } from "react-animated-css";

class Rede extends Component {
  state = {};
  render() {
    return (
      <div className="modulos_informatica " id="modulo-rede">
        <div className="modulo_content">
          <Animated
            animationIn="fadeIn"
            animationOut="fadeOut"
            isVisible={true}
          >
            <h1>Rede</h1>
            <Animated
              animationIn="slideInUp"
              animationOut="fadeOut"
              isVisible={true}
              animationInDuration={2000}
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

              <div className="conteudo_modulo">
                <h3>Conteúdo Programático</h3>
                <div>
                  <li>Introdução a Rede</li>
                  <li>Modens, Roteadores e Switchs</li>
                  <li>Equipamentos SecundariosCompartilhamento de Aquivos</li>
                  <li>Conexão</li>
                  <li>Roteamento</li>
                  <li>Crimpagem</li>
                  <li>Criação de Rede Doméstica</li>
                  <li>Grupo de Trabalho</li>
                  <li>Cabeamento</li>
                  <li>Rede Wifi</li>
                  <li>Termonologias</li>
                  <li>Configuração de IP / IPV4</li>
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
                    src={require("../../../../assets/img/informatica/modulo_rede.png")}
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

export default Rede;
