import React, { useState, useEffect } from 'react';
import MoviesList from '../../MovieList/MoviesList';
import { fetchTrendingMovies } from '../../api'; 
import { StyledHome } from './Home.styled'; 

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies()
      .then((results) => {
        setMovies(results);
      });
  }, []);

  return (
    <StyledHome> 
      <h1>List of most popular movies</h1>
      <MoviesList movies={movies}/>
    </StyledHome>
  );
};

export default Home;
