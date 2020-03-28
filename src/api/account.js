import { setCookie, getCookie } from "Utils/cookie";
import {
  requestAuthorize,
  requestRegistration,
  requestResetPassword
} from "./protocol";

let TOKEN;

export function getUserData() {}

export function updateUserData(newData) {}

export function login(email, password, remember) {
  let [emailValidated, passwordValidated] = [
    validateEmail(email),
    validatePassword(password)
  ];
  if (!emailValidated && !passwordValidated) {
    return requestAuthorize(email, password).then(token => {
      TOKEN = token;
      if (remember) setCookie("TOKEN", TOKEN, 30);
      return Promise.resolve(token);
    });
  } else {
    let error = {
      error: "Registration: Validation went wrong",
      emailValidated: emailValidated,
      passwordValidated: passwordValidated
    };
    console.error(error);
    return Promise.reject(error);
  }
}

export function registration(email, password, username) {
  let [emailValidated, passwordValidated, usernameValidated] = [
    validateEmail(email),
    validatePassword(password),
    validateUsername(username)
  ];
  if (!emailValidated && !passwordValidated && !usernameValidated) {
    return requestRegistration(email, password, username).then(
      TOKEN => {
        TOKEN = token;
        if (remember) setCookie("TOKEN", TOKEN, 30);
        return Promise.resolve(token);
      },
      error => Promise.reject(error)
    );
  } else {
    let error = {
      error: "Registration: Validation went wrong",
      emailError: emailValidated,
      passwordError: passwordValidated,
      usernameError: usernameValidated
    };
    console.error(error);
    return Promise.reject(error);
  }
}

export function resetPassword(email) {
  let emailValidated = validateEmail(email);
  if (!emailValidated) return requestResetPassword(email);
  else {
    let error = {
      error: "Reset password: Validation went wrong"
    };
    console.error(error);
    return Promise.reject(error);
  }
}

export function authToken() {
  return TOKEN ? TOKEN : (TOKEN = getCookie("TOKEN"));
}

function validateEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ? ""
    : "Email is incorrect";
}

function validatePassword(password) {
  if (password.length < 6) return "Password must be at least 6 characters";
  if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/.test(password))
    return "Password must contains numbers, and letters";
  return "";
}

function validateUsername(username) {
  if (/^[a-z0-9_]{3,16}$/.test(username)) return "";
  return "Username must be 3-16 charachters and contains only letters numbers and underscores";
}
