import React from "react";
import Logo from "../assets/logo.png";
import "../styles/footer.css";

function Footer() {
  return (
    <footer>
      <div>
        <div>
          <img src={Logo} alt="" className="footer-logo" />
        </div>
        <div>
          <a href="/">Home</a>
          <a href="#opportunities">Opportunities</a>
          <a href="#projects">Projects</a>
          <a href="/quiz">Quiz</a>
        </div>
        <div>
          <a href="">Instagram</a>
          <a href="">Facebook</a>
          <a href="">Github</a>
        </div>
      </div>
      <div>
        ©2023
        <a href="https://www.instagram.com/fr3sh.budusy/" target="_blank">
          {" "}
          Nikhil Naiker
        </a>
        . All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
