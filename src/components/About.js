import React from 'react';
import './About.css';

function About() {
  return (
    
    <div className='about'>
      <h1>About Me!</h1>
      <div className='about__container'>
        <figure className='portait__pic-wrap'>
          <img className='portrait__img' alt='portrait' src='images/portrait.jpg'></img>
        </figure>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  )
}

export default About