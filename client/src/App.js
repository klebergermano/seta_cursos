import React from "react";
import "./assets/css/style.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Homepage from "./components/pages/homepage";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />

        <div id="content">
          <Homepage />
        </div>
        {/* content */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
