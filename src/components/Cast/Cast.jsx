import React, { useEffect, useState } from 'react';
import './Cast.css';

const Cast = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=cbf9fdb652affcfaf7a9ba352e1c3701`
        );
        const data = await response.json();
        setCast(data.cast || []);
      } catch (error) {
        console.error('Error fetching cast: ', error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast && cast.map((actor) => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;

