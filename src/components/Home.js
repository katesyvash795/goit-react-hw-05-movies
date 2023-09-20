import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiKey = 'ff9d4b6887bcbf55a4828f854b70eb96';
    const apiUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results);
      });
  }, []);

  return (
    <div>
      <h1>Список найпопулярніших фільмів</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingMovies;
