// Home.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesList from '../../MovieList/MoviesList';
import { fetchTrendingMovies } from '../../api'; // Импортируйте функцию fetchTrendingMovies
import { StyledHome } from './Home.styled'; // Импортируйте StyledHome из файла HomeStyles

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    // Вызов функции для получения популярных фильмов
    fetchTrendingMovies()
      .then((results) => {
        setMovies(results);
      });
  }, []);

  return (
    <StyledHome> {/* Оберните содержимое компонента в StyledHome */}
      <h1>List of most popular movies</h1>
      <MoviesList movies={movies} location={location} />
    </StyledHome>
  );
};

export default Home;
