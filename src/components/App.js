import React, { useState, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import NavBar from "Components/navbar";
import { authToken } from "Api/account";

const LoginForm = React.lazy(() => import("Components/AuthForms/LoginForm"));
const RegistrationForm = React.lazy(() =>
  import("Components/AuthForms/RegistrationForm")
);
const ResetPasswordForm = React.lazy(() =>
  import("Components/AuthForms/ResetPasswordForm")
);

import "./App.scss";
export default function App() {
  const [token, setToken] = useState(authToken());
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
        <>HEllo</>
      ) : (
        <div className="display-center">
          <Switch>
            <Route path={["/login", "/"]} exact>
              <Suspense fallback={<></>}>
                <LoginForm returnToken={onTokenReturned} />
              </Suspense>
            </Route>
            <Route path="/registration">
              <Suspense fallback={<></>}>
                <RegistrationForm returnToken={onTokenReturned} />
              </Suspense>
            </Route>
            <Route path="/resetpassword">
              <Suspense fallback={<></>}>
                <ResetPasswordForm />
              </Suspense>
            </Route>
          </Switch>
        </div>
      )}
    </Router>
  );
}
