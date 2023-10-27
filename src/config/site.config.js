import axios from 'axios';

class Api {
  constructor() {
    const userDataString = localStorage.getItem('userData');
    const userData = userDataString ? JSON.parse(userDataString) : null;

    this.instance = axios.create({
      baseURL: 'https://backend-rutadelprogramador-production.up.railway.app/api/',
      headers: {
        common: {
          'Accept': 'application/json',
          'Authorization': userData && userData.access_token ? `Bearer ${userData.access_token}` : null,
        }
      }
    });
  }

  setAuthorizationToken(token) {
    this.instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  clearAuthorizationToken() {
    delete this.instance.defaults.headers.common['Authorization'];
  }

  get(url, config = {}) {
    return this.instance.get(url, config);
  }

  post(url, data, config = {}) {
    return this.instance.post(url, data, config);
  }

  put(url, data, config = {}) {
    return this.instance.put(url, data, config);
  }

  remove(url, config = {}) {
    return this.instance.delete(url, config);
  }
}

const api = new Api();

export default api;