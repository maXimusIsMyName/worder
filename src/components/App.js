import React, { useState, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NavBar from "Components/navbar";
<<<<<<< HEAD
import Authorization from  "Components/Authorization"
import * as account from "Api/account";
=======
import { authToken } from "Api/account";

const LoginForm = React.lazy(() => import("Components/AuthForms/LoginForm"));
const RegistrationForm = React.lazy(() =>
  import("Components/AuthForms/RegistrationForm")
);
const ResetPasswordForm = React.lazy(() =>
  import("Components/AuthForms/ResetPasswordForm")
);
>>>>>>> cf6ae1b1a1e53d03e9f4e89fabd82a5be4c58a13

import "./App.scss";

export default function App() {
  const [token, setToken] = useState(account.authToken());
  const onTokenReturned = Token => {
    setToken(Token);
  };
  return (
    <Router>
      <NavBar>
        <Link to="" className="nav-link">
          Home
        </Link>
        <Link to="" className="nav-link">
          Home
        </Link>
        <Link to="" className="nav-link">
          Home
        </Link>
      </NavBar>
      {token ? (
        <div className="app-grid container-fluid">

        </div>
      ) : (
        <div className="display-center">

          <Authorization onSubmit={onTokenReturned}></Authorization>

        </div>
      )}
    </Router>
  );
}



