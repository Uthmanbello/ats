import React from 'react';
import '../styles/Navbar.css';
import hamburgerIcon from '../images/hamburger-icon.svg';
import homeIcon from '../images/home-icon.svg';
import tasksIcon from '../images/tasks-icon.svg';
import nt from '../images/nt.svg';

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li><img src={hamburgerIcon} alt="hamburger icon" className="hamburger" /></li>
        <li><img src={homeIcon} alt="home icon" /></li>
        <li><img src={tasksIcon} alt="tasks icon" /></li>
        <li><img src={nt} alt="nt initials" /></li>
      </ul>
    </div>
  );
}

export default Navbar;