import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import './MovieDetails.css';
import '../Home/Header.css';


const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=cbf9fdb652affcfaf7a9ba352e1c3701`
        );
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details: ', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const toggleCast = () => {
    setShowCast(!showCast);
  };

  const toggleReviews = () => {
    setShowReviews(!showReviews);
  };

  return (
    <div className="home-container">
      <div className="header">
        <Link to="/" className="active">
          Home
        </Link>
        <Link to="/movies">
          Movies
        </Link>
      </div>
    <div className="movie-details-container">
      {movieDetails && (
          <>
          <div className="movie-info">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
            <div className="movie-details">
              <h1>
                {movieDetails.title} ({movieDetails.release_date && movieDetails.release_date.substring(0, 4)})
              </h1>
              <p>User Score: {movieDetails.vote_average}</p>
              <p>{movieDetails.overview}</p>
              <p>
                <strong>Genres: </strong>
                {movieDetails.genres.map((genre) => genre.name).join(', ')}
              </p>
            </div>
          </div>
          <div className="additional-info">
            <h2>Additional Information</h2>
            <button onClick={toggleCast}>
              {showCast ? 'Cast' : 'Cast'}
            </button>
            {showCast && <Cast movieId={movieId} />}

            <button onClick={toggleReviews}>
              {showReviews ? 'Reviews' : 'Reviews'}
            </button>
            {showReviews && <Reviews movieId={movieId} />}
          </div>
        </>
      )}
      </div>
      </div>
  );
};

export default MovieDetails;

