import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Movies.css';
import '../Home/Header.css';

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=cbf9fdb652affcfaf7a9ba352e1c3701&query=${searchTerm}`
      );
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error searching movies: ', error);
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="movies-container">
      <div className="header">
        <Link to="/">
          Home
        </Link>
        <Link to="/movies" className="active">
          Movies
        </Link>
      </div>
      <h1>Search Movies</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
      <ul className="movies-list">
        {searchResults.map((movie) => (
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

export default Movies;
