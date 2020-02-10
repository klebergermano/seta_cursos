import React from "react";
import "./assets/css/style.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Profile from "./admin/components/users";
import CreateUser from "./admin/components/createUser";
import Login from "./admin/components/login";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Homepage from "./components/pages/homepage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/create_user" component={CreateUser} />

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
