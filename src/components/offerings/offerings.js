import React from 'react';
import './offerings.css';
import yogaTherapyImg from 'images/output_orange_yoga.png'; // Update the paths
import fullmoonmeditationImg from 'images/Meditating-PNG-Pic.png';
import yogaSessionsImg from 'images/yoga_new.png';
import corporateSessionsImg from 'images/corporate_yoga.png';

function Offerings() {
  return (
    <section id="offerings" className="offerings">
      <h1>Offerings</h1>
      <div className="offerings-container">
        {/* First Row */}
        <div className="offerings-row">
          <div className="offerings-item">
            <img src={yogaTherapyImg} alt="Yoga Therapy" />
            <h2>Yoga Therapy</h2>
          </div>
          <div className="offerings-item">
            <img src={fullmoonmeditationImg} alt="Meditation Sessions" />
            <h2>Meditation Sessions</h2>
          </div>
        </div>

        {/* Second Row */}
        <div className="offerings-row">
          <div className="offerings-item">
            <img src={yogaSessionsImg} alt="Yoga Sessions" />
            <h2>Yoga Sessions</h2>
          </div>
          <div className="offerings-item">
            <img src={corporateSessionsImg} alt="Corporate Sessions" />
            <h2>Corporate Sessions</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offerings;