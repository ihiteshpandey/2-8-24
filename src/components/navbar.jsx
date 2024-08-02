{/*import React from 'react';
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

export default Navbar; */}




import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartBar, faCog, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white w-64 h-screen p-4">
      <ul className="space-y-2">
        <li className="p-2 hover:bg-gray-700 rounded flex items-center">
          <FontAwesomeIcon icon={faHome} className="mr-2" />
          <a href="#home">Dashboard</a>
        </li>
        <li className="p-2 hover:bg-gray-700 rounded flex items-center">
          <FontAwesomeIcon icon={faChartBar} className="mr-2" />
          <a href="#usage">Daily Usage Limits</a>
        </li>
        <li className="p-2 hover:bg-gray-700 rounded flex items-center">
          <FontAwesomeIcon icon={faChartBar} className="mr-2" />
          <a href="#usage">Focus Mode</a>
        </li>
        <li className="p-2 hover:bg-gray-700 rounded flex items-center">
          <FontAwesomeIcon icon={faChartBar} className="mr-2" />
          <a href="#usage">Limits on the Go</a>
        </li>
        <li className="p-2 hover:bg-gray-700 rounded flex items-center">
          <FontAwesomeIcon icon={faChartBar} className="mr-2" />
          <a href="#usage">In-App blockingq</a>
        </li>
        <li className="p-2 hover:bg-gray-700 rounded flex items-center">
          <FontAwesomeIcon icon={faCog} className="mr-2" />
          <a href="#settings">Settings</a>
        </li>
        <li className="p-2 hover:bg-gray-700 rounded flex items-center">
          <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
          <a href="#help">Help</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
