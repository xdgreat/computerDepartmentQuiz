import React from "react";
import NavBar from "../components/NavBar";
import NavSpace from "../components/NavSpace";
import Footer from "../components/Footer";
import PrincipalImg from "../assets/principal.jpg";
import "../styles/principal.css";

const Principal = () => {
  return (
    <>
      <NavBar />
      <NavSpace />
      <h1 className="content-title">
        <span className="title">A Special Tribute: </span>
        Thank You, Mr Sanjay Raman.
      </h1>
      <div className="principal-container">
        <img src={PrincipalImg} alt="" className="principal-img" />
        <div className="principal-content">
          <p>
            We extend our heartfelt gratitude to our esteemed Principal, Mr
            Raman, whose visionary leadership and unwavering support have been
            instrumental in shaping our journey through the world of computers.
          </p>
          <p>
            Under Mr Raman's guidance, our institution has thrived as a hub for
            technological innovation and learning. His dedication to fostering
            an environment of excellence has empowered us to explore the vast
            realms of computer studies fearlessly.
          </p>
          <p>
            As we launch this website, we take this opportunity to express our
            deepest appreciation for his invaluable contributions and belief in
            the potential of every student.
          </p>
          <p>
            Thank you, Mr Raman, for being the driving force behind our success
            and inspiring us to reach new heights in the digital realm.
          </p>
          <div className="principal-btn-container">
            <a href={"/"} className="principal-btn">
              Enter Home
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Principal;
