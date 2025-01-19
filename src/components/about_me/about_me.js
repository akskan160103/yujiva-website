import React from 'react';
import 'components/about_me/about_me.css';
import profilePicture from 'images/about_me.jpeg';

const AboutMe = () => {
  return (
    <section id="about" className="about">
      <h1>About Me</h1>
      <div className="about-container">
        {/* Left: Profile Picture */}
        <div className="about-image">
          <img src={profilePicture} alt="Profile" />
        </div>
        {/* Right: Content */}
        <div className="about-content">
          <p>
          I have been a passionate yoga practitioner for many years. My deep connection with yoga and a longing to explore it further inspired me to pursue a Teacher Training program while I was still navigating a full-time corporate career as a banker.
          </p>

          <h2>My Journey</h2>
          <p>
          With over 800 hours of training from the renowned Yoga Institute in Santacruz, Mumbai, I have gained a rich and transformative learning experience. This journey has deepened not only my practice but also my understanding of yoga as a way of life.
          </p>

          <h2>My Philosophy</h2>
          <p>
          I believe yoga is more than just a physical practice—it's a journey inward. Yoga has taught me to embrace love in all its forms: love for oneself, for others, and for the moment we are in. It has shown me the beauty of respecting my body and living life with mindfulness and joy.
          </p>
          <h2>My Vision</h2>
          <p>
          As a certified yoga therapist recognized by the Ministry of Ayush, Government of India, I aim to share yoga's transformative power with others. Whether it’s through guiding mindful movements, offering therapeutic support, or simply creating a space of calm, my teaching reflects the love and growth that yoga has brought into my own life.          </p>

        </div>

      </div>
    </section>
  );
};

export default AboutMe;
