import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '33842682-eca7b00e850c4a3ea440c3225';
const OPTIONS = 'image_type=photo&orientation=horizontal&per_page=10';

const fetchArticles = async ({ message = '', currentPage = 1 }) => {
  return axios
    .get(`${BASE_URL}/?key=${KEY}&q=${message}&${OPTIONS}&page=${currentPage}`)
    .then(response => response.data.hits);
};

const api = {
  fetchArticles,
};

export default api;
