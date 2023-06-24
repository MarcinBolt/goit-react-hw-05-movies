import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviewsByItsId } from '../../services/api';
import css from './Reviews.module.css';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviewsByItsId(movieId)
      .then(setMovieReviews)
      .catch(error => console.log(error.message));
  }, [movieId]);

  if (!movieReviews) {
    return;
  }


  return (
    <div>
      {movieReviews.length > 0 ? (
        <ul className={css.reviewsList}>
          {movieReviews.map(review => (
            <li className={css.reviewsList__item} key={review.id}>
              <h3 className={css.author}>Author: {review.author}</h3>
              <p className={css.content}>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        "We don't have any reviews for this movie"
      )}
    </div>
  );
};

export default Reviews;
