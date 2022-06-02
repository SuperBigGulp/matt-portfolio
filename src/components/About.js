import React from 'react';
import './About.css';

function About() {
  return (
    
    <div className='about'>
      <h1>About Me</h1>
      <div className='about__container'>
        <figure className='portait__pic-wrap'>
          <img className='portrait__img' alt='portrait' src='images/portrait.jpg'></img>
        </figure>
        <p>
        &emsp;My name is Matthew Gurski and I’m currently in my fourth year at the University of Saskatchewan. I have been working towards a bachelor of computer science and am on track to finish all my course work in the fall of 2022! My education has helped me develop a solid foundation for programming principles and practices. Readable code, good documentation, debugging, and user-focused design are some of the programming traits I’ve come to value. In regards to specific development areas, I enjoy both front and back-end work. 
        <br/><br/>
        &emsp;In my personal time, I enjoy developing and playing video games. Video game development is a passion of mine and I hope to pursue it as a potential career path. Additionally, I enjoy hiking/camping in the summer, watching movies, and drinking tea!
        </p>
      </div>
      <div className='skills__container'>
      <h2>Technical Skills:</h2>
        <div className='skills__container'>
          <p className='badge'>C</p>
          <p className='badge'>C#</p>
          <p className='badge'>Python</p>
          <p className='badge'>Java</p>
          <p className='badge'>JavaScript</p>
          <p className='badge'>HTML &#38; CSS</p>
          <p className='badge'>SQL &#38; NoSQL</p>
          <p className='badge'>Node.js</p>
          <p className='badge'>React</p>
          <p className='badge'>Firebase</p>
          <p className='badge'>Docker</p>
          <p className='badge'>Source control (Git)</p>
          <p className='badge'>GUI Design</p>
          <p className='badge'>Debugging &#38; Testing</p>
          <p className='badge'>Unity</p>
          <p className='badge'>Blender</p>
        </div>
      </div>
      <div className='skills__container'>
      <h2>Interpersonal Skills:</h2>
        <div className='skills__container'>
          <p className='badge'>Good communication</p>
          <p className='badge'>Team Player</p>
          <p className='badge'>Quick learner</p>
          <p className='badge'>Problem Solver</p>
          <p className='badge'>Practice with Agile/Sprint methodology</p>
        </div>
      </div>
      
    </div>
  )
}

export default About