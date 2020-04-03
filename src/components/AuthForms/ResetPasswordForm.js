import React, { useState } from "react";
import {Link} from "react-router-dom"
import { resetPassword } from "Api/account";
import "./auth.scss";

export default function ResetPasswordForm(props) {
  const onSubmit = (data, setErrors) => {
    resetPassword(email).then( 
      TOKEN => 
        props.returnToken(TOKEN)
      ,
      error => 
        setErrors({
          email: error.emailError,
        })
    );
  };
  return (
    <Form
      submitLabel="registration"
      submit={onSubmit}
      email={true}
      password={true}
    />

}
