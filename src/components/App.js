import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const Dicts = React.lazy(() => import("Components/dicts"));
import "./App.scss";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path={["/dicts"]}>
          <Suspense fallback={<></>}>
            <Dicts></Dicts>
          </Suspense>
        </Route>
        <Route path={["/"]}>
          <Redirect to="/dicts" />
        </Route>
      </Switch>
    </Router>
  );
}
