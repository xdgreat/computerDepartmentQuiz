import React, { useState } from "react";
import logo from "../assets/logo.png";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar({activeClass}) {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 700) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <nav className={colorChange ? "navigation colorChange" : `navigation ${activeClass}`}>
      <div className="left-nav">
        <Link to={"/"}>
          <img src={logo} alt="" className="logo" />
        </Link>
      </div>
      <div className="right-nav">
        <Link to={"/"} className="links">
          Home
        </Link>
        <Link to={NavBar} className="links">
          History
        </Link>
        <Link to={NavBar} className="links">
          Projects
        </Link>
        <Link to={"/quiz"} className="links">
          Quiz
        </Link>
      </div>
    </nav>
  );
}
