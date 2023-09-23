import React from 'react';
import { Link } from 'react-router-dom';
import { StyledMoviesList } from './MoviesList.styled'; 

const MoviesList = ({ movies, location }) => {
  return (
    <StyledMoviesList> 
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location.pathname }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </StyledMoviesList>
  );
};

export default MoviesList;
