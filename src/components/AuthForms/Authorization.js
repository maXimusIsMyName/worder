import React, {  Suspense } from "react";
import {
    Switch,
    Route,
} from "react-router-dom"
const LoginForm = React.lazy(() => import("Components/AuthForms/LoginForm"));
const RegistrationForm = React.lazy(() =>
  import("Components/AuthForms/RegistrationForm")
);
const ResetPasswordForm = React.lazy(() =>
  import("Components/AuthForms/ResetPasswordForm")
);

export default function Authorization(props) {
    return (<Switch>
    <Route path={["/login", "/"]} exact>
      <Suspense fallback={<></>}>
        <LoginForm returnToken={props.onSubmit} />
      </Suspense>
    </Route>
    <Route path="/registration">
      <Suspense fallback={<></>}>
        <RegistrationForm returnToken={props.onSubmit} />
      </Suspense>
    </Route>
    <Route path="/resetpassword">
      <Suspense fallback={<></>}>
        <ResetPasswordForm />
      </Suspense>
    </Route>
  </Switch>)
}

