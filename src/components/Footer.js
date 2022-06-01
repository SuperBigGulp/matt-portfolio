import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Thanks for taking a look!
        </p>
      <div className='footer-links'>
          <div className='footer-link-items'>
            <h2>You can contact me at the following sources:</h2>
            <div className='link-contact'><a href = "mailto: matthewkgurski@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> matthewkgurski@gmail.com</a></div>
            <br/>
            <div className='link-contact'><a href='https://www.linkedin.com/in/matthew-gurski/'><i className="fa fa-linkedin-square"/> LinkedIn</a></div>
            <br/>
            <div className='link-contact'><a href='https://github.com/SuperBigGulp'><i className="fa fa-github-square"/> GitHub </a></div>
            <br/>
          </div>
        </div>
      </section>
      
      
      
    </div>
  );
}

export default Footer;