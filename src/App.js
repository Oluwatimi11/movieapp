import './App.css'; 
import React from "react";
import Hero from './components/Hero/Hero';
import { MovieState } from './Context/MovieContext';

const App = () => {
  return (
    <MovieState>
            <Hero />
    </MovieState>
  );
}

export default App;
