import React from "react";
import { Link } from "react-router-dom";
import "../styles/quizlink.css";
function Quizlink() {
  return (
    <section className="quiz-link-section">
      <div className="quiz-link-content">
        <h1 className="quiz-title">
          Take Our Interactive Quiz and Test Your Knowledge!
        </h1>
        <p className="quiz-content">
          Looking for a fun and engaging way to challenge your knowledge? Look
          no further! Click on our quiz link below to embark on an exciting
          journey of discovery.
        </p>
        <div className="quiz-btns">
          <Link to={"/quiz"} className="quiz-cta">
            Start Now
          </Link>
          <Link to={"/about"} className="quiz-cta">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Quizlink;
