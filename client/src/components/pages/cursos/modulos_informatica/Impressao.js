import React, { Component } from "react";
import { Animated } from "react-animated-css";
import ImageInformatica from "./ImageInformatica";

class Impressao extends Component {
  state = {};
  render() {
    return (
      <div className="modulos_informatica " id="modulo-impressao">
        <div className="modulo_content">
          <div className="bloco_1">
            <Animated
              animationIn="fadeIn"
              animationOut="fadeOut"
              isVisible={true}
              animationInDuration={1500}
            >
              <h1>Impressao</h1>
            </Animated>
            <Animated
              animationIn="slideInUp"
              animationOut="fadeOut"
              isVisible={true}
              animationInDuration={1000}
            >
              <div className="resumo">
                <p>
                  O Aluno aprendera a Scanear, tranferir seus arquivos via
                  Email, Celular ou Computador para impressão, formatos de
                  arquivos ideais, formato de cores CMYK e resolução de imagens
                  e configuração de Pixeis por Polegadas para uma impressão de
                  alta qualidade.
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
                  <li>O que são Impressoras</li>
                  <li>Tipos de Impressoras</li>
                  <li>Como imprimir</li>
                  <li>Arquivos para Impressão</li>
                  <li>Como Scanear</li>
                  <li>Tipos de Papel</li>
                  <li>Configurações </li>
                  <li>Instalação da Impressora</li>
                  <li>DPI - (Pixeis por Polegada)</li>
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
                  imgDesktop={"modulo_impressao.png"}
                  imgMobile={"modulo_impressao-mob.png"}
                />
              </Animated>
            </figure>
          </div>
        </div>
      </div>
    );
  }
}

export default Impressao;
