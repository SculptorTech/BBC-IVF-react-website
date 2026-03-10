import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// ✅ CHANGE THIS PATH ACCORDING TO YOUR PROJECT
import bbcLogo from "../assets/images/logo.png";

function Navbar() {
  const [galleryOpen, setGalleryOpen] = useState(false);

  return (
    <header className="main-navbar">
      <div className="navbar-inner">
        {/* ✅ LOGO */}
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <img src={bbcLogo} alt="BBC Logo" className="bbc-logo" />
          </Link>
        </div>

        {/* ✅ LINKS */}
        <nav className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>

          {/* ✅ GALLERY DROPDOWN */}
          <div
            className="nav-dropdown"
            onMouseEnter={() => setGalleryOpen(true)}
            onMouseLeave={() => setGalleryOpen(false)}
          >
            <span className="nav-dropdown-title">
              Gallery <span className="nav-arrow">▼</span>
            </span>

            <div className={`nav-dropdown-menu ${galleryOpen ? "show" : ""}`}>
              <Link to="/gallery" className="nav-dropdown-item">
                Photo Gallery
              </Link>

              <Link to="/video-gallery" className="nav-dropdown-item">
                Video Gallery
              </Link>
            </div>
          </div>

          <Link to="/careers">Careers</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
