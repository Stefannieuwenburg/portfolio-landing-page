import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo192.png";


export default function Navigation() {
    const [open, setOpen] = useState(false);

    const showBar = () => {
        open(!setOpen);  
    }
    return (
        <nav className="nav">
            <img src={logo} alt="logo" className="logo" /> Portfolio
            <ul className={open ? "nav-links active" : "nav-links"}>
                <li onClick={showBar}>
                    <Link to="/">Home</Link>
                </li>
                <li onClick={showBar}>
                    <Link to="/technologies">Technologies</Link>
                </li>
                <li onClick={showBar}>
                    <Link to="/about">About</Link>
                </li>
                <li onClick={showBar}>
                    <Link to="/contact">Contact</Link>
                </li>
                <li onClick={showBar}>
                    <Link to="/projects">Projects</Link>
                </li>
            </ul>
            <i
                className={open ? "fas fa-bars close" : "fas fa-bars open"}
                onClick={() => setOpen(true)}
            ></i>
            <i
                className={open ? "fas fa-times open" : "fas fa-times close"}
                onClick={() => setOpen(false)}
            ></i>
        </nav>
    );
}
