const apiKey = 'ff9d4b6887bcbf55a4828f854b70eb96';
//Movies.js
const fetchMovies = async (query) => {
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching movies', error);
    return [];
  }
};
//Home.js
const fetchTrendingMovies = async () => {
  const apiUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching trending movies', error);
    return [];
  }
};
//MovieDetails.js
const fetchMovieDetails = async (movieId) => {
  const movieApiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
  const imageApiUrl = `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${apiKey}`;

  try {
    const [movieResponse, imageResponse] = await Promise.all([
      fetch(movieApiUrl),
      fetch(imageApiUrl),
    ]);

    const movieData = await movieResponse.json();
    const imageResult = await imageResponse.json();

    return {
      movie: movieData,
      images: imageResult.backdrops || [],
    };
  } catch (error) {
    console.error('Error fetching movie details', error);
    return {};
  }
};
//Cast.js
const fetchMovieCredits = async (movieId) => {
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error loading movie credits', error);
      throw error;
    }
  };
  //Rewievs.js
  const fetchMovieReviews = async (movieId) => {
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`;
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error:', error);
      throw error; 
    }
  };

export { fetchMovies,fetchMovieReviews, fetchMovieCredits, fetchTrendingMovies, fetchMovieDetails };
