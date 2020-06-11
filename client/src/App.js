import React, { Component } from "react";
import "./assets/css/style.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Admin from "./admin/components/Admin";

import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Homepage from "./components/pages/Homepage";
import NotFound404 from "./components/NotFound404";
import { AuthProvider } from "./context/AuthContext";
const isMobile = window.innerWidth <= 480;

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/admin">
              <AuthProvider>
                <Admin />{" "}
              </AuthProvider>
            </Route>

            <Route path="/">
              <div className="container">
                <Header />
                <div id="content">
                  <Homepage />
                </div>
                >{/* content */}
                <Footer />
              </div>
            </Route>
            <Route path="/*" component={NotFound404} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
