import React from "react";
import "./Nav.css";
import Logo from "../../../img/Naruto-icon.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="nav__container">
        <div className="nav__logo">
          <Link
            style={{
              textDecoration: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            to="/"
          >
            <img className="nav__logo-img" src={Logo} alt="Website logo"></img>
            <p className="nav__logo-title">Anime Extra</p>
          </Link>
        </div>

        <div className="nav__list-container">
          <ul className="nav__list">
            <Link style={{ textDecoration: "none" }} to="/anime">
              <li className="nav__list-item">Anime</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/manga">
              <li className="nav__list-item">Manga</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
