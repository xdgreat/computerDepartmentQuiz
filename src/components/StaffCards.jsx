import React, { useEffect, useRef, useState } from "react";

export const StaffCards = ({ imageSrc, name, bio }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: "0px",
        threshold: 0.5,
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
      ref.current.classList.add("slide-in");
    }
  }, [isIntersecting]);
  return (
    <div className="staff-cards" ref={ref}>
      <div className="staff-picture">
        <img src={imageSrc} alt="Teacher's Picture" className="staff-image" />
      </div>
      <div className="staff-information">
        <h1 className="staff-name">{name}</h1>
        <p className="staff-biography">{bio}</p>
      </div>
    </div>
  );
};
