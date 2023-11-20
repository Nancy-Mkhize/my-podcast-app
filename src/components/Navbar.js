import React from 'react';
import { Link } from 'react-router-dom';

import podcastsImage from '../images/podcasts.png';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <img src={podcastsImage} alt="Podcasts Logo" className="logo" />

        <Link to="/" className="btn next-btn">
          Home
        </Link>

        <Link to="/about" className="btn next-btn">
          About
        </Link>

        <Link to="/contact" className="btn next-btn">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
