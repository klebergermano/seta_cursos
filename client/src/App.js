import React, { Component } from "react";
import "./assets/css/style.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Test from "./test";

import Dashboard from "./admin/components/dashboard";
import { isAuthenticated } from "./routes/auth";
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
    var x = this.state.auth;
    console.log(this.state.auth);
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          x ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/create_user" component={CreateUser} />
            <PrivateRoute
              exact
              path="/profile"
              component={() => <Dashboard />}
            />

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
        </Router>
      </div>
    );
  }
}

export default App;
