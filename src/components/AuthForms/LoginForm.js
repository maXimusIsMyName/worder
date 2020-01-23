import React, { useState, useEffect } from "react";
import { auth } from "Utils/protocol";
import { Redirect } from "react-router-dom";
export default function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [validationState, setValidationState] = useState({
    emailValidated: "",
    passwordValidated: ""
  });
  const [isReady, setReady] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    let [TOKEN, ERROR] = auth.login(email, password, remember);
    if (ERROR != "") {
      setValidationState(ERROR);
    } else {
      setReady(true);
    }
  };
  if (!isReady)
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
          />
        </div>
        {validationState.emailValidated == "" ? (
          ""
        ) : (
          <div className="alert alert-danger" role="alert">
            {validationState.emailValidated}
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
          />
        </div>
        {validationState.passwordValidated == "" ? (
          ""
        ) : (
          <div className="alert alert-danger" role="alert">
            {validationState.passwordValidated}
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
  else <Redirect to="/"></Redirect>;
}
