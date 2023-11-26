const BASE_URL = 'https://auth.nomoreparties.co';

export const signUp = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then(response => {
      return response.json();
    })
    .then(res => {
      return res;
    })
    .catch(err => console.log(err));
};

export const signIn = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then(response => {
      return response.json();
    })
    .then(res => {
      return res;
    })
    .catch(err => console.log(err));
};
