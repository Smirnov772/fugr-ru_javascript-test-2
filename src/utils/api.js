const onError = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject("Сервер не доступен");
};

class Api {
  constructor({url}) {
    this._url = url;
  }
  getAllCards(params, cardLenght) {
    return fetch(`${this._url}?q=${params.input}+subject:${params.categories}&orderBy=${params.sorting}&startIndex=${cardLenght}&maxResults=30&key=AIzaSyAbe9iw6fJbZ0hHutVp3sLrfV20kvtIiaQ`, {
      method: "GET",
      params: "", 
    }).then(onError);
  }

}

const api = new Api({
  url: "https://www.googleapis.com/books/v1/volumes",

});

export default api;
