// Profile.js

import React from 'react';
import './Profile.css'; // Import the CSS file

const Profile = () => {
  return (
      <div>
        <h2>Profile</h2>
        <div className="profile-section">
          <img src="https://tse3.mm.bing.net/th?id=OIP.JAAd31mxF33HqZEgYq9zgAHaHv&pid=Api&P=0&h=180" alt="Student Photo" className="profile-photo" />
          <h3 className="profile-name">Apiksha</h3>
          <p className="profile-bio">Computer Science major passionate about coding and technology. <br />Active member of the Coding Club.</p>
          <ul className="profile-details">
            <li><strong>Major:</strong> Computer Science</li>
            <li><strong>Year:</strong> 2nd</li>
          </ul>
        </div>
      </div>
  );
};

export default Profile;
