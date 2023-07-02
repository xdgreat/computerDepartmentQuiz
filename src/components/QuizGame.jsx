import React, { useState } from "react";
import Year11 from "../data/Year11.json";
import Year12 from "../data/Year12.json";
import Year13 from "../data/Year13.json";
import "../styles/QuizGame.css";
import { Link } from "react-router-dom";

export default function QuizGame({ quizlevel, userDbId, Name }) {
  const [quizCounter, setQuizCounter] = useState(0);
  const [showStats, setShowStats] = useState(false);
  const [score, setScore] = useState(0);

  console.log(Name);
  const level = quizlevel;

  let quizLevelArr;

  if (level === "Year 13") {
    quizLevelArr = Year13;
  } else if (level === "Year 12") {
    quizLevelArr = Year12;
  } else if (level === "Year 11") {
    quizLevelArr = Year11;
  } else {
    return <div>Refresh Page</div>;
  }

  const handleAnswerButtonClick = (isCorrect) => {
    let updatedScore = score;

    if (isCorrect === true) {
      updatedScore++;
    }

    const nextQuestion = quizCounter + 1;
    if (nextQuestion < quizLevelArr.questions.length) {
      setQuizCounter(nextQuestion);
    } else {
      setShowStats(true);
      updateScore(updatedScore);
    }

    setScore(updatedScore);
  };
  const updateScore = (scoreCount) => {
    const userId = userDbId;
    const newStatus = "Completed";
    fetch(`http://localhost:3000/users/${userId}/score`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ score: scoreCount, status: newStatus }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error updating score:", error);
      });
  };
  return (
    <>
      <div className="quiz-container">
        {showStats ? (
          <div className="score-container">
            <h1 className="quiz-stats">
              Quiz Completed - Well done! Your score is{" "}
              <span className="final-score">{score}/20</span>. Don't forget to
              inform your teacher and claim your prize!
            </h1>
            <Link
              onClick={() => window.location.reload()}
              className="retry-btn"
            >
              Retry
            </Link>
            <Link to={"/"} className="exit-btn">
              Exit
            </Link>
          </div>
        ) : (
          <>
            <div className="quiz-question">
              <h1 className="quiz-counter">Question {quizCounter + 1}/20</h1>
              <h2 className="quiz-question-title">
                <p className="user-info">
                  <span className="info-span">Name: </span>
                  {Name}
                  <br />
                  <span className="info-span">Form: </span>
                  {level}
                </p>
                {quizLevelArr.questions[quizCounter].question}
              </h2>
            </div>
            <div className="quiz-option-container">
              {quizLevelArr.questions[quizCounter].options.map((el, id) => {
                return (
                  <button
                    key={id}
                    className="quiz-options"
                    onClick={() => {
                      handleAnswerButtonClick(el.isCorrect);
                    }}
                  >
                    {el.answer}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}
