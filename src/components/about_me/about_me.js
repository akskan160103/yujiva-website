import React from 'react';
import 'components/about_me/about_me.css';
import profilePicture from 'images/about_me.jpeg';

const AboutMe = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Left: Profile Picture */}
        <div className="about-image">
          <img src={profilePicture} alt="Profile" />
        </div>

        {/* Right: Content */}
        <div className="about-content">
  <h1>ABOUT ME</h1>
  <p>
    A vivid yoga practitioner for many years, her passion and longing led her to pursue the Teachers Training while she was still pursuing her full-time corporate job as a banker.
  </p>

  <h2>LEARNING JOURNEY</h2>
  <p>
    Geetha now has a rich learning experience of 800 hours of training from the reputed yoga school in India, The Yoga Institute Santacruz, Mumbai.
  </p>

  <h2>QUALIFICATIONS</h2>
  <p>
    She is also a qualified yoga therapist certified by the Ministry of Ayush, Government of India.
  </p>

  <h2>TEACHING PHILOSOPHY</h2>
  <p>
    What she teaches is a reflection of what Yoga has taught her – To be Love. Love that teaches to respect one and all, one's own body, to live the moment, and enjoy it to the fullest.
  </p>

  <h2>FINAL THOUGHT</h2>
  <blockquote>
    "Yoga is an inward journey of transformation, and I am excited to share my knowledge."
  </blockquote>
</div>

      </div>
    </section>
  );
};

export default AboutMe;
