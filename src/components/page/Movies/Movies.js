import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchForm from '../../SearchForm/SearchForm';
import MoviesList from '../../MovieList/MoviesList';
import { fetchMovies } from '../../api';

const Movies = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get('query');

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (query) {
      fetchMovies(query)
        .then((results) => {
          setSearchResults(results);
        });
    }
  }, [query]);

  return (
    <div>
      <center>
        <h1>Movie search</h1>
        <SearchForm />
        <MoviesList movies={searchResults} />
      </center>
    </div>
  );
};

export default Movies;
