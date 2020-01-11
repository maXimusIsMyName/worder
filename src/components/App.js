import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  }  from 'react-router-dom'
import NavBar from 'Components/navbar'
import {signup, login, isAuthorized} from "Utils/auth"
export default function App() {
return (<Router>
    
   <NavBar/>
    <Switch>
        <Route path="/">
          { 
          !isAuthorized() ? (
            <></>
          ) : (
            <>
              
            </>
          )
    
          }
        
          
        </Route>
    </Switch>
</Router>) 
}
