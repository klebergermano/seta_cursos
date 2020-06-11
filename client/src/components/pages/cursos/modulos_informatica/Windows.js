import React, { Component } from "react";
import { Animated } from "react-animated-css";

class Windows extends Component {
  state = {};
  render() {
    return (
      <div className="modulos_informatica " id="modulo-windows">
        <div className="modulo_content">
          <Animated
            animationIn="fadeIn"
            animationOut="fadeOut"
            isVisible={true}
          >
            <h1>Windows</h1>
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
                  hardware também. É importante saber, por exemplo.
                </p>
              </div>

              <div className="conteudo_modulo">
                <h3>Conteúdo Programático</h3>
                <div>
                  <li>Introdução ao Windows 10</li>
                  <li>Area de Trabalho</li>
                  <li>Explorador de Arquivos</li>
                  <li>Menu Iniciar</li>
                  <li>Manipulação de Pastas e Arquivos</li>
                  <li>Armazenamento</li>
                  <li>Configurações</li>
                  <li>Excluindo Aruqivos e Pastas</li>
                  <li>Uso da Lixeira e Restauração</li>
                  <li>Aplicativos e Programas </li>
                  <li>Atualização e Segurança</li>
                  <li>Personalização e Configuração</li>
                  <li>Ferramentas do Sistema</li>
                  <li>Painel de Controle </li>
                  <li>Manutenção do Sistema</li>
                  <li>Gerenciamento de Programas</li>
                  <li>Instalação e Formatação</li>
                  <li>Multiplas Areas de Trabalho</li>
                  <li>Extensões de Arquivos</li>
                  <li>Arquivos e Pastas Ocultas</li>
                  <li>Promp de Comando CMD</li>
                  <li>Explorador Avançado de Arquivos</li>
                  <li>Editor de Registro</li>
                  <li>Acesso Remoto</li>
                  <li>Máquinas Virtuais</li>
                  <li>Instalação de Programas </li>
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
                    src={require("../../../../assets/img/informatica/modulo_windows.png")}
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

export default Windows;
