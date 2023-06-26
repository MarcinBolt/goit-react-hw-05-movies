import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '11e4e63a2c69cba299e8f5b35f7baf1c';
const API_KEY_AND_LANG = `api_key=${KEY}&language=en-US`;

export const getTrendingMovies = async () => {
  const url = `trending/movie/day?api_key=${KEY}`;
  const response = await axios.get(url);
  return response.data.results;
};

export const getMoviesByQuery = async query => {
  const url = `search/movie?${API_KEY_AND_LANG}&query=${query}&page=1&include_adult=false`;
  const response = await axios.get(url);
  console.log(response.data);
  return response.data;
};

export const getMovieDetailsByItsId = async id => {
  const url = `movie/${id}?${API_KEY_AND_LANG}`;
  const response = await axios.get(url);
  return response.data;
};

export const getMovieCastByItsId = async id => {
  const url = `movie/${id}/credits?${API_KEY_AND_LANG}`;
  const response = await axios.get(url);
  return response.data.cast;
};

export const getMovieReviewsByItsId = async id => {
  const url = `movie/${id}/reviews?${API_KEY_AND_LANG}&page=1`;
  const response = await axios.get(url);
  return response.data.results;
};

const api = {
  getTrendingMovies,
  getMoviesByQuery,
  getMovieDetailsByItsId,
  getMovieCastByItsId,
  getMovieReviewsByItsId,
};

export default api;
