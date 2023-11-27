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


      <Footer />
      

    </div>
  );
}

export default MyApp;
