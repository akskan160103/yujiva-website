import React from 'react';
import 'components/contact/contact.css';

function ContactMe() {
  return (
    <section id="contact" className="contact">
      <h1>Contact Me</h1>
      <div className="contact-container">
        {/* Email */}
        <div className="contact-item">
          <ion-icon name="mail-outline" className='contact-icon'></ion-icon>
          <h2>Email</h2>
            <a href="mailto:contact@yujiva.com">Send me an email</a>
        </div>

        {/* WhatsApp */}
        <div className="contact-item">
          <ion-icon name="logo-whatsapp" className='contact-icon'></ion-icon>
          <h2>WhatsApp</h2>
            <a href="https://wa.me/971586331325" target="_blank" rel="noopener noreferrer">
              Send me a WhatsApp message
            </a>
        </div>

        {/* Instagram */}
        <div className="contact-item">
          <ion-icon name="logo-instagram" className='contact-icon'></ion-icon>
          <h2>Instagram</h2>
          
            <a href="https://www.instagram.com/yu_jiva" target="_blank" rel="noopener noreferrer">
              Send me an Instagram DM
            </a>
        </div>   
      </div>
    </section> 
  );
}

export default ContactMe;
