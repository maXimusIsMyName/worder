import { ExtendedAPIPlugin } from "webpack";

export function authorize(email, password) {
  return Promise.resolve(
    "2BABBDB952D580F722FB7DF69BC97F396CD89E63B2E1E07DBD37A1C5DF921D9C"
  );
}
export function registration(username, email, password) {
  return Promise.resolve(
    "2BABBDB952D580F722FB7DF69BC97F396CD89E63B2E1E07DBD37A1C5DF921D9C"
  );
}
export function resetPassword(email) {
  return Promise.resolve(true);
}

export function userData(token) {}


export function updateUserData(changes, token) {}

export function dictsId() {

}

export function wordsByDictId(id, languageForm, languageTo) {

}

export function dictById(id) {

}