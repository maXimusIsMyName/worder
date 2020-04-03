import React, { useState } from "react";
import * as account from "Api/account";
import "./auth.scss";

export default function RegistrationForm(props) {
  const onSubmit = (data, setErrors) => {
    account
      .registration(data.email, data.password, data.username, data.remember)
      .then(
        TOKEN => {
          props.returnToken(TOKEN);
        },
        error => {
          setErrors({
            email: error.emailError,
            password: error.passwordError,
            username: error.usernameError
          });
        }
      );
  };
  return (
    <Form
      submitLabel="registration"
      submit={onSubmit}
      username={true}
      email={true}
      password={true}
    />

  );
}
