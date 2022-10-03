import React from "react"
import logo from "./logo.svg";
function Header() {
    return (
        <header >
            <nav className="nav">
                <img className="logoImg" src={logo}  />
                <ul className="nav-item">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;