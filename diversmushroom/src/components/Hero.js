import React from 'react';
import '../App.css';
import './Hero.css';

function Hero() {
    return (
        <div className="hero-container">
            <video src='/videos/vid.mp4' autoPlay loop muted />
            <h1>NeoMush</h1>
            <p><center>Mushrooms are more interesting than you probably think. <br />
            Let's talk mushrooms!</center></p>
        </div>
)}

export default Hero;
