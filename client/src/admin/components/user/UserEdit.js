import React, { Component } from "react";

import NavUsers from "./NavUsers";
import { Formik, Field } from "formik";
import * as Yup from "yup";
class UserEdit extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      newPassword: "",
      privilege: "",
    };
  }
  validationSchema = Yup.object({
    username: Yup.string()
      .min(3, "Usuário precisa ter no minimo 3 caracteres")
      .max(15, "O nome de usuário não deve ter mais do que 15 caracteres")
      .required("Campo obrigatório"),
    privilege: Yup.string().required("Campo obrigatório"),
    newPassword: Yup.string().min(
      5,
      "Senha não deve ter menos do que 5 caracteres"
    ),
    confirmPassword: Yup.string().test(
      "Senha confirmado",
      "As senhas precisam ser iguais",
      function (value) {
        return this.parent.newPassword === value;
      }
    ),
  });
  componentDidMount() {
    //Pega a ID na ultima posição da URL e envia para o backend
    let url = window.location.href;
    let url_array = url.split("/");
    let i = url_array.length - 1;
    let id = url_array[i];

    fetch(`/user_edit_view/${id}`)
      .then((res) => res.json())
      .then((user) => {
        this.setState({
          username: user.username,
          privilege: user.privilege,
          msg_send: "",
        });
      })
      .then(() => {
        this.setState({ id: id });
        console.log(this.state);
      });
  }

  submitEditUser = (values) => {
    const data = values;
    data.id = this.state.id;
    fetch(`/user_edit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({ msg_send: res.msg_send });
        console.log("Text: " + res.msg_send);
        document.querySelector(".cadastro_sucesso").style.display = "block";
      })
      .then((res) => {});
  };

  render() {
    return (
      <div id="page_user_form" className="page_form">
        <NavUsers />
        <h1>Atualizar Usuário</h1>
        <Formik
          enableReinitialize
          initialValues={{
            username: this.state.username,
            privilege: this.state.privilege,
            newPassword: "",
            confirmPassword: "",
          }}
          validationSchema={this.validationSchema}
          onSubmit={this.submitEditUser}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            handleBlur,
          }) => (
            <form className="form_add form_user" onSubmit={handleSubmit}>
              <div className="bg_inputs">
                <div className="add_username">
                  <label htmlFor="username">Username:</label>

                  <input
                    type="text"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="username"
                  />
                  {errors.username && touched.username ? (
                    <span className="errorFeedback">{errors.username}</span>
                  ) : null}
                </div>
                <div className="add_password">
                  <label htmlFor="newPassword">Nova Senha:</label>
                  <input
                    type="password"
                    value={values.newPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="newPassword"
                  />
                  {errors.newPassword && touched.newPassword ? (
                    <span className="errorFeedback">{errors.newPassword}</span>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="confirmPassword">Confime Senha:</label>
                  <input
                    type="password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="confirmPassword"
                  />
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <span className="errorFeedback">
                      {errors.confirmPassword}
                    </span>
                  ) : null}
                </div>
                <div className="add_privilege">
                  <label htmlFor="privilege">Privilégio: </label>
                  <select
                    name="privilege"
                    onChange={handleChange}
                    value={values.privilege}
                  >
                    <option value="" disabled></option>

                    <option value="admin">Admin</option>
                    <option value="convidado">Convidado</option>
                  </select>
                  {errors.privilege && touched.privilege ? (
                    <span className="errorFeedback">{errors.privilege}</span>
                  ) : null}
                </div>
                <button className="btn_cadastrar" type="submit">
                  Submit
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

export default UserEdit;
