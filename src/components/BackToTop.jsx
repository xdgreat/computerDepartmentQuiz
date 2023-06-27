import React, { useState } from "react";

function BackToTop({ location }) {
  const [changeVisibility, setChangeVisibility] = useState(false);

  const visibility = () => {
    if (window.scrollY >= 700) {
      setChangeVisibility(true);
    } else {
      setChangeVisibility(false);
    }
  };

  window.addEventListener("scroll", visibility);
  const goUp = ()=>{
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  }
  return (
    <>
      <div
      onClick={goUp}
        className={
          changeVisibility
            ? "back-to-top-container visible"
            : "back-to-top-container"
        }
      >
        <svg
          className="btt-icon"
          width={60}
          height={60}
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41Z" />
        </svg>
      </div>
    </>
  );
}

export default BackToTop;
