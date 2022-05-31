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
        My education has helped me develop a solid foundation for programming principles and practices. Readable code, good
        documentation, code debugging, and user-focused design are among some of the skills I excel at. I ﬁnd front-end and areas involving
        human-computer interaction to be the most engaging. However, my skills are ﬂexible and I enjoy and value back-end work too. In 2020,
        I took a slight break from my degree, but present-day I'm on track to ﬁnishing this year. In the meantime, I'm hoping to start looking for
        career opportunities early! 
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
          <p className='badge'>HTML</p>
          <p className='badge'>SQL/NoSQL</p>
          <p className='badge'>react</p>
          <p className='badge'>firebase</p>
          <p className='badge'>Docker</p>
          <p className='badge'>Source control (Git)</p>
          <p className='badge'>Linux</p>
          <p className='badge'>Windows</p>
          <p className='badge'>GUI Design</p>
          <p className='badge'>debugging/testing</p>
          <p className='badge'>Unity</p>
          <p className='badge'>Blender</p>
          <p className='badge'>Algorithms</p>
          <p className='badge'>HCI</p>
          <p className='badge'>Basic Stats and Math</p>
        </div>
      </div>
      <div className='skills__container'>
      <h2>Interpersonal Skills:</h2>
        <div className='skills__container'>
          <p className='badge'>Good communication/team work skills</p>
          <p className='badge'>Quick learner</p>
          <p className='badge'>Problem Solving</p>
          <p className='badge'>Practice with agile/sprint methodology</p>
        </div>
      </div>
      
    </div>
  )
}

export default About