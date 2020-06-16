import React, { Component } from "react";
import "./assets/css/style.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Admin from "./admin/components/Admin";

import Header from "./components/common/Header";
import Footer from "./components/common/footer";
import Homepage from "./components/pages/Homepage";
import NotFound404 from "./components/NotFound404";
import { AuthProvider } from "./context/AuthContext";
import { MobileProvider } from "./context/MobileContext";
class App extends Component {
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
              <MobileProvider>
                <div className="container">
                  <Header />
                  <div id="main_content">
                    <Homepage />
                  </div>
                  {/* content */}
                  <Footer />
                </div>
              </MobileProvider>
            </Route>
            <Route path="/*" component={NotFound404} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
