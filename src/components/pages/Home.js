import React from 'react';
import '../../App.css';
import About from '../About';
import Cards from '../Cards';
import Footer from '../Footer';
import Hero from '../Hero.js';

function Home() {
    return (
        <>
            <Hero/>
            <About/>
            <Cards/>
            <Footer/>
        </>
    );
}

export default Home;