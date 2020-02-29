import React, { useState,  Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import NavBar from "Components/navbar";
<<<<<<< HEAD
import Authorization from  "Components/Authorization"
import * as account from "Api/account";

=======
const LoginForm = React.lazy(() => import("Components/AuthForms/LoginForm"));
const SignupForm = React.lazy(() => import("Components/AuthForms/SignupForm"));
>>>>>>> acca89a83cfc1d6e0654368aa07d18d01b7cc179
import "./App.scss";
export default function App() {
  const [isAuthorized, authorize] = useState(false);
  const onTokenReturned = Token => {
    authorize(true)
  }
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
      {isAuthorized ? (
        <>HEllo</>
      ) : (
        <div className="display-center">
          <Switch>
            <Route path="/">
              <Suspense fallback={<></>}>
                <LoginForm returnToken={onTokenReturned}/>
              </Suspense>
            </Route>
            <Route fallback={<></>} path="/signup">
              <Suspense>
                <SignupForm returnToken={onTokenReturned}/>
              </Suspense>
            </Route>
          </Switch>
        </div>
      )}
    </Router>
  );
}
