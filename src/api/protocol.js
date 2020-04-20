import * as test from './test'

export function authorize(email, password) {
  return test.authorize(email,password); //TODO REMOVE IN RELEASE
}
export function registration(username, email, password) {
  return test.registration(username, email, password); //TODO REMOVE IN RELEASE

}
export function resetPassword(email) {
  return test.resetPassword(email)  //TODO REMOVE IN RELEASE
}

export function userData(token) {
  return test.userData(token)
}

export function updateUserData(changes, token) {
  return test.updateUserData(changes, token)
}



export function dictsId() {
  return test.dictsId()  //TODO REMOVE IN RELEASE
  return fetch('api/dicts/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
  })
} 

export function wordsByDictId(id) {
  return test.wordsByDictId(id)  //TODO REMOVE IN RELEASE
  return fetch(`api/dicts/${id}/words`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function dictById(id) {
 return test.dictById(id)  //TODO REMOVE IN RELEASE
 return fetch(`api/dicts/${id}/details` , {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json'
   }
 })
}