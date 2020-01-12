import React, { Component } from "react";
import { Animated } from "react-animated-css";
import Course_Computing from "./courses_modules/computing";
import SeeMore from "./seeMore";

class Courses extends Component {
  state = {};
  render() {
    return (
      <div id="bg_courses">
        <div id="courses">
          <SeeMore />

          <Animated
            animationIn="fadeInLeft"
            animationOut="fadeOut"
            isVisible={true}
          >
            <Course_Computing />
          </Animated>

          <Animated
            animationIn="fadeInRight"
            animationOut="fadeOut"
            isVisible={true}
          >
            <div className="col-12 block_content_courses " id="course_english">
              <div className="col-8">
                <p>
                  é simplesmente uma simulação de texto da indústria tipográfica
                  e de impressos, e vem sendo utilizado desde o século XVI,
                  quando um impressor desconhecido pegou uma bandeja de tipos e
                  os embaralhou para fazer um livro de modelos de tipos. Lorem
                  Ipsum sobreviveu não só a cinco séculos, como também ao salto
                  para a editoração eletrônica, permanecendo essencialmente ina
                </p>
              </div>
              <figure className="col-3">
                <img
                  id="logo"
                  src={require("../../assets/img/content-2.png")}
                />
              </figure>
            </div>
          </Animated>
          {/* block_content_home */}

          <Animated
            animationIn="fadeInLeft"
            animationOut="fadeOut"
            isVisible={true}
          >
            <div className="col-12 block_content_courses " id="course_excel">
              <figure className="col-3">
                <img
                  id="logo"
                  src={require("../../assets/img/content-3.png")}
                />
              </figure>
              <div className="col-8">
                <p>
                  é simplesmente uma simulação de texto da indústria tipográfica
                  e de impressos, e vem sendo utilizado desde o século XVI,
                  quando um impressor desconhecido pegou uma bandeja de tipos e
                  os embaralhou para fazer um livro de modelos de tipos. Lorem
                  Ipsum sobreviveu não só a cinco séculos, como também ao salto
                  para a editoração eletrônica, permanecendo essencialmente ina
                </p>
              </div>
            </div>
            {/* block_content_home */}
          </Animated>
        </div>
      </div>
    );
  }
}

export default Courses;
