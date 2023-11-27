import React from 'react';
import './clubCard.css'; 

const ClubCard = ({ name, description, imageUrl }) => (
  <div className="club-card">
    <img src={imageUrl} alt={name} className="club-image" />
    <div className="club-details">
      <h3 className="club-name">{name}</h3>
      <p className="club-description">{description}</p>
    </div>
  </div>
);

const ClubCards = () => {
  const clubs = [
    {
      name: 'Coding Club',
      description: 'Explore the world of programming and software development.',
      imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.lQHgyVzi82wNVujigwsk-AHaHa&pid=Api&P=0&h=180',
    },
    {
      name: 'Photography Club',
      description: 'Capture moments and express your creativity through photography.',
      imageUrl: 'https://st.depositphotos.com/1605004/3293/v/950/depositphotos_32939581-stock-illustration-icon-or-logo-photography-club.jpg',
    },
    {
      name: 'Music Club',
      description: 'Join fellow musicians to create beautiful music together.',
      imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.95wmPzDLISEFZZTCEQfIJgHaHa&pid=Api&P=0&h=180',
    },
  ];

  return (
    <div className="club-cards-container">
      {clubs.map((club, index) => (
        <ClubCard key={index} {...club} />
      ))}
      <button>View All Clubs</button>
    </div>
  );
};

export default ClubCards;
  