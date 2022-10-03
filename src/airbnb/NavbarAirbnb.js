import React from "react";
import logo from './airbnb-logo.png';
import './NavbarAirbnb.css'

function NavbarAirbnb() {
  return (
    <nav>
      <img src={logo} alt='sda' className="nav--logo"></img>
    </nav>
  );
}

export default NavbarAirbnb;
