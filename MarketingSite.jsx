import React from 'react';
import './App.css'; // You can create your own CSS file for styling

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          {/* Navigation items (e.g., Home, Services, About, Contact) */}
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
        <h1>Hire the best Marketing Team.</h1>
        {/* Additional header content (e.g., slogan, call-to-action) */}
        <p>Your success is our priority!</p>
      </header>

      <section className="services">
        {/* Professional Services section */}
        <div className="service">
          <img src="service-icon-1.png" alt="Service 1" />
          <h2>Service 1</h2>
          <p>Our expert team provides...</p>
        </div>
        {/* Repeat similar service blocks for other services */}
      </section>

      <section className="testimonials">
        {/* Customer Testimonials */}
        <div className="testimonial">
          <img src="customer-avatar-1.jpg" alt="Customer 1" />
          <p>"Amazing results! Highly recommended."</p>
          <span>- John Doe</span>
        </div>
        {/* Repeat similar testimonial blocks */}
      </section>

      <section className="about-us">
        {/* About Us section */}
        <img src="about-image.jpg" alt="About Us" />
        <p>We are a passionate team...</p>
      </section>

      <footer className="contact-us">
        {/* Contact information and form */}
        <h3>Contact Us</h3>
        <p>Email: info@marketingteam.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        {/* Add a contact form here */}
      </footer>
    </div>
  );
}

export default App;