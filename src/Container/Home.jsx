import React from "react";
// import NavBar from "../components/Navbar";
import ClubCards from "../components/clubCard";
import EventCardForm from "../components/Events";
import Profile from "../components/Profile";
import EventCard from "../components/EventCard";
import Feed from "../components/Feed";
import NavBar from "../components/Navbar";
import Footer from "../Components/Footer";
import HeroSection from "../Components/Hero";

const Home = () => {
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
};

export default Home;
