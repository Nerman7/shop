import React from "react";
import "./nav.css"
import logo from './logo.jpg'

function Nav() {
    return(
        <nav>
            <div className="globe">
                <img src={logo} alt="wait" width={50}></img>
            </div>
            <h3>my travel journal.</h3>
        </nav>
    )
}

export default Nav;
