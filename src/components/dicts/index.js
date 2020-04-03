import React, { Suspense, useState } from "react";
import { Route, Switch, Link, useRouteMatch } from "react-router-dom";
import * as api from 'Api/dictionary'
const Play = React.lazy(() => import("./play"));
const Details = React.lazy(() => import("./details"));
const List = React.lazy(() => import('./list'))
export default function Dictionaries(props) {
  const { path, url } = useRouteMatch();
  return (
    <div className="dictionary-container">
      <Switch>
        <Route path={[`${path}/`]}>
        <Suspense fallback={<></>}>
          <List generator={dicts}> </List>
          </Suspense>
        </Route>
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
      </Switch>
    </div>
  );
}
 function* dicts() {
   for(id in api.dicts()) {
      yield api.detailsById(id)
   }
 }