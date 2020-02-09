import React from "react";
import "./assets/css/style.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Users from "./admin/components/users";
import Login from "./admin/components/login";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Homepage from "./components/pages/homepage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/users">
          <Users />
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
      </Switch>
    </Router>
  );
}

export default App;
