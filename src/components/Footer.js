import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Thanks for taking a look!
        </p>
        <p className='footer-subscription-text'>
          You can contact me at the following sources:
        </p>
      <div class='footer-links'>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>Contact Info:</h2>
              <p className='footer-subscription-text'><FontAwesomeIcon icon={faEnvelope} /> matthewkgurski@gmail.com</p>
              <div classname='link-contact'><a href='https://www.linkedin.com/in/matthew-gurski/'>LinkedIn <i class="fa fa-linkedin-square"></i></a></div>
              <br/>
              <div classname='link-contact'><a href='https://github.com/SuperBigGulp'>GitHub <i class="fa fa-github-square"></i></a></div>
              <br/>
            </div>
          </div>
        </div>
      </section>
      
      
      
    </div>
  );
}

export default Footer;