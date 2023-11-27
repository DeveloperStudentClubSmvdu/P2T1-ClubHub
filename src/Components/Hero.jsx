// HeroSection.js

import React from 'react';
import './Hero.css';

const HeroSection = () => {
  return (
    <section id="hero">
      <div className="hero-content">
        <h1>CLUBHUB SMVDU</h1>
        <p><strong>Where Ideas Thrive and Friendships Flourish!</strong></p>
        <a href="pages/Register.html" className="btn btn-lg">Join Now</a>
      </div>
    </section>
  );
}

export default HeroSection;
