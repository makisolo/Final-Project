import React from "react";
import HeroSlider from "../components/HeroSlider"; 
import { Link } from "react-router-dom";
import "../styles/Homepage.css";

const Home = () => {
  return (
    <div className="homepage">
      <HeroSlider />
      <section className="about-us">
        <h2>About Us</h2>
        <p>At Prop-Hub, we believe finding your dream property or selling one should be simple and stress-free. Our platform is designed to seamlessly connect buyers, sellers, and real estate professionals, creating a trusted space for all your property needs. With advanced search tools, personalized recommendations, and dedicated support, we empower our users to make informed decisions. Whether you're exploring the market, managing listings, or analyzing trends, Prop-Hub is here to guide you every step of the way!</p>
      </section>
      <section className="services">
        <h2>Services Offered</h2>
        <div className="service-cards">
          <div className="card">
            <h3>Property Listings</h3>
            <p>Explore the best properties available on the market.</p>
          </div>
          <div className="card">
            <h3>Property Management</h3>
            <p>Manage your listings seamlessly as a seller.</p>
          </div>
          <div className="card">
            <h3>Advanced Analytics</h3>
            <p>Admins get actionable insights and data analysis tools.</p>
          </div>
        </div>
      </section>
      <section className="cta">
      <Link to="/register" className="cta-button">
        Start your property journey today
      </Link>
      </section>
    </div>
  );
};

export default Home;
