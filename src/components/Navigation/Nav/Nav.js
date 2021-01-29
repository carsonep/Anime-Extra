import React from "react";
import "./Nav.css";
import Logo from "../../../img/Naruto-icon.png";
import { IoIosBookmark, IoIosContact } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="nav__container">
        <div className="nav__logo">
          <img className="nav__logo-img" src={Logo} alt="Website logo"></img>
          <p className="nav__logo-title">Anime Extra</p>
        </div>

        <div className="nav__list-container">
          <ul className="nav__list">
            <NavLink style={{ textDecoration: "none" }} to="/anime">
              <li className="nav__list-item">Anime</li>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/manga">
              <li className="nav__list-item">Manga</li>
            </NavLink>
          </ul>
        </div>

        <ul className="nav__list-icons">
          <NavLink to="/bookmarks">
            <li className="nav__list-icons-icon">
              <IoIosBookmark />
            </li>
          </NavLink>
          <li className="nav__list-icons-icon">
            <IoIosContact />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
