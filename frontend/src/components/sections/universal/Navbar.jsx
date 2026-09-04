import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../../assets/Logo.svg";
import contactUsArrow from "../../../assets/homepage/contact_us_arrow.svg";

// This is the navigation bar at the top of the site.
// It has 3 parts: the logo, the menu links, and the "Contact Us" button.
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    [
      "font-display font-medium text-small text-black relative inline-block",
      "w-full py-4 px-12 border-b border-black/[0.06]",
      "lg:w-auto lg:py-0 lg:px-0 lg:pb-2 lg:border-b-0",
      "hover:text-[#1e56a0]",
      isActive
        ? "lg:after:content-[''] lg:after:absolute lg:after:left-0 lg:after:bottom-0 lg:after:w-[39px] lg:after:h-0.5 lg:after:bg-[#07112b]"
        : "",
    ].join(" ");

  return (
    <nav className="sticky top-0 z-100 h-18 md:h-20.25 bg-white flex items-center">
      <div className="max-w-360 mx-auto w-full flex items-center justify-between gap-6 px-6 md:px-12 lg:px-22">
        {/* Logo on the left, links back to the homepage */}
        <Link to="/" className="block">
          <img src={logo} alt="TOC Construction Logo" className="h-9 md:h-11 block" />
        </Link>

        {/* Hamburger toggle, shown on smaller screens */}
        <button
          className="flex lg:hidden flex-col gap-1.25 w-8 h-6 justify-center items-center bg-none border-0 cursor-pointer"
          aria-expanded={isOpen}
          aria-controls="navbar-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span
            className={`w-full h-0.5 bg-black transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-y-1.75 rotate-45" : ""
            }`}
          ></span>
          <span
            className={`w-full h-0.5 bg-black transition-opacity duration-300 ease-in-out ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-full h-0.5 bg-black transition-transform duration-300 ease-in-out ${
              isOpen ? "-translate-y-1.75 -rotate-45" : ""
            }`}
          ></span>
        </button>

        {/* Menu links in the middle */}
        <ul
          id="navbar-menu"
          className={`list-none absolute left-0 right-0 top-18 md:top-20.25 bg-white flex flex-col items-start gap-0 overflow-hidden shadow-[0_8px_16px_rgba(0,0,0,0.08)] transition-[max-height] duration-350 ease-in-out ${
            isOpen ? "max-h-100" : "max-h-0"
          } lg:static lg:flex-row lg:items-center lg:gap-10 lg:max-h-none lg:overflow-visible lg:shadow-none`}
        >
          <li className="w-full lg:w-auto">
            <NavLink to="/" className={navLinkClass} onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
          </li>
          <li className="w-full lg:w-auto">
            <NavLink to="/services" className={navLinkClass} onClick={() => setIsOpen(false)}>
              Services
            </NavLink>
          </li>
          <li className="w-full lg:w-auto">
            <NavLink to="/about" className={navLinkClass} onClick={() => setIsOpen(false)}>
              About Us
            </NavLink>
          </li>
          <li className="w-full lg:w-auto">
            <NavLink to="/projects" className={navLinkClass} onClick={() => setIsOpen(false)}>
              Projects
            </NavLink>
          </li>
          <li className="w-full lg:w-auto">
            <NavLink to="/careers" className={navLinkClass} onClick={() => setIsOpen(false)}>
              Careers
            </NavLink>
          </li>
        </ul>

        {/* Button on the right */}
        <Link
          to="/get-quote"
          className="font-display shrink-0 flex items-center justify-end gap-2 bg-[#163172] text-white py-[clamp(0.24rem,1vw,0.3rem)] px-[clamp(0.6rem,2vw,.7rem)] rounded-full text-lead font-extralight whitespace-normal hover:bg-[#1e56a0]"
        >
          <span className="ml-2">Contact Us</span>

          <span className="ml-1 flex items-center justify-center w-10 h-10 bg-white rounded-full">
            <img
              src={contactUsArrow}
              alt=""
              className="w-10 h-6 object-contain"
            />
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;