import React from 'react';
import dbLogo from '../images/db-logo--white.svg';

const Header = () => (
  <header
    id="header-component"
    className="fixed w-100 bg-near-black flex items-center justify-between border-box pv3 ph3 ph5-l"
    data-scroll-header
  >
    <nav className="ttu f6 lh-copy w-100">
      <ul id="nav-list" className="list ma0 pa0 w-100 flex items-center">
        <li className="dib">
          <a className="underline-animate-up" href="#intro">
            <img src={dbLogo} className="dib logo" alt="site home" />
          </a>
        </li>
        <li className="dib mr3 mr4-ns">
          <a className="underline-animate-up near-white pointer" href="#about">
            About
          </a>
        </li>
        <li className="dib mr3 mr4-ns">
          <a className="underline-animate-up near-white pointer" href="#work">
            Work
          </a>
        </li>
        <li className="dib mr3 mr4-ns">
          <a
            className="underline-animate-up near-white pointer"
            href="#contact"
          >
            Contact
          </a>
        </li>
        <li className="dib">
          <a
            className="underline-animate-up near-white"
            href="./Devon_Bellizio_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
