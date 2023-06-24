import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from '../services/api';
import css from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const trimmedInputQueryValue = form.elements.query.value.trim();
    if (trimmedInputQueryValue === '') return;
    setSearchParams({ query: trimmedInputQueryValue });
    form.reset();
  };

  useEffect(() => {
    if (query === '' || query === null) return;
    getMoviesByQuery(query)
      .then(setMovies)
      .catch(error => console.log(error.message));
  }, [query]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input className={css.input} type="text" name="query"></input>
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 && (
        <ul className={css.ul}>
          {movies.map(movie => (
            <li className={css.li} key={movie.id}>
              <Link className={css.link} to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;
