// Movies.js

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchForm from '../../SearchForm/SearchForm';
import MoviesList from '../../MovieList/MoviesList';
import { fetchMovies } from '../../api'; // Импортируйте функцию fetchMovies

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('query');
    if (query) {
      // Вызов функции для поиска фильмов
      fetchMovies(query)
        .then((results) => {
          setSearchResults(results);
        });
    }
  }, [location.search]);

  return (
    <div>
      <center><h1>Movie search</h1>
      <SearchForm />
      <MoviesList movies={searchResults} location={location} /></center>
    </div>
  );
};

export default Movies;
