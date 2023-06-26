import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from '../../services/api';
import css from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    const formDOM = e.currentTarget;
    const inputQueryDOM = formDOM.elements.query;
    const trimmedInputQueryValue = inputQueryDOM.value.trim();

    if (trimmedInputQueryValue === '') {
      inputQueryDOM.placeholder = `Empty search, please type anything`;
      return;
    }

    setSearchParams({ query: trimmedInputQueryValue });
    formDOM.reset();
  };

  useEffect(() => {
    if (query === '' || query === null) return;

    const fetchMovies = async () => {
      const response = await getMoviesByQuery(query);
      setMovies(response.results);
      setTotalResults(response.totalResults);
    };

    fetchMovies();
  }, [query]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input className={css.input} type="text" name="query" placeholder="Search..."></input>
        <button className={css.searchButton} type="submit">
          Search
        </button>
      </form>
      {movies.length > 0 ? (
        <ul className={css.ul}>
          {movies.map(movie => (
            <li className={css.li} key={movie.id}>
              <Link className={css.link} to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        totalResults ?? (
          <div className={css.noMatch}>We do not have this movie title in our database.</div>
        )
      )}
    </>
  );
};

export default Movies;
