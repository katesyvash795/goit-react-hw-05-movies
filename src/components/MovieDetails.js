import React, { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [movieImage, setMovieImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const apiKey = 'ff9d4b6887bcbf55a4828f854b70eb96';

    if (movieId) {
      const movieApiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
      const imageApiUrl = `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${apiKey}`;
      fetch(movieApiUrl)
        .then(response => response.json())
        .then(data => {
          setMovie(data);
        })
        .catch(error => {
          console.error('Помилка при виконанні запиту для фільму:', error);
        });
      fetch(imageApiUrl)
        .then(response => response.json())
        .then(data => {
          if (data.backdrops && data.backdrops.length > 0) {
            const firstImage = data.backdrops[0];
            const imageUrl = `https://image.tmdb.org/t/p/w500${firstImage.file_path}`;
            setMovieImage(imageUrl);
          }
        })
        .catch(error => {
          console.error(
            'Помилка при виконанні запиту для зображень фільму:',
            error
          );
        });
    }
  }, [movieId]);

  const handleGoBack = () => {
    navigate('/');
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button onClick={handleGoBack}>Повернутися назад</button>
      <h1>{movie.title}</h1>
      <img src={movieImage} alt={movie.title} />
      <p>Опис: {movie.overview}</p>
      <p>Рейтинг: {movie.vote_average}</p>
      <Link to={`/movies/${movieId}/cast`}>Акторський склад</Link>
      <Link to={`/movies/${movieId}/reviews`}>Огляди</Link>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
