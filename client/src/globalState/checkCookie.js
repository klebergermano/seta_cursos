import React, { Component } from "react";

export const CheckCookie = session => {
  const cookie_session_id = document.cookie("sid");

  if (cookie_session_id !== session) {
    return false;
  } else {
    return true;
  }
};
