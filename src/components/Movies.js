import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const searchMovies = async () => {
      const apiKey = 'ff9d4b6887bcbf55a4828f854b70eb96';
      const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setSearchResults(data.results);
      } catch (error) {
        console.error('Помилка при виконанні запиту:', error);
      }
    };

    if (searchTerm) {
      searchMovies();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <div>
      <h1>Пошук кінофільмів</h1>
      <input
        type="text"
        placeholder="Введіть ключове слово"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
