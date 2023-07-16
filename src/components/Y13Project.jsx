import React from "react";
import { useState, useEffect, useRef } from "react";

const Y13Project = ({ name, image, link }) => {
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
      ref.current.classList.add("slideUpProject");
    }
  }, [isIntersecting]);
  return (
    <div>
      <div className="y13-card-container" ref={ref}>
        <a href={link} target="_blank">
          <img src={image} alt={name} className="y13-card-img" />
        </a>
      </div>
      <a href={link} target="_blank">
        <h1 className="y13-card-title">{name}</h1>
      </a>
    </div>
  );
};

export default Y13Project;
