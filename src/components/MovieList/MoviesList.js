import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StyledMoviesList } from './MoviesList.styled'; 

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <StyledMoviesList> 
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={location}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </StyledMoviesList>
  );
};

export default MoviesList;
