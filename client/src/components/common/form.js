import React, { Component } from "react";
import Info from "../common/info_contatos";
import Icon from "../../assets/icons";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      msg_send: "",
    };
  }
  componentDidMount() {}

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePhoneChange = (event) => {
    this.setState({ phone: event.target.value });
  };

  handleSubjectChange = (event) => {
    this.setState({ subject: event.target.value });
  };

  handleTextareaChange = (event) => {
    this.setState({ message: event.target.value });
  };

  handleSubmit = (event) => {
    const data = this.state;
    fetch("/form_send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.text())
      .then((text) => {
        this.setState({ msg_send: text });
      });

    event.preventDefault();
  };

  render() {
    return (
      <div id="bg_form">
        <h1>Entre em contato conosco</h1>
        <div id="info_contato">
          <p id="message">
            Envie-nos uma mensagem ou entre em contato conosco por um de nossos
            canais de comunicação.
          </p>
          <p className="infoContato" id="tel">
            <Icon name="cellphone" className="icon cellphone" width="15" />
            {Info.telefone} <Icon name="whatsapp" className="icon whatsapp" />
          </p>
          <p className="infoContato" id="face">
            <Icon name="facebook" className="icon facebook" />

            <a target="_blank" href={Info.facebook}>
              Seta Cursos
            </a>
          </p>
          <p className="infoContato" id="email">
            <Icon name="email" className="icon email" />

            {Info.email}
          </p>
          <p className="infoContato" id="endereco">
            {Info.endereco}
          </p>
        </div>
        <form id="form" onSubmit={this.handleSubmit}>
          <p>{this.state.msg_send}</p>
          <div>
            <label>Nome: </label>
            <input
              placeholder="Nome:"
              required
              type="text"
              onChange={this.handleNameChange}
              value={this.state.name}
            />
          </div>

          <div>
            <label>Email: </label>
            <input
              placeholder="Email:"
              type="email"
              onChange={this.handleEmailChange}
              value={this.state.email}
            />
          </div>
          <div>
            <label>Telefone: </label>
            <input
              placeholder="Telefone: "
              required
              type="text"
              onChange={this.handlePhoneChange}
              value={this.state.phone}
            />
          </div>
          <div>
            <label>Assunto: </label>
            <input
              placeholder="Assunto:"
              type="text"
              onChange={this.handleSubjectChange}
              value={this.state.subject}
            />
          </div>
          <div>
            <label>Menssagem</label>
            <textarea
              placeholder="Menssagem:"
              required
              value={this.state.message}
              onChange={this.handleTextareaChange}
            ></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default Form;
