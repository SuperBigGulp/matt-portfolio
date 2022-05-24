import React from 'react';
import '../App.css';
import './Hero.css';

function Hero() {
  return (
    <div className='hero-container'>
        <video src="/videos/video-1.mp4" autoPlay loop muted />
        <h1>Portfolio of Matthew Gurski</h1>
    </div>
  );
}

export default Hero;