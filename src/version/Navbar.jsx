import React from 'react';

const Navbar = () => {
  return (
    <nav id="nav-menu">
      <ul>
        <li><a className="nav-link home" href="#home">Home</a></li>
        <li><a className="nav-link about" href="#about">About</a></li>
        <li><a className="nav-link skills" href="#skills">Skills</a></li>
        <li><a className="nav-link projects" href="#projects">Projects</a></li>
        <li><a className="nav-link contact" href="#contact">Contact</a></li>
        <li><a className="nav-link resume" id="resume-link-1" href="link_to_your_resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
