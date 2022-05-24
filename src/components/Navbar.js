import React, { Component } from 'react';
import { Link, animateScroll as scroll} from 'react-scroll';
import '@fortawesome/free-solid-svg-icons';
import './Navbar.css';


export default class Navbar extends Component {

  scrollToTop = () => {
    scroll.scrollToTop(); 
  };

  render() {
    return (
      <>
        <nav className='navbar_custom'>
            <div className='navbar-container'>
              <Link onClick={this.scrollToTop} className='navbar-logo'>
                Matthew Gurski
              </Link>

              <ul className='nav-menu'>
                <li className='nav-item_custom'>
                  <Link  
                    className='nav-links'
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                    About Me
                  </Link>
                </li>
                <li className='nav-item_custom'>
                  <Link 
                  className='nav-links'
                  to="cards"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
        </nav>
      </>
    )
  }
}