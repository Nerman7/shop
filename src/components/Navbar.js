import React from "react";
import "./navbar.css";
import logo from "./logo.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <img id="logoImg" src={logo} alt="pic" width={60} height-={50}></img>
      <h1>ReactFacts</h1>
      <h2 id="navbarRight">React Course - Project 1</h2>
    </nav>
  );
}

export default Navbar;
