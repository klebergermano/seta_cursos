import React, { Component } from "react";
import ReactPlayer from "react-player";
import video01 from "../../assets/video/01.mp4";
import { Animated } from "react-animated-css";

class slideHome extends Component {
  state = {};
  render() {
    return (
      <div>
        <Animated
          animationIn="fadeInUp"
          animationOut="fadeOut"
          isVisible={true}
          animationInDuration={1800}
        >
          <div id="info_slide">
            <h1>Procurando por Curso de Informática e Inglês?</h1>
            <br />
            <p>Nós podemos te ajudar</p>
            <Animated
              animationIn="fadeInUp"
              animationOut="fadeOut"
              isVisible={true}
              animationInDelay={400}
              animationInDuration={1400}
            >
              <a href="#">Saiba Mais</a>
            </Animated>
          </div>
        </Animated>
        <div id="bg_slide_home">
          <ReactPlayer
            url={[video01]}
            width="100%"
            height="90%"
            loop
            playing
            muted
          ></ReactPlayer>
        </div>
        <div id="bg_scanlines"></div>
      </div>
    );
  }
}

export default slideHome;
