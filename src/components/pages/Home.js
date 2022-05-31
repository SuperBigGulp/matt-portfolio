import React from 'react';
import '../../App.css';
import About from '../About';
import Cards from '../Cards';
import Footer from '../Footer';
import Hero from '../Hero.js';
import PageSpace from '../PageSpace.js';

function Home() {
    return (
        <>
            <Hero/>
            <PageSpace/>
            <About/>
            <PageSpace/>
            <Cards/>
            <Footer/>
        </>
    );
}

export default Home;