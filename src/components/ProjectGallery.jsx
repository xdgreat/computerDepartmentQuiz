import React from "react";
import Y13Project from "./Y13Project";
import Y12Project from "./Y12Project";
import EnvoyFiji from "../assets/EnvoyFiji.png";
import RedDevilsFragrances from "../assets/RedDevilsFragrances.png";
import NSKA from "../assets/NSKA.png";
import SuperElectricity from "../assets/SuperElectricity.jpg";
import JulumTech from "../assets/JulumTech.png";
import DavShee from "../assets/DavShee.png";
import "../styles/ProjectGallery.css";
import interface1 from "../assets/interface1.png";
import interface2 from "../assets/interface2.png";
import interface3 from "../assets/interface3.png";

const ProjectGallery = () => {
  return (
    <div className="container" id="projects">
      <h1 className="project-gallery-title">
        <span className="title">Project Showcase</span>: Unleashing Student
        Innovations
      </h1>
      <section className="project-gallery-section">
        <div className="project-gallery-subtitle">
          Year 13 - E-Commerce Website
        </div>
        <div className="y13-container">
          <Y13Project
            name={"Envoy Fiji"}
            image={EnvoyFiji}
            link={"https://envoyfijireactproject.vercel.app/"}
          />
          <Y13Project
            name={"Red Devils Fragrances"}
            image={RedDevilsFragrances}
            link={"https://red-devils-fragrances.vercel.app/"}
          />
          <Y13Project
            name={"NSKA"}
            image={NSKA}
            link={"https://nska.vercel.app/"}
          />
          <Y13Project
            name={"Julum Tech"}
            image={JulumTech}
            link={"https://julum-tech.vercel.app"}
          />
          <Y13Project
            name={"DavShee"}
            image={DavShee}
            link={"dav-shee.vercel.app"}
          />
        </div>
        <div className="project-gallery-subtitle">
          Year 12 - Electricity Bill Calculator
        </div>
        <div className="y12-container">
          <Y12Project name={"Super Electricity"} image={SuperElectricity} />
          <Y12Project name={"Super Electricity"} image={interface1} />
          <Y12Project name={"Super Electricity"} image={interface2} />
          <Y12Project name={"Super Electricity"} image={interface3} />
          <Y12Project name={"Super Electricity"} image={SuperElectricity} />
          <Y12Project name={"Super Electricity"} image={SuperElectricity} />
        </div>
      </section>
    </div>
  );
};

export default ProjectGallery;
