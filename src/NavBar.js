

import { NavLink } from "react-router-dom";
import "./NavBar.css";

/* define the NavBar component */
function NavBar() {
  return (
    <div className="App">
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
          Custom Legend Creator
        </NavLink>
        <NavLink
          to="/LorePage"
          className="nav-link"
        >
          Planeswalker Lore
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;

