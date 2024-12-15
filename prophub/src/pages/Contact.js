import React from 'react';
import '../styles/Contact.css';

const Contact = () => (
  <div className="contact-page">
    <section className="contact-header">
      <h2>Contact Us</h2>
      <p>Have questions or need assistance? We'd love to hear from you!</p>
    </section>
    <form className="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" rows="6" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </div>
);

export default Contact;
