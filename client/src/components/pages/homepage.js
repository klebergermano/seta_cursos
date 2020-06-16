import React, { Component, useContext } from "react";
import SlideHome from "../common/SlideHome";

import Cursos from "./Cursos";
import About from "./about";
import Contact from "./contact";

class Homepage extends Component {
  state = {};

  render() {
    return (
      <div id="bg_homepage">
        <div id="link_top"></div>
        {/*Used as anchor link  to scroll page to the top*/}
        <SlideHome />
        <div id="content_homepage">
          <Cursos />
          <About />
          <Contact />
        </div>
      </div>
    );
  }
}

export default Homepage;
