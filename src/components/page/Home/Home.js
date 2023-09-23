import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesList from '../../MovieList/MoviesList';
import { fetchTrendingMovies } from '../../api'; 
import { StyledHome } from './Home.styled'; 

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrendingMovies()
      .then((results) => {
        setMovies(results);
      });
  }, []);

  return (
    <StyledHome> 
      <h1>List of most popular movies</h1>
      <MoviesList movies={movies} location={location} />
    </StyledHome>
  );
};

export default Home;
