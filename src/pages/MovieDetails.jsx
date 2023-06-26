import { Suspense, useRef, useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetailsByItsId } from '../services/api';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const passMovieDetails = async id => {
      const movieDetails = await getMovieDetailsByItsId(id);
      setMovie(movieDetails);
    };

    passMovieDetails(movieId);
  }, [movieId]);

  if (movie) {
    const { title, poster_path, release_date, vote_average, overview, genres } = movie;

    return (
      <>
        <Link className={css.goBack} to={backLinkRef.current}>
          Go back
        </Link>
        <div className={css.container}>
          <div className={css.movieCard}>
            <div className={css.poster}>
              <img
                className={css.img}
                src={
                  movie.poster_path
                    ? `https://www.themoviedb.org/t/p/w500/${poster_path}`
                    : `https://www.banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png`
                }
                alt={title}
              />
            </div>
            <div className={css.description}>
              <h2 className={css.h2}>
                {title} ({release_date.slice(0, 4)})
              </h2>
              <p className={css.rating}>
                Rating<span className={css.rating__rate}>{vote_average.toFixed(2)}</span>
              </p>
              <div className={css.description__block}>
                <h3 className={css.h3}>Overview</h3>
                <p className={css.p}>{overview}</p>
              </div>
              <div className={css.description__block}>
                <h3 className={css.h3}>Genres</h3>
                <p className={css.p}>{genres.map(genre => genre.name).join(', ')}</p>
              </div>
            </div>
          </div>
          <div className={css.additionalInfo}>
            <h2 className={css.h2}>Additional information</h2>
            <ul className={css.ul}>
              <li className={css.li}>
                <NavLink className={css.navLink} to={'cast'}>
                  Cast
                </NavLink>
              </li>
              <li className={css.li}>
                <NavLink className={css.navLink} to={'reviews'}>
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </>
    );
  }
};

export default MovieDetails;
