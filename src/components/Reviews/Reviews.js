import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../api'; 
import { ReviewCard,AuthorName, ReviewContent, NoReviewsMessage } from "./Reviews.styled";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true); 
    fetchMovieReviews(movieId) 
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error', error);
        setLoading(false);
      });
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      {loading ? (
        <p>Loading...</p>
      ) : reviews.length > 0 ? (
        reviews.map((review) => (
          <ReviewCard key={review.id}>
            <AuthorName>Author: {review.author}</AuthorName>
            <ReviewContent>Review: {review.content}</ReviewContent>
          </ReviewCard>
        ))
      ) : (
        <NoReviewsMessage>There are no reviews</NoReviewsMessage>
      )}
    </div>
  );}
  
export default Reviews;
