import React, { useState, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import NavBar from "Components/navbar";
const Dicts = React.lazy( () => import('Components/dicts'))
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
        <Route path='/'>
        <div className="app-grid container-fluid">
          <Switch>
            <Route path={['/', '/dicts/']}>
              <Suspense fallback={<></>}>
                <Dicts></Dicts>
              </Suspense>
              
            </Route>
          </Switch>
        </div>
        </Route>
        
      </Switch>
      

    </Router>
  );
}
