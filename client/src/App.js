import React, { Component } from "react";
import "./assets/css/style.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Dashboard from "./admin/components/Dashboard";
import { isAuthenticated } from "./routes/auth";
import { LoginProvider } from "./globalState/logingContex";
import { LoginRule } from "./globalState/loginRule";
import { PrivateRoute } from "./globalState/PrivateRoute";

import GeradorBoleto from "./admin/components/boleto/GeradorBoleto";
import CreateUser from "./admin/components/createUser";
import Login from "./admin/components/login";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Homepage from "./components/pages/homepage";
import NotFound404 from "./components/NotFound404";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: ""
    };
  }
  componentDidMount() {
    isAuthenticated.then(res => {
      this.setState({ auth: res });
    });
  }
  render() {
    return (
      <div>
        <Router>
          <LoginProvider>
            <Switch>
              <Route path="/gerador_boleto" component={GeradorBoleto} />
              <Route path="/login" component={Login} />
              <Route path="/create_user" component={CreateUser} />
              <PrivateRoute path="/profile" component={() => <Dashboard />} />

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
              <Route path="*" component={NotFound404} />
            </Switch>
          </LoginProvider>
        </Router>
      </div>
    );
  }
}

export default App;
