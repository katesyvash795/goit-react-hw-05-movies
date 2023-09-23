import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../api';
import { CastContainer, ActorCard } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [actorsInfoLoaded, setActorsInfoLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const defaultActorImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=185x278';

  useEffect(() => {
    if (movieId) {
      fetchMovieCredits(movieId).then(data => {
        setCast(data.cast || []);
        setLoading(false);
        setActorsInfoLoaded(true);
      });
    }
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <CastContainer>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {actorsInfoLoaded && cast.length === 0 ? (
              <p>Unfortunately, there is no information about the actors.</p>
            ) : (
              cast.map(actor => (
                <ActorCard key={actor.id}>
                  <img
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                        : defaultActorImg
                    }
                    alt={actor.name}
                  />
                  <p>{actor.name}</p>
                </ActorCard>
              ))
            )}
          </>
        )}
      </CastContainer>
    </div>
  );
};

export default Cast;
