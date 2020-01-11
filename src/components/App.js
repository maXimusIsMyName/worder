import React, { Suspense } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  }  from 'react-router-dom'
import NavBar from 'Components/navbar'
import {signup, login, isAuthorized} from "Utils/auth"
const LoginForm = React.lazy(() => import("Components/AuthForms/LoginForm"))
const SignupForm = React.lazy(() => import("Components/AuthForms/SignupForm"))
import './App.scss'
export default function App() {
return (<Router>
  <NavBar>
    <Link to="" className="nav-link">Home</Link>
    <Link to="" className="nav-link">Home</Link>
    <Link to="" className="nav-link">Home</Link>
  </NavBar>
   
    <Switch>
        <Route path="/">
          { 
          !isAuthorized() ? (
            <></>
          ) : (
              <Redirect to="/login"/>          
              )
    
          }
        </Route>
        <Suspense>
        <Route path="/login">
            <div className="display-center"> 
            </div>
        </Route>
        <Route path="/signup">

        </Route>
        </Suspense>
    </Switch>
</Router>) 
}





