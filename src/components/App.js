import React, { useState, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NavBar from "Components/navbar";
import Authorization from  "Components/Authorization"
import * as account from "Api/account";

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



