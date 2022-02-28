import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
    return (
        <header>
            <h2>Hi,</h2>
            <h2>I'm Stefan!</h2>
            <h4>Welcome to my portfolio page</h4>
            <p>
                I can provide clean code and perfect design. I can also make the
                website more interactive.
            </p>
            <Link to="/about">
                <button>About me</button>
            </Link>
        </header>
    );
}
