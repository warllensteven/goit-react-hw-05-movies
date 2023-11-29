import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Reviews.css'; 

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=cbf9fdb652affcfaf7a9ba352e1c3701`
        );
        const data = await response.json();
        setReviews(data.results);
      } catch (error) {
        console.error('Error fetching movie reviews: ', error);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      <h1>Reviews</h1>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
