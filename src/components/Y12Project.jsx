import React from "react";
import { useState, useEffect, useRef } from "react";

const Y12Project = ({ image, name }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: "0px",
        threshold: 0.8,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isIntersecting && ref.current) {
      ref.current.classList.add("slideUpProjectY12");
    }
  }, [isIntersecting]);
  return (
    <div ref={ref} className="card-container">
      <div className="y12-card-container">
        <img src={image} alt={name} className="y12-card-img" />
      </div>
      <h1 className="y12-card-title">{name}</h1>
    </div>
  );
};

export default Y12Project;
