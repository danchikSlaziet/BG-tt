class Api {
  constructor({baseUrl, secondUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._secondUrl = secondUrl;
  }

  _getFetch(url, options) {
    return fetch(url, options)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`)
      });
  }

  getPosts() {
    const url = this._baseUrl;
    const options = {
      method: 'GET',
      headers: this._headers
    }
    return this._getFetch(url, options);
  }
  getComments(id) {
    const url = this._secondUrl + `/${id}/comments`;
    const options = {
      method: 'GET',
      headers: this._headers
    }
    return this._getFetch(url, options);
  }
}

const api = new Api({
  baseUrl: 'https://jsonplaceholder.typicode.com/posts?_limit=20',
  secondUrl: 'https://jsonplaceholder.typicode.com/posts',
  headers: {
    'Content-Type': 'application/json'
  }
});
export default api;