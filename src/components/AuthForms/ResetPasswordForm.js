import React, { useState } from "react";
import {Link} from "react-router-dom"
import { resetPassword } from "Api/account";
import "./auth.scss";

export default function ResetPasswordForm(props) {
  const [email, setEmail] = useState("");
  const [emailValidation, setEmailValidation] = useState("");
  const onSubmit = e => {
    e.preventDefault();
    resetPassword(email).then();
  };
  return (
    <form>
      <div className="form-group">
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
      {emailValidation == "" ? (
        ""
      ) : (
        <div className="form-group row col-md">
          <div className="alert alert-danger h6 w-100" role="alert">
            {emailValidation}
          </div>
        </div>
      )}
      <div className="form-group row col-md">
      <button
        type="submit"
        onClick={onSubmit}
        className="btn btn-primary font-weight-light"
      >
        Reset password
      </button>
      </div>

      <div className="from-group row col-md">
        <Link
          to="/registration"
          className="text-decoration-none text-dark auth-link"
        >
          Not have account yet?
        </Link>
        <Link
          to="/login"
          className="text-decoration-none text-dark auth-link ml-auto"
        >
          Log in
        </Link>
      </div>
    </form>
  );
}
