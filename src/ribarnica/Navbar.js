import React from "react";
import navbar from "./navbar.css"

export default function Navbar(){
    return (
        <header >
            <nav className="nav">
                <ul className="nav-item">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}