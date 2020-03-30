import React, { useState, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import NavBar from "Components/navbar";

import "./App.scss";

export default function App() {
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
      <Switch>
<div className="app-grid container-fluid"></div>
      </Switch>
      

    </Router>
  );
}
