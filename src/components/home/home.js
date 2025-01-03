import React from 'react';
import 'components/home/home.css';
import logo from 'images/Yujiva 1.png'; 

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-container">
        {/* Logo Image */}
        <div className="home-logo">
          <img src={logo} alt="Yujiva Logo" />
        </div>
        
        {/* Description */}
        <div className="home-description">
          <h1>What is Yujiva?</h1>
          <p>
            Yujiva is inspired by the Sanskrit word "Yuj," which means "to unite" or "to join."
            This reflects the essence of yoga and the mission of this venture: to bring people closer to mindfulness, physical well-being, and inner peace.
            Founded by a passionate individual, Yujiva celebrates the journey of self-discovery and holistic health through yoga.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
