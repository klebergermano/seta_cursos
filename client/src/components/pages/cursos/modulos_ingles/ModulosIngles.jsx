import React, { Component } from "react";
import { Animated } from "react-animated-css";

import Modulo_1 from "./Modulo_1";
import Modulo_2 from "./Modulo_2";
import Modulo_3 from "./Modulo_3";

class ModulosIngles extends Component {
  state = {};
  render() {
    return (
      <div className="sub_pages_ingles" id="sub_page_modulo_ingles">
        <Animated
          animationIn="fadeInUp"
          animationOut="fadeOut"
          isVisible={true}
          animationInDuration={800}
        >
          <Modulo_1 />
        </Animated>
        <Animated
          animationIn="fadeInUp"
          animationOut="fadeOut"
          isVisible={true}
          animationInDuration={1000}
        >
          <Modulo_2 />
        </Animated>

        <Animated
          animationIn="fadeInUp"
          animationOut="fadeOut"
          isVisible={true}
          animationInDuration={1200}
        >
          <Modulo_3 />
        </Animated>
        <Animated
          animationIn="fadeInUp"
          animationOut="fadeOut"
          isVisible={true}
          animationInDuration={1300}
        >
          <img
            src={require("../../../../assets/img/english/learn_english.jpg")}
          />
        </Animated>
      </div>
    );
  }
}

export default ModulosIngles;
