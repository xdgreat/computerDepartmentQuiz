import React, { useState } from "react";
import logo from "../assets/logo.png";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar({ activeClass }) {
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
    <nav
      className={
        colorChange ? "navigation colorChange" : `navigation ${activeClass}`
      }
    >
      <div className="left-nav">
        <a href="/">
          <img src={logo} alt="" className="logo" />
        </a>
      </div>
      <div className="right-nav">
        <a href={"/#job"} className="links">
          Job
        </a>
        <a href={"/#projects"} className="links">
          Projects
        </a>
        <a href="/quiz" className="links">
          Quiz
        </a>
      </div>
    </nav>
  );
}
