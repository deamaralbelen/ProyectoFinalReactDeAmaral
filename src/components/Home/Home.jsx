import React from 'react';
import '../../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-hero">
        <h1 className="home-title">¡Bienvenido/a a Reset Store!</h1>
        <p className="home-subtitle">Explorá las mejores zapas del Uruguay</p>
        <a href="/" className="home-button">Ver catálogo</a>
      </div>
    </div>
  );
};

export default Home;