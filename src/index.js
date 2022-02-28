import React from "react";
import ReactDOM from "react-dom";
import "./Style/index.css";
import Navbar from "./Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Services from "./components/Technologies";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<Navbar />}>
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
