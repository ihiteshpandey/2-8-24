import React from 'react';
import './navbar.css';  

function Navbar() {
  return (
    <nav className="vertical-navbar">
      <ul className="vertical-navbar-list">
     
        <li className="vertical-navbar-item text-lg text-center">Stayfree</li>
        <li className="vertical-navbar-item"><a href="Daily Usage Limits">Dashboard</a></li>
        <li className="vertical-navbar-item"><a href="Daily Usage Limits">Daily Usage Limits</a></li>
        <li className="vertical-navbar-item"><a href="#Limits on the Go">Focus Mode</a></li>
        <li className="vertical-navbar-item"><a href="#Limits on the Go">Limits on the Go</a></li>
        <li className="vertical-navbar-item"><a href="#In-App blocking">In-App blocking</a></li>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <li className="vertical-navbar-item"><a href="#Settings">Settings</a></li>
        <li className="vertical-navbar-item"><a href="#Get Help">Get Help</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;