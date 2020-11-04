const ROOT_URL = "https://frebi.willandskill.eu/"
const API_URL = `${ROOT_URL}api/v1/`
const AUTH_URL = `${ROOT_URL}auth/`
const LOGIN_URL = `${ROOT_URL}api-token-auth/`

export default class {

  login(email, password) {
    const payload = {
      email, password
    }
    return fetch(LOGIN_URL, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: this.getPublicHeaders()
    })
  }

  getMe() {
    const url = `${API_URL}me`
    return fetch(url, {
      headers: this.getPrivateHeaders()
    })
  }

  getCustomerList() {
    const url = `${API_URL}customers`
    return fetch(url, {
      headers: this.getPrivateHeaders()
    })
  }

  getPublicHeaders() {
    return {
      "Content-Type": "application/json"
    }
  }

  getPrivateHeaders() {
    return {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.getToken()}`
    }
  }

  setToken(token) {
    localStorage.setItem("JWT_APP", token)
  }

  getToken() {
    return localStorage.getItem("JWT_APP")
  }
}