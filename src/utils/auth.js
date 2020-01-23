import { setCookie, getCookie } from "./cookie";

export function login(email, password, remember) {
  let validated = validate(email, password);
  if (validated != "") return ["", validated];
  //TODO  request from server authenticate token if succes, else return ERROR
  const [TOKEN, ERROR] = [
    "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
    ""
  ];
  setCookie("TOKEN", remember && ERROR == "" ? TOKEN : "", 30);
  return ERROR == ""
    ? [TOKEN, ""]
    : [
        TOKEN,
        {
          emailValidated: "",
          passwordValidated: ERROR
        }
      ];
}

export function signup(email, password, username) {
  let validated = validate(email, password);
  if (validated != "") return ["", validated];
  //TODO request from server registration, return authenticate token if success, else return ERROR
  const [TOKEN, ERROR] = [
    "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
    ""
  ];
  setCookie("TOKEN", remember && ERROR == "" ? TOKEN : "", 30);
  return ERROR == ""
    ? [TOKEN, ""]
    : [
        TOKEN,
        {
          emailValidated: "",
          passwordValidated: ERROR
        }
      ];
}
export function isAuthorized() {
  const TOKEN = getCookie("TOKEN");
  console.log(TOKEN);
  let authorized = TOKEN == "" ? false : true; //TODO request from server is token correct
  return authorized;
}

function validate(email, password) {
  let emailValidated = validateEmail(email);
  let passwordValidated = validatePassword(password);
  if (emailValidated != "" || passwordValidated != "")
    return {
      emailValidated: emailValidated,
      passwordValidated: passwordValidated
    };
  return "";
}

function validateEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ?  "" : "Email is incorrect"
}

function validatePassword(password) {
  if (password.length < 6) return "Password must be at least 6 characters";
  if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/.test(password)) return "Password must contains numbers, and letters";
  return "";
}


