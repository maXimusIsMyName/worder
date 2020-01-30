import React, { useState, useEffect } from "react";
import * as auth from "Api/auth";
import { Redirect } from "react-router-dom";
export default function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [validationState, setValidationState] = useState({
    emailValidated: props.validated ? props.validated.email : "",
    passwordValidated: props.validated ? props.validated.password : ""
  });
  const [isReady, setReady] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    auth.login(email, password, remember).then(
      token => {
        props.returnToken(token);
      },
      error => {
        setValidationState({
          emailValidated: error.emailError,
          passwordValidated: error.passwordError
        });
      }
    );
  };
  return (
    <form>
      <div className="form-group row col-md">
        <label htmlFor="email-input" className="text-dark">
          Email:
        </label>
        <input
          type="email"
          id="email-input"
          onChange={e => setEmail(e.target.value)}
          className="form-control"
          placeholder="Type your email"
          required
        />
      </div>

      {validationState.emailValidated == "" ? (
        ""
      ) : (
        <div className="form-group row col-md">
          <div className="alert alert-danger h6 w-100" role="alert">
            {validationState.emailValidated}
          </div>
        </div>
      )}
      <div className="form-group row col-md">
        <label htmlFor="password-input" className="text-dark">
          Password:
        </label>
        <input
          type="password"
          id="input-password"
          onChange={e => setPassword(e.target.value)}
          onClick={e => e.preventDefault}
          className="form-control"
          placeholder="Type your password"
          required
        />
      </div>
      {validationState.passwordValidated == "" ? (
        ""
      ) : (
        <div className="form-group row col-md">
          <div className="alert alert-danger h6 w-100" role="alert">
            {validationState.passwordValidated}
          </div>
        </div>
      )}
      <div className="form-group row col-md justify-space-between align-items-center">
        <div className="form-check align-items-center">
          <input
            className="form-check-input float-right"
            type="checkbox"
            value=""
            id="remember-me"
            onChange={e => setRemember(e.target.value)}
          />
          <label className="form-check-label" htmlFor="remember-me">
            Remember me
          </label>
        </div>
        <button
          type="submit"
          onClick={onSubmit}
          className=" btn ml-auto btn-primary font-weight-light "
        >
          Login
        </button>
      </div>
    </form>
  );
}
