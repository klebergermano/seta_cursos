import React, { Component } from "react";
import { Animated } from "react-animated-css";

class Celulares extends Component {
  state = {};
  render() {
    return (
      <div className="modulos_informatica " id="modulo-celulares">
        <div className="modulo_content">
          <div className="bloco_1">
            <Animated
              animationIn="fadeIn"
              animationOut="fadeOut"
              isVisible={true}
              animationInDuration={1500}
            >
              <h1>Celulares</h1>
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
                  <li>O que são Smartphones</li>
                  <li>Aplicativos</li>
                  <li>Email pelo Celular</li>
                  <li>Tranferência de arquivos</li>
                  <li>PlayStore</li>
                  <li>Configurações</li>
                  <li>Formatação do Celular</li>
                  <li>Papel de Parede</li>
                  <li>Print</li>
                  <li>Instalação Whatsup</li>
                  <li>Instalação do Messenger</li>
                  <li>Aplicativos de Foto</li>
                  <li>Backup </li>
                  <li>Nuvem</li>
                  <li>Senhas</li>
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
                  src={require("../../../../assets/img/informatica/modulo_celulares.png")}
                />
              </Animated>
            </figure>
          </div>
        </div>
      </div>
    );
  }
}

export default Celulares;
