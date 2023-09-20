import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    const apiKey = 'ff9d4b6887bcbf55a4828f854b70eb96';
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setReviews(data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error('Помилка при виконанні запиту:', error);
        setLoading(false);
      });
  }, [movieId]);

  return (
    <div>
      <h2>Огляди</h2>
      {loading ? (
        <p>Завантаження...</p>
      ) : reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p>Автор: {review.author}</p>
              <p>Огляд: {review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Оглядів немає</p>
      )}
    </div>
  );
};

export default Reviews;
