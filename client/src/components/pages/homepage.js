import React, { Component } from "react";
import SlideHome from "../common/slideHome";
import Courses from "./courses";
import About from "./about";
import Contact from "./contact";

class Homepage extends Component {
  state = {};
  render() {
    return (
      <div>
        <SlideHome />

        <Courses />

        <About />

        <Contact />
      </div>
    );
  }
}

export default Homepage;
