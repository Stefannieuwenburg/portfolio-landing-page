import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Nav from "./Nav";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Services from "./components/Technologies";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects"

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<Nav />}>
                <Route path="Header" element={<Header />} />
                <Route path="Technologies" element={<Services />} />
                <Route path="About" element={<About />} />
                <Route path="Contact" element={<Contact />} />
                <Route path="Projects" element={<Projects />} />
            </Route>
        </Routes>
    </Router>,
    document.getElementById("root")
);
