import * as Auth from "./auth";
import * as session from './session';

export let auth = Auth;

export  function getSessionToken() {
    if(session.getSessionToken() == "") {
        
    }

}