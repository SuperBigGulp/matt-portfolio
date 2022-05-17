import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo'>
                    HOME <FontAwesomeIcon icon={faHome}/>
                </Link>
            </div>
        </nav>
    </>
  )
}

export default Navbar