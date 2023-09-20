import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    const apiKey = 'ff9d4b6887bcbf55a4828f854b70eb96';
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setCast(data.cast);
        setLoading(false);
      })
      .catch(error => {
        console.error('Помилка при виконанні запиту:', error);
        setLoading(false);
      });
  }, [movieId]);

  return (
    <div>
      <h2>Акторський склад</h2>
      {loading ? (
        <p>Завантаження...</p>
      ) : cast.length === 0 ? (
        <p>На жаль, інформація про акторів відсутня.</p>
      ) : (
        <ul>
          {cast.map(actor => (
            <li key={actor.id}>
              <p>{actor.name}</p>
              {actor.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                  alt={actor.name}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;
