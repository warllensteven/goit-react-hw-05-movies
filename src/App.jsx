import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Cast from './components/Cast/Cast';
import Reviews from './components/Reviews/Reviews';

const App = () => {
  return (
    <Router basename="/goit-react-hw-04-image-finder">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/movies/:movieId" element={<MovieDetails/>} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
      </Routes>
    </Router>
  );
};

export default App;
