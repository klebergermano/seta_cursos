import React, { Component } from "react";
import SlideHome from "../common/slideHome";

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

        <div id="bg_content">
          <Cursos />
          <About />
          <Contact />
        </div>
      </div>
    );
  }
}

export default Homepage;
