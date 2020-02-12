import React from "react";
import "./assets/css/style.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Users from "./admin/components/users";
import Dashboard from "./admin/components/dashboard";
import CreateUser from "./admin/components/createUser";
import Login from "./admin/components/login";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Homepage from "./components/pages/homepage";

function App() {
  var x = true;
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
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/create_user" component={CreateUser} />
        <PrivateRoute exact path="/profile" component={() => <Dashboard />} />

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
      </Switch>
    </Router>
  );
}

export default App;
