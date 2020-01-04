import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      msg_send: ""
    };
  }
  componentDidMount() {}
  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handleSubjectChange = event => {
    this.setState({ subject: event.target.value });
  };

  handleTextareaChange = event => {
    this.setState({ message: event.target.value });
  };

  handleSubmit = event => {
    const data = this.state;
    fetch("/form_send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.text())
      .then(text => {
        this.setState({ msg_send: text });
      });

    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form id="contact_form" onSubmit={this.handleSubmit}>
          <p>{this.state.msg_send}</p>
          <div>
            <label>Name: </label>
            <input
              type="text"
              onChange={this.handleNameChange}
              value={this.state.name}
            />
          </div>

          <div>
            <label>Email: </label>
            <input
              type="email"
              onChange={this.handleEmailChange}
              value={this.state.email}
            />
          </div>
          <div>
            <label>Subject: </label>
            <input
              type="text"
              onChange={this.handleSubjectChange}
              value={this.state.subject}
            />
          </div>
          <div>
            <label>Message</label>
            <textarea
              value={this.state.message}
              onChange={this.handleTextareaChange}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
