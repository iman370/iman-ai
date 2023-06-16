import * as React from 'react';
//import AppBar from '@mui/material/AppBar';
//import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-scroll';

function NavBar() {
  return (
    <div id="navbar">
      <Link activeClass="active" className="links" to="landing-container" spy smooth duration={1500}>
        <p>.about()</p>
      </Link>
      <Link activeClass="active" className="links" to="skills-container" spy smooth duration={1500}>
        <p>.skills()</p>
      </Link>
      <Link activeClass="active" className="links" to="projects-container" spy smooth duration={1500}>
        <p>.projects()</p>
      </Link>
      <Link activeClass="active" className="links" to="contacts-container" spy smooth duration={1500}>
        <p>.links()</p>
      </Link>
    </div>
  );
}

export default NavBar;