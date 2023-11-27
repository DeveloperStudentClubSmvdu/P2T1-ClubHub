// NavBar.js

import React from 'react';
import './Navbar.css';

const NavBar = () => {
  return (
    <nav>
        <img src="https://www.careeryojana.in/wp-content/uploads/2021/04/SMVDU-University.png" alt="Logo" className="logo" />
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Clubs</a></li>
        <li><a href="#">Create Event</a></li>
        <li><a href="#">Upcoming Events</a></li>
        <li><a href="#">Feed</a></li>
        <li><a href="#">Profile</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
