import React from 'react';
import '../App.css';
import './Hero.css';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';


const Hero = () => {
  const particlesInit = async (main) => {

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    
  };
  return (
    <div className='hero-container'>
      <h3>Hello, I'm Matthew Gurski<br/>
        Welcome to my Portfolio!</h3>
      <div className='particles-js'>
          <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          "fullScreen": {
            "enable": true,
            "zIndex": 1
        },
        "fpsLimit": 120,
        "particles": {
            "number": {
                "value": 30,
                "density": {
                    "enable": false,
                    "area": 800
                }
            },
            "color": {
                "value": ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921"]
            },
            "shape": {
                "type": "circle"
            },
            "opacity": {
                "value": 0.8,
                "random": {
                    "enable": true,
                    "minimumValue": 0.4
                },
                "animation": {
                    "enable": false,
                    "speed": 1,
                    "minimumValue": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 400,
                "random": {
                    "enable": true,
                    "minimumValue": 300
                },
                "animation": {
                    "enable": true,
                    "speed": 100,
                    "minimumValue": 300,
                    "sync": false
                }
            },
            "move": {
                "enable": true,
                "speed": 5,
                "direction": "top",
                "random": false,
                "straight": false,
                "outModes": {
                    "default": "out"
                }
            }
        },
        "detectRetina": true,
        "background": {
            "color": "#ffffff",
            "repeat": "no-repeat",
            "size": "cover"
        }
          }}
        />
      </div>
    </div>
  );
}

export default Hero;