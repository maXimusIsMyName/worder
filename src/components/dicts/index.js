import React, { Suspense, useState } from "react";
import NavBar from "Components/navbar/";
import {
  Route,
  Switch,
  Link,
  useRouteMatch,
  useParams,
  Redirect,
} from "react-router-dom";
import * as API from "Api/dictionary";
const Play = React.lazy(() => import("Components/dicts/play"));
const Details = React.lazy(() => import("Components/dicts/details"));
const List = React.lazy(() => import("Components/dicts/list"));

export default function Dictionaries(props) {
  const { path } = useRouteMatch();
  const [dict_details, chooseDict] = useState();
  const [dict_words, setWords] = useState();

  return (
    <div className="dictionary-container">
      <API.DictContext.Provider
        value={{
          details: dict_details,
          words: dict_words,
        }}
      >
        <Switch>
          <Route path={[`${path}/details/:dictId`]}>
            <Suspense fallback={<></>}>
              <Details></Details>
            </Suspense>
          </Route>
          <Route path={[`${path}/play/:dictId`]}>
            <Suspense fallback={<></>}>
              <Play setWords={setWords}></Play>
            </Suspense>
          </Route>
          <Route path={[`${path}/`, `${path}/list`]}>
            <Suspense fallback={<></>}>
              <List dicts={dicts} choose={chooseDict}>
                {" "}
              </List>
            </Suspense>
          </Route>
        </Switch>
      </API.DictContext.Provider>
    </div>
  );
}
function dicts() {
  return API.dicts().then((ids) => ids.map((e) => API.detailsById(e)));
}
