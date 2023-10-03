import axios from 'axios';

class Api {
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://backend-rutadelprogramador-production.up.railway.app/api/',
    });
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