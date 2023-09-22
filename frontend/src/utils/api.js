class Api {
    // constructor({ baseUrl, headers}) {
      constructor({ baseUrl }) {
      this._baseUrl = baseUrl;
      // this._headers = headers;
    }
  
    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getProfile() {
      const token = localStorage.getItem("jwt");
        return fetch(`${this._baseUrl}/users/me`, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          // credentials: 'include',
          // headers: this._headers
            // "Authorization": `Bearer ${token}`
        })
        .then(this._checkResponse)
    }

    getInitialCards() {
      const token = localStorage.getItem("jwt");
      return fetch(`${this._baseUrl}/cards`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        // credentials: 'include',
        // headers: this._headers
          // "Authorization": `Bearer ${token}`
      })
      .then(this._checkResponse)
  }

    editProfile(name, about) {
      const token = localStorage.getItem("jwt");
      return fetch(`${this._baseUrl}/users/me`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        // credentials: 'include',
        // headers: this._headers,
        // headers: {
        //   "Content-Type": "application/json",
        //   "Authorization": `Bearer ${token}`
        // },
        body: JSON.stringify({
          name,
          about
        })
    })
        .then(this._checkResponse)
    }

    addCard(name, link) {
      const token = localStorage.getItem("jwt");
      return fetch(`${this._baseUrl}/cards`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        // credentials: 'include',
        // headers: this._headers,
        // headers: {
        //   "Content-Type": "application/json",
        //   "Authorization": `Bearer ${token}`
        // },
        body: JSON.stringify({
          name,
          link
        })
      })
        .then(this._checkResponse)
      }

      deleteCard(id) {
        const token = localStorage.getItem("jwt");
        return fetch(`${this._baseUrl}/cards/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          // credentials: 'include',
          // headers: this._headers
          // "Authorization": `Bearer ${token}`
      })
        .then(this._checkResponse)
      }

      deleteLike(id) {
        const token = localStorage.getItem("jwt");
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          // credentials: 'include',
          // headers: this._headers
          // headers: {
          //   "Authorization": `Bearer ${token}`
          // },
      })
        .then(this._checkResponse)
      }

      addLike(id) {
        const token = localStorage.getItem("jwt");
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          // credentials: 'include',
          // headers: this._headers
          // headers: {
          //   "Content-Type": "application/json",
          //   "Authorization": `Bearer ${token}`
          // },
      })
        .then(this._checkResponse)
      }

      handleAvatar(avatar) {
        const token = localStorage.getItem("jwt");
        return fetch(`${this._baseUrl}/users/me/avatar`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          // credentials: 'include',
          // headers: this._headers,
          // headers: {
          //   "Content-Type": "application/json",
          //   "Authorization": `Bearer ${token}`
          // },
          body: JSON.stringify({
            avatar
          })
      })
        .then(this._checkResponse)
      }
  }

  const api = new Api({
    // baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
    baseUrl: 'https://mesto-bglvssh-back.nomoredomainsrocks.ru',
    // headers: {
    //   authorization: 'ce3e7b6f-f070-4401-b0f3-689824d2bbf0',
    //   'Content-Type': 'application/json'
    // }
  });

  export default api;