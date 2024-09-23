// Header.js
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <h1 className="navbar-brand">Gregory M. Greve</h1>
        {/* Hamburger icon for mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        {/* Nav links */}
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <NavLink
              to="/"
              activeClassName="active"
              onClick={toggleMenu}
              className="navLink"
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Portfolio"
              activeClassName="active"
              onClick={toggleMenu}
              className="navLink"
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Github"
              activeClassName="active"
              onClick={toggleMenu}
              className="navLink"
            >
              Github
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              activeClassName="active"
              onClick={toggleMenu}
              className="navLink"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Resume"
              activeClassName="active"
              onClick={toggleMenu}
              className="navLink"
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
