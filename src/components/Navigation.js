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
                <li>
                    <Link to="/" onClick={showBar}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/technologies" onClick={showBar}>
                        Technologies
                    </Link>
                </li>
                <li>
                    <Link to="/about" onClick={showBar}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/contact" onClick={showBar}>
                        Contact
                    </Link>
                </li>
                <li>
                    <Link to="/projects" onClick={showBar}>
                        Projects
                    </Link>
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
