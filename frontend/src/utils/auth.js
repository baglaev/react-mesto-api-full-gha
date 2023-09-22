export const BASE_URL = "http://localhost:3000";
// export const BASE_URL = "https://auth.nomoreparties.co";

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Accept": 'application/json',
      "Content-Type": "application/json",
    },
    // credentials: 'include',
    body: JSON.stringify({
      password: password,
      email: email
    }),
  })
    .then(checkResponse)
}

export const login = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Accept": 'application/json',
      "Content-Type": "application/json",
    },
    // credentials: 'include',
    body: JSON.stringify({
      password: password,
      email: email,
    }),
  })
    .then(checkResponse)
}

export const checkToken = (token) => {
  // export const checkToken = () => {
    // const token = localStorage.getItem("token");
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  })
    .then(checkResponse)
}

function checkResponse(res){
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}