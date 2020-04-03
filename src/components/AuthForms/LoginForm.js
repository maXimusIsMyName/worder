import React, { useState } from "react";
import * as account from "Api/account";
import { Link } from "react-router-dom";
import "./auth.scss";
import Form from "./AuthForm";
import { Fragment } from "../../../dist/navbar_bundle";
export default function LoginForm(props) {
  const onSubmit = (data, setErrors) => {
    account.login(data.email, data.password, data.remember).then(
      token => {
        props.returnToken(token);
      },
      error => {
        setErrors({
          email: error.emailError,
          password: error.passwordError
        });
      }
    );
  };
  return (
    <Form
      submit={onSubmit}
      submitLabel="log in"
      email={true}
      password={true}
      remember={true}
    />
  );
}
