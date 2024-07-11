import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container" id='contact'>
      <h2>Contact Me</h2>
      <div className="contact-info">
        <div className="contact-item">
          <FontAwesomeIcon icon={faPhone} className="contact-icon" />
          <span>+91 7708174149</span>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          <span>kirthick77@gmail.com</span>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
          <span>Sathyamangalam, Tamil Nadu</span>
        </div>
        <div className='app'>
        <div className="contact-item">
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
          </a>
        </div>
          
        <div className="contact-item">
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="contact-icon" />
    
          </a>
        </div>
        <div className="contact-item">
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="contact-icon" />
            
          </a>
        </div>
        <div className="contact-item">
          <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="contact-icon" />
          
          </a>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
