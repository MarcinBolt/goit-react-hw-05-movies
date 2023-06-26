import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCastByItsId } from '../../services/api';
import css from './Cast.module.css';

const Cast = () => {
  const [movieCast, setMovieCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCast = async () => {
      const cast = await getMovieCastByItsId(movieId);
      setMovieCast(cast);
    };
    fetchMovieCast();
  }, [movieId]);

  if (movieCast) {
    return (
      <>
        {movieCast.length > 0 ? (
          <ul className={css.actorsList}>
            {movieCast.map(actor => (
              <li className={css.actorCard} key={actor.id}>
                <div className={css.poster}>
                  <img
                    className={css.img}
                    src={
                      actor.profile_path
                        ? `https://www.themoviedb.org/t/p/w500/${actor.profile_path}`
                        : `https://www.banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png`
                    }
                    alt={actor.original_name}
                  />
                </div>
                <h4 className={css.actorName}>{actor.name}</h4>
                <p className={css.character}>Character: {actor.character}</p>
              </li>
            ))}
          </ul>
        ) : (
          "We don't have any information about cast"
        )}
      </>
    );
  }
};

export default Cast;
