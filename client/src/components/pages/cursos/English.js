import React, { Component } from "react";
import NavIngles from "./modulos_ingles/NavIngles";
import SobreIngles from "./modulos_ingles/SobreIngles";
import ModulosIngles from "./modulos_ingles/ModulosIngles";

import Modulo_1 from "./modulos_ingles/Modulo_1";
import Modulo_2 from "./modulos_ingles/Modulo_2";
import Modulo_3 from "./modulos_ingles/Modulo_3";
class English extends Component {
  state = {};
  render() {
    return (
      <div className="col-12" id="bg_english">
        <div id="bg_resumo_english">
          <h1>Curso de Inglês</h1>

          <div id="resumo_english">
            <p>
              Nosso curso foi feito para você aprender inglês da mesma forma que
              poliglotas (pessoas que falam varios idiomas), aprendem. Com uma
              duração de três anos nosso curso é dividido e 3 etapas: Básico,
              Intermediário e Avançado.
            </p>
          </div>
        </div>
        <div id="english_content">
          <div id="bloco_1">
            <div id="bg_modulos">
              <NavIngles />
              <SobreIngles />
              <ModulosIngles />
            </div>
            <div id="banner">
              <img
                src={require("../../../assets/img/english/learn_english2.png")}
              />
              <li>
                <span>* PARA TODAS AS IDADES! </span>
              </li>
              <li>
                <span>*</span> Curso com <span> Certificado! </span>
              </li>
              <li>
                <span>*</span> Material Didático <span>Grátis!</span>
              </li>
              <li>
                <span>*</span> Turmas reduzidas!
              </li>
              <li>
                <span>*</span> Metodologia Moderna!
              </li>
              <li>
                <span>*</span> Focado no domínio do idioma!
              </li>
              <p>
                Entre em <a href="#">Contato </a>e Saiba Mais!
              </p>
            </div>
          </div>
          <figure id="people_english" className="modulos">
            <img
              src={require("../../../assets/img/english/people_english.png")}
            />
          </figure>
        </div>
      </div>
    );
  }
}

export default English;
