import React from "react";
import ReactDOM from "react-dom";
import "./Style/index.css";
import Navbar from "./Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Technologies";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";


ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<Navbar />}>
                <Route index element={<Home />} />
                <Route path="Technologies" element={<Services />} />
                <Route path="About" element={<About />} />
                <Route path="Contact" element={<Contact />} />
                <Route path="Projects" element={<Projects />} />
                <Route path="*" element={<Home />} />
            </Route>
        </Routes>
    </Router>,
    document.getElementById("root")
);