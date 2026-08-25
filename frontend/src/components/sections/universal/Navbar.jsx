import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../../assets/Logo.png";

// This is the navigation bar at the top of the site.
// It has 3 parts: the logo, the menu links, and the "Contact Us" button.
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive ? "navbar-link is-active" : "navbar-link";

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo on the left, links back to the homepage */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="TOC Construction Logo" />
        </Link>

        {/* Hamburger toggle, shown on smaller screens */}
        <button
          className="navbar-toggle"
          aria-expanded={isOpen}
          aria-controls="navbar-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="navbar-toggle-bar"></span>
          <span className="navbar-toggle-bar"></span>
          <span className="navbar-toggle-bar"></span>
        </button>

        {/* Menu links in the middle */}
        <ul
          className={
            isOpen ? "navbar-menu is-open" : "navbar-menu"
          }
          id="navbar-menu"
        >
          <li>
            <NavLink to="/" className={navLinkClass} onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={navLinkClass} onClick={() => setIsOpen(false)}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkClass} onClick={() => setIsOpen(false)}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={navLinkClass} onClick={() => setIsOpen(false)}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/careers" className={navLinkClass} onClick={() => setIsOpen(false)}>
              Careers
            </NavLink>
          </li>
        </ul>

        {/* Button on the right */}
        <Link to="/contact" className="navbar-button">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
