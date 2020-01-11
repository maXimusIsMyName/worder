import { setCookie, getCookie } from "./cookie"
export function login(identifier, password) {
    //TODO  request from server authenticate token if succes, else return ERROR
    const TOKEN = "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8";
    setCookie("TOKEN", TOKEN);
    return TOKEN;
} 
export function signup(username, email, password, repeat_password) {
    //TODO request from server registration, return authenticate token if success, else return ERROR
    const TOKEN = "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8";
    setCookie("TOKEN", TOKEN);
    return TOKEN;
}
export function isAuthorized() {
    const TOKEN = getCookie("TOKEN")
    let authorized =  false//TODO request from server is token correct
    return authorized;
}


