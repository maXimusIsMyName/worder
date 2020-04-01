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
  return fetch('/dicts/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
  })
} 

export function wordsByDictId(id, languageForm, languageTo) {
  return test.wordsByDictId(id, languageForm, languageTo)  //TODO REMOVE IN RELEASE
  return fetch(`/dicts/${id}/play`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: {
    'language-from': languageForm,
    'language-to': languageTo   
    }
  })
}

export function dictById(id) {
 return test.dictById(id)  //TODO REMOVE IN RELEASE
 return fetch(`/dicts/${id}/` , {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json'
   }
 })
}