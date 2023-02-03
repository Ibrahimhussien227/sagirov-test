import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import Logo from "../assets/SpaceX-Logo-PNG копия.png";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prevClick) => !prevClick);
  };

  return (
    <div className="navbar-container">
      <Link to="/">
        <div className="navbar-logo-image">
          <img src={Logo} alt="logo" />
          <i />
        </div>
      </Link>

      <ul
        className={
          clicked ? "navbar-container-links active" : "navbar-container-links"
        }
      >
        {[
          "Главная",
          "Технология",
          "График полетов",
          "Гарантии",
          "О компаии",
          "Контакты",
        ].map((name, id) => (
          <Link key={id} to="/">
            <p>{name}</p>
          </Link>
        ))}
      </ul>
      <div className="navbar-mobile" onClick={handleClick}>
        <i className="navbar-close-icon">
          {clicked ? <FaTimes /> : <FaBars />}
        </i>
      </div>
    </div>
  );
};

export default Navbar;
