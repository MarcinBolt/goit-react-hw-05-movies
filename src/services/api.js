import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '11e4e63a2c69cba299e8f5b35f7baf1c';
const LANG = 'en-US';

export const getTrendingMovies = async () => {
  const url = `trending/movie/day?api_key=${KEY}`;
  const response = await axios.get(url);
  return response.data.results;
};

export const getMoviesByQuery = async query => {
  const url = `search/movie?api_key=${KEY}&language=${LANG}&query=${query}&page=1&include_adult=false`;
  const response = await axios.get(url);
  return response.data.results;
};

export const getMovieDetailsByItsId = async id => {
  const url = `movie/${id}?api_key=${KEY}&language=${LANG}`;
  const response = await axios.get(url);
  return response.data;
};

export const getMovieCastByItsId = async id => {
  const url = `movie/${id}/credits?api_key=${KEY}&language=${LANG}`;
  const response = await axios.get(url);
  return response.data.cast;
};

export const getMovieReviewsByItsId = async id => {
  const url = `movie/${id}/reviews?api_key=${KEY}&language=${LANG}&page=1`;
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
