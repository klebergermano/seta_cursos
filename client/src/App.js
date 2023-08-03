import React, { Component } from "react";
import "./assets/css/style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "./admin/components/Admin";
import CertificadoValidacao from "./components/pages/CertificadoValidacao";
import ListaCursosIngles from "./components/pages/ListaCursosIngles";
import ListaCursosInformatica from "./components/pages/ListaCursosInformatica";
import Header from "./components/common/Header";
import Footer from "./components/common/footer";
import Homepage from "./components/pages/Homepage";
import PageFormSubmitted from "./components/common/PageFormSubmitted.js";


import NotFound404 from "./components/NotFound404";
import { AuthProvider } from "./context/AuthContext";
import { MobileProvider } from "./context/MobileContext";
import PageTrafegoGeral from "./components/pages/landpages/PageTrafegoGeral";
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

            <Route path="/page-info-geral">
              <MobileProvider>
                <div className="container">
                  <div id="header_pagina_externa">
                    <Header />
                  </div>

                  <PageTrafegoGeral />
                  <Footer />
                </div>
              </MobileProvider>
            </Route>


            <Route path="/certificados">
              <MobileProvider>
                <div className="container">
                  <div id="header_pagina_externa">
                    <Header />
                  </div>

                  <CertificadoValidacao />
                  <Footer />
                </div>
              </MobileProvider>
            </Route>
            <Route path="/form-submitted">
              <MobileProvider>
                <div className="container">
                  <div id="header_pagina_externa">
                    <Header />
                  </div>
                  <PageFormSubmitted/>
                  <Footer />
                </div>
              </MobileProvider>
            </Route>
            <Route path="/link_ingles_978033445">
              <MobileProvider>
                <div className="container">
                  <Header />
                  <ListaCursosIngles />
                  <Footer />
                </div>
              </MobileProvider>
            </Route>
            <Route path="/link_informatica_978033445">
              <MobileProvider>
                <div className="container">
                  <Header />
                  <ListaCursosInformatica />
                  <Footer />
                </div>
              </MobileProvider>
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
