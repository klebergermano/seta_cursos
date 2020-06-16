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
                  O mercado de trabalho exige conhecimentos básicos de
                  informática, não só no que se refere aos softwares, mas ao
                  hardware também. É importante saber, por exemplo, o que é um
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
                  <li>Introdução a Internet </li>
                  <li>A Origem da Internet</li>
                  <li>Navegadores</li>
                  <li>Navegando na Internet</li>
                  <li>Email</li>
                  <li>Sites</li>
                  <li>Redes Sociais</li>
                  <li>O que é Download e Upload</li>
                  <li>Dicas de Pesquisa</li>
                  <li>O que são Links</li>
                  <li>Atalhos</li>
                  <li>Teste de Velocidade</li>

                  <li>Criar e Usar Email</li>
                  <li>Provedores de Email</li>
                  <li>IOT (Internet das Coisas)</li>
                  <li>Pesquisa Avançada</li>
                  <li>Baixando e Enviando Arquivos</li>
                  <li>Tipos de Download</li>
                  <li>Malwares e Virus</li>
                  <li>Cookies</li>
                  <li>Histórico</li>
                  <li>Extesões</li>
                  <li>Atalhos</li>
                  <li>Barra de Favoritos</li>
                  <li>Personalização de Navegadores</li>
                  <li>Servidores e Nuvem</li>
                  <li>Aplicativos na Nuvem</li>
                  <li>Contas Integradas</li>
                  <li>Acesso Remoto</li>
                  <li>Serviços Online</li>
                  <li>Linguagens de Programação </li>
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
