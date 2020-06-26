import React, { Component } from "react";
import { Animated } from "react-animated-css";
import NavInformatica from "./modulos_informatica/navInformatica";

import Introducao from "./modulos_informatica/Introducao";
import Hardware from "./modulos_informatica/Hardware";
import Dispositivos from "./modulos_informatica/Dispositivos";
import Impressao from "./modulos_informatica/Impressao";

import Windows from "./modulos_informatica/Windows";
import Office from "./modulos_informatica/Office";
import Internet from "./modulos_informatica/Internet";
import Rede from "./modulos_informatica/Rede";
import Impressoras from "./modulos_informatica/Impressoras";

import Celulares from "./modulos_informatica/Celulares";

class Informatica extends Component {
  state = {};

  render() {
    return (
      <div className="col-12" id="bg_informatica">
        <div id="bg_resumo_informatica">
          <div className="resumo_informatica">
            <h1 className="title">Informática Completo</h1>
            <p>
              Aprensentamos nesse curso INFORMÁTICA COMPLETO os principais
              conceitos de informática que incluem: hardwares de computadores,
              sistema opacional Windows e programas, principais programas do
              Pacote Office, e também dicas de navegação na internet.
              <span>
                <b>
                  &nbsp; Confira abaixo os principais módulos do nosso curso e
                  seus conteúdos
                </b>
              </span>
            </p>
          </div>
        </div>
        <NavInformatica />
        <div id="container_informatica">
          <Introducao />
          <Hardware />
          <Dispositivos />
          <Impressao />

          <Windows />
          <Office />
          <Internet />
          <Rede />
          <Impressoras />
          <Celulares />
        </div>
      </div>
    );
  }
}

export default Informatica;
