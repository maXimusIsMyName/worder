import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Dicts = React.lazy( () => import('Components/dicts'))
import "./App.scss";

export default function App() {
  return (
    <Router>

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
