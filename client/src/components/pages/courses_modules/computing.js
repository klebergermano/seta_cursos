import React, { Component } from "react";
import { Animated } from "react-animated-css";

class Course_Computing extends Component {
  state = {};
  componentDidMount() {
    let li_module = document.querySelector("#windows");
    li_module.classList.add("mod_active");

    let sub_module = (document.querySelector("#sub_windows").style.display =
      "block");
  }

  handleDisplayModules(e) {
    var sub_modules = document.getElementsByClassName("sub_modules");
    for (var i = 0; i < sub_modules.length; i++) {
      sub_modules[i].style.display = "none";
    }

    var name = e.target.id;
    let module = document.querySelector("#sub_" + name);
    document.querySelector(".mod_active").classList.remove("mod_active");
    document.querySelector("#" + name).classList.add("mod_active");
    setTimeout(() => {
      module.style.display = "block";
    }, 0);
  }

  render() {
    return (
      <div className="col-12  courses_modules" id="computing_course">
        <h2>CURSO DE INFORMÁTICA</h2>
        <div id="content_computing">
          <div id="list_computing">
            <ul>
              <li
                id="intro_info"
                className=""
                onMouseOver={this.handleDisplayModules}
              >
                Instrodução a Informática
              </li>
              <li id="impressao" onMouseOver={this.handleDisplayModules}>
                Inpressão de Arquivos{" "}
              </li>
              <li id="interfaces" onMouseOver={this.handleDisplayModules}>
                Interfaces
              </li>
              <li id="windows" onMouseOver={this.handleDisplayModules}>
                Windows 10
              </li>
              <li id="celulares" onMouseOver={this.handleDisplayModules}>
                Celulares / Smartphones
              </li>
              <li id="hadware" onMouseOver={this.handleDisplayModules}>
                Hadware
              </li>
              <li id="internet" onMouseOver={this.handleDisplayModules}>
                Internet
              </li>
              <li id="office" onMouseOver={this.handleDisplayModules}>
                Pacote Office
              </li>
              <li
                id="sistemas_operacionais"
                onMouseOver={this.handleDisplayModules}
              >
                Sistemas Operacionais
              </li>
              <li id="redes" onMouseOver={this.handleDisplayModules}>
                Rede
              </li>
              <li
                id="conceitos_programacao"
                onMouseOver={this.handleDisplayModules}
              >
                Conceitos de Programação
              </li>
            </ul>
          </div>

          <div className="sub_info_computing">
            <div className=" sub_modules  sub_intro_info" id="sub_intro_info">
              <Animated
                animationIn="fadeIn"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div className="modules m_sub_intro_info">
                  <h2>introdução a Informática</h2>
                  <Animated
                    animationIn="slideInUp"
                    animationOut="fadeOut"
                    isVisible={true}
                    animationInDuration={2000}
                  >
                    <h3>Introdução</h3>
                    <div>
                      <p>
                        <p>
                          Informática é um termo usado para descrever o estudo e
                          o desenvolvimento das tecnologias de informação em
                          prol das pessoas, organizações e sociedades.
                        </p>
                        <li>Origem da Informática </li>
                        <li> O que são computadore</li>
                        <li>Tipos de Computadores</li>
                        <li>Nomeclaturas e Terminologias</li>
                        <li> O uso da Tecnologia no dia-a-dia</li>
                      </p>
                    </div>
                  </Animated>
                </div>
              </Animated>
            </div>

            <div className="sub_modules  sub_impressao" id="sub_impressao">
              <Animated
                animationIn="fadeIn"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div className=" modules m_sub_impressao">
                  <h2>Impressão</h2>
                </div>
              </Animated>
            </div>
            <div className="sub_modules bg_modules" id="sub_interfaces">
              <Animated
                animationIn="fadeIn"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div className="modules m_sub_interfaces">
                  <h2>Interfaces</h2>
                </div>
              </Animated>
            </div>

            <div className=" sub_modules " id="sub_windows">
              <Animated
                animationIn="fadeIn"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div className="modules m_sub_windows">
                  <h2>Windows 10</h2>
                  <div id="windows_modulos">
                    <Animated
                      animationIn="slideInUp"
                      animationOut="fadeOut"
                      isVisible={true}
                      animationInDuration={1000}
                    >
                      <div className="div">
                        <Animated
                          animationIn="slideInUp"
                          animationOut="fadeOut"
                          isVisible={true}
                          animationInDuration={2000}
                        >
                          <h3>Windows Módulo 01</h3>
                          <div>
                            <p>
                              <li>Introdução ao Windows 10 </li>
                              <li>Area de Trabalho </li>
                              <li>Explorador de Arquivos</li>
                              <li>Menu Iniciar</li>
                              <li>Manipulação de Pastas</li>
                              <li>Arquivos Armazenamento</li>
                              <li>Configurações</li>
                              <li> Excluindo Arquivos e Pastas </li>
                              <li>Uso da Lixeira e Restauração</li>
                              <li> Aplicativos e Programas Nativos</li>
                            </p>
                          </div>
                        </Animated>
                      </div>
                    </Animated>

                    <Animated
                      animationIn="slideInUp"
                      animationOut="fadeOut"
                      isVisible={true}
                      animationInDuration={1000}
                    >
                      <div className="div">
                        <Animated
                          animationIn="fadeIn"
                          animationOut="fadeOut"
                          isVisible={true}
                          animationInDuration={3000}
                        >
                          <h3>Windows Módulo 2 </h3>
                          <div>
                            {" "}
                            <p>
                              <li>Atualização e Segurança </li>
                              <li>Personalização e Configuração</li>
                              <li> Ferramentas do Sistema</li>
                              <li> Painel de Controle </li>
                              <li>Manutenção do Sistema</li>
                              <li>Gerenciamento de Programas</li>
                              <li>Instalação e Formatação</li>
                              <li> Multiplas Areas de Trabalho</li>
                              <li> Extensões de Arquivos</li>
                              <li>Arquivos e Pastas Ocultas</li>
                              <li> Promp de Comando - CMD </li>
                              <li> Explorador Avançado de Arquivos </li>
                              <li>Editor de Registro </li>
                              <li>Acesso Remoto </li>
                              <li>Máquinas Virtuais</li>
                            </p>
                          </div>
                        </Animated>
                      </div>
                    </Animated>
                  </div>
                </div>
              </Animated>
            </div>

            <div className="sub_modules " id="sub_celulares">
              <Animated
                animationIn="fadeIn"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div className="modules m_sub_celulares">
                  <h2>Celulares</h2>
                </div>
              </Animated>
            </div>

            <div className="sub_modules " id="sub_hadware">
              <div className="modules m_sub_hadware">
                <h2>Hadware</h2>
                <Animated
                  animationIn="slideInUp"
                  animationOut="fadeOut"
                  isVisible={true}
                  animationInDuration={1000}
                >
                  <div className="div">
                    <Animated
                      animationIn="slideInUp"
                      animationOut="fadeOut"
                      isVisible={true}
                      animationInDuration={2000}
                    >
                      <h3>Hadware Módulo 01</h3>
                      <div>
                        <p>
                          <li>Instalação de Hadware e Periférico </li>
                          <li>Instalação de Dispositivos</li>
                          <li>Normas de Segurança</li>
                        </p>
                      </div>
                    </Animated>
                  </div>
                </Animated>
                <Animated
                  animationIn="slideInUp"
                  animationOut="fadeOut"
                  isVisible={true}
                  animationInDuration={1000}
                >
                  <div className="div">
                    <Animated
                      animationIn="slideInUp"
                      animationOut="fadeOut"
                      isVisible={true}
                      animationInDuration={2000}
                    >
                      <h3>Hadware Módulo 02</h3>
                      <div>
                        <p>
                          <li>Montagem da CPU</li>
                          <li>Troca de Peças</li>
                          <li> Estrutura da Placa Mãe</li>
                          <li> Tipos HD</li>
                          <li>Conceito de Memória Ram</li>
                          <li> Conceito de Processadores</li>
                          <li>Fontes e Alimentação da CPU</li>
                          <li> Dicas de Compra de Equipamentos </li>
                        </p>
                      </div>
                    </Animated>
                  </div>
                </Animated>
              </div>
            </div>

            <div className="sub_modules " id="sub_internet">
              <Animated
                animationIn="fadeIn"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div className="modules m_sub_internet">
                  <h2>Internet</h2>
                </div>
              </Animated>
            </div>

            <div className="sub_modules " id="sub_office">
              <Animated
                animationIn="fadeIn"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div className="modules m_sub_office">
                  <h2>Pacote Office</h2>
                </div>
              </Animated>
            </div>
            <div className="sub_modules " id="sub_sistemas_operacionais">
              <Animated
                animationIn="fadeIn"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div className="modules m_sub_sistemas_operacionais">
                  <h2>Sistemas Operacionais S.O</h2>
                </div>
              </Animated>
            </div>

            <div className="sub_modules " id="sub_redes">
              <Animated
                animationIn="fadeIn"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div className="modules m_sub_redes">
                  <h2>Redes</h2>
                </div>
              </Animated>
            </div>

            <div className="sub_modules " id="sub_conceitos_programacao">
              <Animated
                animationIn="fadeIn"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div className="modules m_sub_conceitos_programacao">
                  <h2>Conceitos de Programação</h2>
                </div>
              </Animated>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Course_Computing;
