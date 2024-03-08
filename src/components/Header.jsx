import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Gregory M. Greve</h1>
      <nav>
        <ul className="nav-links">
          <li><NavLink to="/" activeClassName="active">About Me</NavLink></li>
          <li><NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
          <li><NavLink to="/resume" activeClassName="active">Resume</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
