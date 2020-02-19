import React, { Component } from "react";
import { LoginContext } from "./logingContex";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

const session_id = "s%3A0vhHmcqYjnn2nyqeFLXhXagB6YEEQyn9";

function getCookie(name) {
  var v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  return v ? v[2] : null;
}

const CheckCookie = (() => {
  var cookie = getCookie("sid");
  var cookie_id = cookie.split(".")[0]; //get the first element from the array and set as cookie id

  if (session_id === cookie_id) {
    return true;
  } else {
    return false;
  }
})();

var x = CheckCookie;
export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={function(props) {
      if (x) {
        if (CheckCookie) {
        } else {
        }

        return <Component {...props} />;
      } else {
        return (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        );

        console.log(x);
      }
    }}
  />
);
