import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>React Movies</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favoris"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Coups de coeur
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
