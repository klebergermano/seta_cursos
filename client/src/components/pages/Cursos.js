import React, { Component } from "react";
import { Animated } from "react-animated-css";
import Informatica from "./cursos/Informatica.js";
import English from "./cursos/English.js";
import Excel from "./cursos/Excel.js";

import ResumoCursos from "./ResumoCursos";

class Courses extends Component {
  state = {};
  render() {
    return (
      <div id="bg_cursos">
        <ResumoCursos />
        <Informatica />
        <English />
        <Excel />
      </div>
    );
  }
}

export default Courses;
