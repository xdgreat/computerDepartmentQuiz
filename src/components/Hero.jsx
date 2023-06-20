import React from "react";
import NavBar from "./NavBar";
import "../styles/Hero.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
            Welcome to MGMHS Computer <br /> Department: Empowering Digital Skills.
            </h1>
            <p className="hero-subcontent">
              Explore the world of computer studies at MGMHS, where we offer a
              comprehensive curriculum covering networking, IoT, programming,
              web development, and more.
            </p>
            <div className="btns">
                <Link to={"/"} className="cta-btn explore">Explore</Link>
                <Link to={"/"} className="cta-btn learn">Learn More</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
