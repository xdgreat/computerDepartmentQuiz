import React, { useState } from "react";
import Year11 from "../data/Year11.json";
import Year12 from "../data/Year12.json";
import Year13 from "../data/Year13.json";
import "../styles/QuizGame.css";
import { Link } from "react-router-dom";
import quiz from "../data/questions.json";

export default function QuizGame({ quizlevel, userDbId, Name }) {
  const [quizCounter, setQuizCounter] = useState(0);
  const [questionsShowed, setQuestionsShowed] = useState([-1]);
  const [showStats, setShowStats] = useState(false);
  const [score, setScore] = useState(0);
  const [randomIndex, getRandomIndex] = useState(0);
  const [totalQuestionsAnswered, setTotalQuestionsAnswered] = useState(0);
  const hostUrl = window.location.hostname;
  const level = quizlevel;

  let quizLevelArr = quiz;

  // if (level === "Year 13") {
  //   quizLevelArr = Year13;
  // } else if (level === "Year 12") {
  //   quizLevelArr = Year12;
  // } else if (level === "Year 11") {
  //   quizLevelArr = Year11;
  // } else {
  //   return <div>Refresh Page</div>;
  // }
  function getRandomQuestion() {
    let randomIndex = Math.floor(Math.random() * quizLevelArr.questions.length);
    if (questionsShowed.includes(randomIndex)) {
      return getRandomQuestion();
    } else {
      setQuestionsShowed([...questionsShowed, randomIndex]);
      return getRandomIndex(randomIndex);
    }
  }
  console.log(totalQuestionsAnswered);
  const handleAnswerButtonClick = (isCorrect) => {
    let updatedScore = score;
    if (isCorrect === true) {
      updatedScore++;
    }

    if (totalQuestionsAnswered <= 18) {
      getRandomQuestion();
      const nextQuestion = quizLevelArr.questions[randomIndex];
      setQuizCounter(nextQuestion);
    } else {
      setShowStats(true);
      updateScore(updatedScore);
    }

    setTotalQuestionsAnswered(totalQuestionsAnswered + 1);
    setScore(updatedScore);
  };
  const updateScore = (scoreCount) => {
    const userId = userDbId;
    const newStatus = "Completed";
    fetch(`http://${hostUrl}:3000/users/${userId}/score`, {
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
              <h1 className="quiz-counter">
                Question {totalQuestionsAnswered + 1}/20
              </h1>
              <h2 className="quiz-question-title">
                <p className="user-info">
                  <span className="info-span">Name: </span>
                  {Name}
                  <br />
                  <span className="info-span">Form: </span>
                  {level}
                </p>
                {quizLevelArr.questions[randomIndex].question}
              </h2>
            </div>
            <div className="quiz-option-container">
              {quizLevelArr.questions[randomIndex].options.map((el, id) => {
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
