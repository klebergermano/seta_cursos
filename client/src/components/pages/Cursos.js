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
      <div id="bg_courses">
        <div id="courses">
          <ResumoCursos />
          <div>
            <Informatica />
          </div>
          <div>
            <English />
          </div>
          <div>
            <Excel />
          </div>
        </div>
      </div>
    );
  }
}

export default Courses;
