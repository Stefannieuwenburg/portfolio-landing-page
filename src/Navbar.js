import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";

function Navbar() {
    return (
        <div className="container">
            <Navigation />
            <Outlet />
        </div>
    );
}

export default Navbar;
