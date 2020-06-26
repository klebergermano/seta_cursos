import React, { Component } from "react";
import { Animated } from "react-animated-css";
import ImageInformatica from "./ImageInformatica";

class Rede extends Component {
  state = {};
  render() {
    return (
      <div className="modulos_informatica " id="modulo-rede">
        <div className="modulo_content">
          <div className="bloco_1">
            <Animated
              animationIn="fadeIn"
              animationOut="fadeOut"
              isVisible={true}
              animationInDuration={1500}
            >
              <h1>Redes</h1>
            </Animated>
            <Animated
              animationIn="slideInUp"
              animationOut="fadeOut"
              isVisible={true}
              animationInDuration={1000}
            >
              <div className="resumo">
                <p>
                  Você aprenderá os fundamentos sobre funcionamento de redes de
                  computadores bem como equipamentos de redes, como hubs,
                  switches, roteadores e crimpagem.
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
                  imgDesktop={"modulo_rede.png"}
                  imgMobile={"modulo_rede-mob.png"}
                />
              </Animated>
            </figure>
          </div>
        </div>
      </div>
    );
  }
}

export default Rede;
