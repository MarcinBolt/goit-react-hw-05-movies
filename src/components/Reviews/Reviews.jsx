import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviewsByItsId } from '../../services/api';
import css from './Reviews.module.css';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      const reviews = await getMovieReviewsByItsId(movieId);
      setMovieReviews(reviews);
    };
    fetchMovieReviews();
  }, [movieId]);

  if (movieReviews) {
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
  }
};

export default Reviews;
