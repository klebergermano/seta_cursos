import React, { Component } from "react";
import { Animated } from "react-animated-css";

class Internet extends Component {
  state = {};
  render() {
    return (
      <div className="modulos_informatica " id="modulo-internet">
        <div className="modulo_content">
          <div className="bloco_1">
            <Animated
              animationIn="fadeIn"
              animationOut="fadeOut"
              isVisible={true}
              animationInDuration={1500}
            >
              <h1>Internet</h1>
            </Animated>
            <Animated
              animationIn="slideInUp"
              animationOut="fadeOut"
              isVisible={true}
              animationInDuration={1000}
            >
              <div className="resumo">
                <p>
                  Alem de boas práticas e terminologias sobre internet e o aluno
                  também aprendera conceitos como Download, Upload, Emails,
                  Cookies protolocolo HTTP e IOT (Internet das Coisas).
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
                  <li>Introdução a Terminilogias</li>
                  <li>Navegadores</li>
                  <li>Email</li>
                  <li>Sites</li>
                  <li>HTTP</li>
                  <li>Download e Upload</li>
                  <li>Pesquisas Avançadas</li>
                  <li>Links</li>
                  <li>Atalhos</li>
                  <li>IP</li>

                  <li>Uso de Emails</li>
                  <li>IOT (Internet das Coisas)</li>
                  <li>Conceitos de Nuvem</li>
                  <li>Malwares e Virus</li>
                  <li>Cookies</li>
                  <li>Extesões</li>
                  <li>Atalhos</li>
                  <li>Personalização de Navegadores</li>
                  <li>Conceito de Servidores</li>
                  <li>Aplicativos Online</li>
                  <li>Contas Integradas</li>
                  <li>Acesso Remoto</li>
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
                  src={require("../../../../assets/img/informatica/modulo_internet.png")}
                />
              </Animated>
            </figure>
          </div>
        </div>
      </div>
    );
  }
}

export default Internet;
