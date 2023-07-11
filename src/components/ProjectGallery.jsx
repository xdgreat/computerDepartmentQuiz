import React from "react";
import Year12Cards from "./Year12Cards";
import bmiplaceholder from "../assets/bmiplaceholder.jpg";
import "../styles/projectgallery.css";

function ProjectGallery() {
  return (
    <section className="project-gallery">
      <h1 className="y12-title">Year 12 Projects 2023</h1>
      <div className="year-12-gallery">
        <Year12Cards name={"Testing Name"} image={bmiplaceholder} />
        <Year12Cards name={"Testing Name"} image={bmiplaceholder} />
        <Year12Cards name={"Testing Name"} image={bmiplaceholder} />
      </div>
      <div className="year-13-gallery"></div>
    </section>
  );
}

export default ProjectGallery;
