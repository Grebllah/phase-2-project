

import { NavLink } from "react-router-dom";
import "./NavBar.css";

/* define the NavBar component */
function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
        className="nav-link"
      >
        Welcome
      </NavLink>
      <NavLink
        to="/CustomCardCreator"
        className="nav-link"
      >
        Planeswalker Lore
      </NavLink>
      <NavLink
        to="/LorePage"
        className="nav-link"
      >
        Login
      </NavLink>
    </nav>
  );
};

export default NavBar;

