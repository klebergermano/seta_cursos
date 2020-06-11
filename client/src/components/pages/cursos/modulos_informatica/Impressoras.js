import React, { Component } from "react";
import { Animated } from "react-animated-css";

class Impressoras extends Component {
  state = {};
  render() {
    return (
      <div className="modulos_informatica " id="modulo-impressoras">
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
          <h1>Impressoras</h1>
          <Animated
            animationIn="slideInUp"
            animationOut="fadeOut"
            isVisible={true}
            animationInDuration={2000}
          >
            <div>
              <p>Conteudo Impressoras</p>
            </div>
            <div>
              <h2>Conteúdo Programático</h2>
              <div>
                <li>Origem da Informática </li>
              </div>
            </div>
          </Animated>
        </Animated>
      </div>
    );
  }
}

export default Impressoras;
