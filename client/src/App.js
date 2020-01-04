import React from "react";
import "./assets/css/style.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/common/header";
import SlideHome from "./components/common/slideHome";

import Footer from "./components/common/footer";
import Home from "./components/pages/home";
import Services from "./components/pages/services";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />

        <div id="content">
          <Route path="/" exact component={SlideHome} />
          <Route path="/" exact component={Home} />

          <Route path="/services" exact component={Services} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </div>
        {/* content */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
