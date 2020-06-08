import React, { Component } from "react";
import NavUsers from "./NavUsers";
import { Formik, Field } from "formik";
import * as Yup from "yup";
class FormUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }

  validationSchema = Yup.object({
    username: Yup.string()
      .min(3, "Usuário precisa ter no minimo 3 caracteres")
      .max(15, "O nome de usuário não deve ter mais do que 15 caracteres")
      .required("Campo obrigatório"),
    privilege: Yup.string().required("Campo obrigatório"),
    password: Yup.string()
      .required("Campo obrigatório")
      .min(5, "Senha não deve ter menos do que 5 caracteres"),
    confirmPassword: Yup.string()
      .required("Campo obrigatório")

      .test("Senha confirmado", "As senhas precisam ser iguais", function (
        value
      ) {
        return this.parent.password === value;
      }),
  });

  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <Formik
          initialValues={{
            username: this.props.state.username,
            privilege: this.props.state.privilege,
            password: this.props.state.password,
            confirmPassword: "",
          }}
          validationSchema={this.validationSchema}
          onSubmit={this.props.submit}
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
                  <label htmlFor="password">Senha:</label>
                  <input
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="password"
                  />
                  {errors.password && touched.password ? (
                    <span className="errorFeedback">{errors.password}</span>
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
      </>
    );
  }
}

export default FormUser;
