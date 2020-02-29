import React, { useState } from "react";
import * as account from "Api/account";
import { Link } from "react-router-dom";
import "./auth.scss";

export default function RegistrationForm(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [validation, setValidationState] = useState({
    username: "",
    email: "",
    password: ""
  });
  const onSubmit = e => {
    e.preventDefault();
    account.registration(email, password, username, remember).then(
      TOKEN => {
        props.returnToken(TOKEN);
      },
      error => {
        setValidationState({
          email: error.emailError,
          password: error.passwordError
        });
      }
    );
  };
  return (
    <form>
      <div className="form-group row col-md">
        <label htmlFor="username-input">Username: </label>
        <input
          type="text"
          className="form-control"
          name="username"
          id="username-input"
          placeholder="Type your username"
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group row col-md">
        <label htmlFor="email-input">Email: </label>
        <input
          type="email"
          className="form-control"
          name="email"
          id="email-input"
          placeholder="Type your email"
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password-input">Password: </label>
        <input
          type="password"
          className="form-control"
          name="password"
          id="password-input"
          placeholder="Type your password"
          onChange={e => setPassword(e.target.value)}
        />
      </div>
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
          Registration
        </button>
      </div>
      <div className="from-group row col-md">
        <Link
          to="/registration"
          className="text-decoration-none text-dark auth-link"
        >
          Already have account?
        </Link>
      </div>
    </form>
  );
}
