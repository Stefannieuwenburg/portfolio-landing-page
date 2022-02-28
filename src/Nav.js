import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";

function Nav() {
    return (
        <div className="container">
            <Navigation />
            <Outlet />
        </div>
    );
}

export default Nav;
