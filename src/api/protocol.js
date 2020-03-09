export function requestAuthorize(email, password) {
  return Promise.resolve(
    "2BABBDB952D580F722FB7DF69BC97F396CD89E63B2E1E07DBD37A1C5DF921D9C"
  );
}
export function requestRegistration(username, email, password) {
  return Promise.resolve(
    "2BABBDB952D580F722FB7DF69BC97F396CD89E63B2E1E07DBD37A1C5DF921D9C"
  );
}
export function requestResetPassword(email) {
  return Promise.resolve(true);
}
export function requestUpdatePassword(password, token) {}
export function requestUpdateUsername(username, token) {}
export function requestUserData(token) {}
