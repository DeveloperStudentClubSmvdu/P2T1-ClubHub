import React from "react";
import ClubCards from './Components/clubCard';
import EventCardForm from './Components/Events';
import EventCard from './Components/EventCard'
import Feed from './Components/Feed'
import NavBar from "./Components/Navbar";
import Footer from './Components/Footer';
import HeroSection from "./Components/Hero"
import './App.css';

function MyApp() {
  return (
    <div>

      <NavBar />

      <HeroSection />

      <section className="contain">
        <h2>Our Clubs</h2>
        <ClubCards />
      </section>

      <section className="event-form">
        <EventCardForm />
      </section>

      <section className="contain">
        <EventCard />
      </section>

      <Feed />

      <section className="contain">
        <Profile name='Apiksha'
        bio='I am a computer science student passionate about coding and building web applications.' 
        profilePicture="https://tse3.mm.bing.net/th?id=OIP.JAAd31mxF33HqZEgYq9zgAHaHv&pid=Api&P=0&h=180"
        />
      </section>

      <Footer />
      

    </div>
  );
}

export default MyApp;
