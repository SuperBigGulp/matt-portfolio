import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
    } else{
      setButton(true);
    }
  };

  useEffect(() =>{
    showButton()
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
              <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                Matthew Gurski <FontAwesomeIcon icon={faHome}/>
              </Link>
              <div className='menu-icon' onClick={handleClick}>
                <FontAwesomeIcon icon={click ? faTimes : faBars}/>
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                    Projects
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                    About Me
                  </Link>
                </li>
              </ul>
              {button && <Button buttonStyle='btn--outline'>Sign Up?</Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar