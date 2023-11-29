import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import './Header.css';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/trending/movie/day?api_key=cbf9fdb652affcfaf7a9ba352e1c3701'
        );
        const data = await response.json();
        setTrendingMovies(data.results);
      } catch (error) {
        console.error('Error fetching trending movies: ', error);
      }
    };

    fetchTrendingMovies();
  }, []);

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
      <h1>Trending Movies</h1>
      <ul className="movies-list">
        {trendingMovies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} className="movie-link">
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

