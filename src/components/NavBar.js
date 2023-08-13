import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar">
            <NavLink to='/lists' exact>Lists</NavLink>
            <NavLink to='/items' exact>Items</NavLink>
            <NavLink to='/stores' exact>Stores</NavLink>
        </div>
    );
}

export default NavBar;