import React, { Component } from "react";
import Form from "../common/form";
class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="pages" id="bg_contact">
        <div id="contact">
          <h1>Entre em contato conosco</h1>
          <Form />
        </div>
      </div>
    );
  }
}

export default Contact;
