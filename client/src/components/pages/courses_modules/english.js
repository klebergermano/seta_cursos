import React, { Component } from "react";

class Course_Computing extends Component {
  state = {};
  render() {
    return (
      <div className="col-12  courses_modules" id="computing_course">
        <div id="info_course_1">
          <h2>CURSO DE INFORMÁTICA</h2>

          <div id="computing_masonry">
            {/*-----------Module---------*/}
            <div className="modules col--3x">
              <h3>Windows Módulo 1 e 2</h3>
              <p>
                <li>Ferramentas do Sistema</li>
                <li> Personalização / Customização</li>
                <li>Configuração Atualização</li>
                <li> Segurança Gerenciamento e Manipulação de Arquivos </li>
                <li>Gerencimaneo de Programas</li>
              </p>
            </div>
            {/* ----- Windows Módulo 1*/}
            <div className="modules col--1x">
              <h3>Pacote Office</h3>
              <p>
                <li>Word</li>
                <li>Excel</li>
                <li>Power Point</li>
              </p>
            </div>
            {/* ----- Windows Módulo 1*/}
            <div className="modules col--2x">
              <h3>Redes</h3>
              <p>
                <li>O que é Rede </li>
                <li>O que é Internet</li>
                <li>Navegadores</li>
                <li>Navegadores</li>
                <li>Navegadores</li>
                <li>Email Sites</li>
              </p>
            </div>
            {/* ----- Windows Módulo 1*/}
            <div className="modules col--2x">
              <h3>Hadware</h3>
              <p>
                <li>O que é Rede </li>
                <li>O que é Internet</li>
                <li>Navegadores</li>
              </p>
            </div>
            {/* ----- Windows Módulo 1*/}
            <div className="modules col--3x">
              <h3>Instrodução a Informática</h3>
              <p>
                <li>Origem e Conceito</li>
                <li> Nomeclaturas e Terminologias</li>
              </p>
            </div>
            {/* ----- Windows Módulo 1*/}
            <div className="modules col--3x">
              <h3>Celulares</h3>
              <p>
                <li>O que são Smartphones</li>
                <li> Lorem Ipsum </li>
              </p>
            </div>
            {/* ----- Windows Módulo 1*/}
            <div className="modules col--3x">
              <h3>Interfaces</h3>
              <p>
                <li>Ferramentas do Sistema</li>
                <li> Personalização / Customização</li>
              </p>
            </div>
            {/* ----- Windows Módulo 1*/}
            <div className="modules col--1x">
              <h3>Impressão de Arquivos</h3>
              <p>
                <li>Ferramentas do Sistema</li>
              </p>
            </div>
            {/* ----- Windows Módulo 1*/}
          </div>
        </div>
      </div>
    );
  }
}

export default Course_Computing;
