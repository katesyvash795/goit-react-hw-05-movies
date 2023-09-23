// MovieDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../../api'; // Импортируйте функцию fetchMovieDetails
import { StyledMovieDetails,MoviesDetails,Details, Additional, Container } from './MovieDetails.styled'; // Импортируйте StyledMovieDetails из файла MovieDetailsStyles

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [movieImage, setMovieImage] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    if (movieId) {
      // Вызов функции для получения деталей фильма
      fetchMovieDetails(movieId)
        .then((data) => {
          setMovie(data.movie);
          if (data.images.length > 0) {
            const firstImage = data.images[0];
            const imageUrl = `https://image.tmdb.org/t/p/w500${firstImage.file_path}`;
            setMovieImage(imageUrl);
          }
        });
    }
  }, [movieId]);


  if (!movie) {
    return <div>Loading...</div>;
  }

  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <Container>
      <StyledMovieDetails> {/* Оберните содержимое компонента в StyledMovieDetails */}
      <Link to={backLink}>Back</Link>
            <MoviesDetails>
              <img
          src={movieImage ? movieImage : defaultImg}
          alt={movie.title}/>
        <Details>
          <h1>{movie.title}</h1>
          <p><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
          <p><strong>Description:</strong> {movie.overview}</p>
          <p><strong>Rating:</strong> {movie.vote_average}</p>
        </Details>
            </MoviesDetails>      
    </StyledMovieDetails>
<Additional>
      <h3>Additional information</h3> 
      <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        <Outlet /> 
</Additional>
    </Container>
  );
};

export default MovieDetails;
