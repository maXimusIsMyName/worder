import React, { Suspense } from "react";
import NavBar from "Components/navbar/";
import {
  Route,
  Switch,
  Link,
  useRouteMatch,
  useParams,
  Redirect,
} from "react-router-dom";
import * as api from "Api/dictionary";
const Play = React.lazy(() => import("Components/dicts/play"));
const Details = React.lazy(() => import("Components/dicts/details"));
const List = React.lazy(() => import("Components/dicts/list"));

export default function Dictionaries(props) {
  const { path, url } = useRouteMatch();
  return (
    <div className="dictionary-container">
      <Switch>
        <Route path={[`${path}/details/:dictId`]}>
          <Suspense fallback={<></>}>
            <Details></Details>
          </Suspense>
          
        </Route>
        <Route path={[`${path}/play/:dictId`]}>
          <Suspense fallback={<></>}>
            <Play></Play>
          </Suspense>
        </Route>
        <Route path={[`${path}/`, `${path}/list`]}>
          <Suspense fallback={<></>}>
            <List dicts={dicts}> </List>
          </Suspense>
        </Route>
      </Switch>
    </div>
  );
}
function dicts() {
  return api.dicts().then((ids) => ids.map((e) => api.detailsById(e)));
}

