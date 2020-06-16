import React, { Component, useContext } from "react";
import ReactPlayer from "react-player";
import video01 from "../../assets/video/01.mp4";
import { Animated } from "react-animated-css";
import { Link, animateScroll as scroll } from "react-scroll";
import { MobileContext } from "../../context/MobileContext";
const SlideHome = () => {
  const isMobile = useContext(MobileContext);
  if (isMobile) {
    return "";
  } else {
    return (
      <div id="slide_home">
        <div id="info_slide">
          <h1>Procurando por Curso de Informática e Inglês?</h1>
          <p>Nós podemos te ajudar</p>
          <Animated
            animationIn="fadeInUp"
            animationOut="fadeOut"
            isVisible={true}
            animationInDelay={400}
            animationInDuration={1400}
          >
            <Link
              activeClass="active"
              className="sub_menu"
              to="bg_resumo_cursos"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
            >
              Saiba Mais
            </Link>
          </Animated>
        </div>

        <div id="bg_slide_home">
          <Animated
            animationIn="fadeInUp"
            animationOut="fadeOut"
            isVisible={true}
            animationInDuration={1800}
          ></Animated>
          <ReactPlayer
            id="video_slide"
            url={[video01]}
            width="100%"
            height="100%"
            loop
            playing
            muted
          ></ReactPlayer>
        </div>
        <div id="bg_scanlines"></div>
      </div>
    );
  }
};

export default SlideHome;
