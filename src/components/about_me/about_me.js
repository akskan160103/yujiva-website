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
          <h1>PERSONAL PROFILE</h1>
          <p>
            Completed the 200 Hours TTC from The Yoga Institute (
            <a href="https://theyogainstitute.org/" target="_blank" rel="noopener noreferrer">
              https://theyogainstitute.org/
            </a>
            ), Mumbai in December 2021 from Dubai. A banker by profession for over 20 years, the
            calling for yoga led me to complete this rigorous course. Am keen to work with children
            especially teenage girls and in this pursuit have been fortunate to be connected with
            Love to care foundation based in Bangalore and teaching the girls in the orphanage once
            a week. (online)
          </p>
          <h2>PURPOSE</h2>
          <ul>
            <li>Am passionate about sharing my knowledge in yoga to the world.</li>
          </ul>
          <h2>TEACHING EXPERIENCE</h2>
          <ul>
            <li>Started my yoga classes in Bur Dubai since August 2022 under the name Yujiva.</li>
            <li>
              Assisted Ms. Sneha in the 200 hours TTC concluded in May 2022, by The Yoga Institute,
              in Dubai.
            </li>
            <li>Conducted various community yoga classes in Dubai Hills and Nilaya House.</li>
            <li>Conducted Corporate wellness program for The American Hospital Dubai.</li>
          </ul>
          <h2>EDUCATION BACKGROUND</h2>
          <ul>
            <li>Completed my Bachelors in Commerce from The Mumbai University, Mumbai, India.</li>
            <li>Completed PGDBF program from ICFAI, Hyderabad.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
