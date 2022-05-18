import { fa1, fa2 } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Hero.css';

function Hero() {
  return (
    <div className='hero-container'>
        <video src="/videos/video-1.mp4" autoPlay loop muted />
        <h1>Portfolio of Matthew Gurski</h1>
        <p>Hey Check it out!</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Click <FontAwesomeIcon icon={fa1}/></Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Click <FontAwesomeIcon icon={fa2}/></Button>
        </div>
    </div>
  );
}

export default Hero;