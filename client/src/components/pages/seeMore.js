import React, { Component } from "react";
import { Animated } from "react-animated-css";

class SeeMore extends Component {
  state = {};
  render() {
    return (
      <div id="bg_see_more">
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
          <h1 id="see_more">Conheça Nossos Cursos</h1>
        </Animated>
        <div id="content_see_more">
          <Animated
            animationIn="fadeInUp"
            animationOut="fadeOut"
            isVisible={true}
            animationInDelay={200}
            animationInDuration={1200}
          >
            <div className="content_block " id="content_computing">
              <h4>Curso de Informática</h4>
              <p>
                LNunc vel finibus magna. Aliquam euismod eu ante ut eleifend.
                Phasellus quam erat, fringilla sed lectus eget, gravida maximus
                enim. Curabitur euismod in ante et bibendum. Quisque id orci eu
                lorem efficitur dapibus et et eros. Quisque condimentum erat
                quam, id consequat nunc condimentum lacinia.
              </p>
              <a>Saiba Mais</a>
            </div>
          </Animated>
          <Animated
            animationIn="fadeInUp"
            animationOut="fadeOut"
            isVisible={true}
            animationInDelay={300}
            animationInDuration={1200}
          >
            <div className="content_block" id="content_english ">
              <h4>Curso de Inglês</h4>
              <p>
                LNunc vel finibus magna. Aliquam euismod eu ante ut eleifend.
                Phasellus quam erat, fringilla sed lectus eget, gravida maximus
                enim. Curabitur euismod in ante et bibendum. Quisque id orci eu
                lorem efficitur dapibus et et eros. Quisque condimentum erat
                quam, id consequat nunc condimentum lacinia.
              </p>
              <a>Saiba Mais</a>
            </div>
          </Animated>
          <Animated
            animationIn="fadeInUp"
            animationOut="fadeOut"
            isVisible={true}
            animationInDelay={500}
            animationInDuration={1200}
          >
            <div className="content_block " id="content_excel ">
              <h4>Curso de Excel Avançado</h4>
              <p>
                LNunc vel finibus magna. Aliquam euismod eu ante ut eleifend.
                Phasellus quam erat, fringilla sed lectus eget, gravida maximus
                enim. Curabitur euismod in ante et bibendum. Quisque id orci eu
                lorem efficitur dapibus et et eros. Quisque condimentum erat
                quam, id consequat nunc condimentum lacinia.
              </p>
              <a>Saiba Mais</a>
            </div>
          </Animated>
        </div>
      </div>
    );
  }
}

export default SeeMore;
