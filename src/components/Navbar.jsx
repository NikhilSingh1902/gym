// import React from 'react'

// const Navbar = () => {
//   return (
//     <header>
//     <p>FITNESS CENTER</p>
//   </header>
//   )
// }

// export default Navbar
// Navbar.js
import React, { useState } from 'react';
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false); // State to handle mobile menu toggle

  const handleMenuToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">GymFluencer</a>
      </div>
      <ul className={`navbar-links ${isMobile ? 'active' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-toggle" onClick={handleMenuToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;

