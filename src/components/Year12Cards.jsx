import React from "react";
import "../styles/year12.css";

const Year12Cards = ({ image, name }) => {
  return (
    <div className="y12-card">
      <div className="y12-img-container">
        <img src={image} alt="" className="y12-img" />
      </div>
      <h1 className="y12-title">{name}</h1>
    </div>
  );
};

export default Year12Cards;
