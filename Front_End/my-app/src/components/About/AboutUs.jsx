import React from 'react';
import './About_Us.css'; 
import About_Us from "./About_Us.png";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="heading-container">
        <h1 className="heading_card">Why Choose Us</h1>
      </div>
      <div className="content-container">
        <div className="text-container">
          <p className="heading_d"> 
          Welcome to Str Adventures, your trusted companion in the world of travel exploration! At Str Adventures, we're passionate about crafting unforgettable travel experiences that inspire, delight, and create cherished memories for our client. 
          </p>
          <p className='heading_d'>Whether you're dreaming of serene escapes or thrilling adventures, we are here to turn those dreams into reality. Our team of dedicated travel experts works tirelessly to offer you the best destinations, personalized itineraries, and exceptional service. With Str Adventures, every journey is a chance to discover something new and extraordinary.</p>
          <p className='heading_d'>At Str Adventures, we believe in the transformative power of travel to broaden horizons, foster connections, and create lifelong memories. With a focus on customer satisfaction and unparalleled service, we strive to exceed your expectations at every step of your journey.
            </p>
          {/* <button className="learn-more-btn">Learn More</button> */}
        </div>
        <div className="image-container">
          <img src={About_Us} alt="Snowy Mountains" className="about-us-image" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
