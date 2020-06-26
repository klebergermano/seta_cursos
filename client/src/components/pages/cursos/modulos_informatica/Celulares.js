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
                  O aluno aprendera sobre formatação, Backup, tranferencia de
                  arquivos e configurações de celulares.
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
                  <li>Conceitos de Smartphones</li>
                  <li>Aplicativos</li>
                  <li>Emails</li>
                  <li>Aplicativos de Menssagem</li>
                  <li>Tranferência de arquivos</li>
                  <li>Configurações</li>
                  <li>Formatação </li>
                  <li>Personalização</li>
                  <li>Aplicativos de Foto</li>
                  <li>Backup </li>
                  <li>Senhas e Proteção de Dados</li>
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
