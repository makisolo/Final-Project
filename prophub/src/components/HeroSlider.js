import React, { useState, useEffect } from "react";
import "../styles/HeroSlider.css";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: "/images/hero1.jpg", caption: "Connecting Buyers and Sellers" },
    { image: "/images/hero2.jpg", caption: "Find Your Dream Property" },
    { image: "/images/hero3.jpg", caption: "Manage Listings Seamlessly" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${currentSlide === index ? "active" : ""}`}
        >
          <img src={slide.image} alt={slide.caption} />
          <p className="caption">{slide.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
