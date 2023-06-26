import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendingMovies } from '../../services/api';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const response = await getTrendingMovies();
      setMovies(response);
    };

    fetchTrendingMovies();
  }, []);

  return (
    <>
      <h2 className={css.h2}>Trending today</h2>
      <ul className={css.ul}>
        {movies.map(movie => (
          <li className={css.li} key={movie.id}>
            <Link className={css.link} to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
