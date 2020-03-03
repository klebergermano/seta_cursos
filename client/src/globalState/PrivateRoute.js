import React, { Component, useContext, useState } from "react";
import { LoginContext } from "./logingContex";
//import { Session_id } from "./session_id";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

const session_id = "s%3A" + "LDeqqJlpeMiZ6I5Ow3yAIjV4ZAx6aAvu";

function getCookie(name) {
  var v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  return v ? v[2] : null;
}

function check() {
  let cookie = getCookie("sid");

  if (typeof cookie == "string") {
    let cookie_id = cookie.split(".")[0]; //get the first element from the array and set as cookie id
    let data = { cookie_id: cookie_id };
    fetch("/check_cookie", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        console.log("checado:" + res.result);
        return res.result;
      });
  }
}

async function CheckCookie() {
  let cookie = getCookie("sid");

  console.log(typeof cookie + " : " + cookie);
  if (typeof cookie == "string") {
    let cookie_id = cookie.split(".")[0]; //get the first element from the array and set as cookie id

    let data = { cookie_id: cookie_id };

    var response = await fetch("/check_cookie", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        console.log("checado:" + res.result);
      });
    return response;
  } else {
    return false;
  }

  /**/
}

var x = true;

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={function(props) {
      if (x) {
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
