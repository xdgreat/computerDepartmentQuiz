import React, { useState } from "react";
import Year11 from "../data/Year11.json";
import Year12 from "../data/Year12.json";
import Year13 from "../data/Year13.json";

export default function QuizGame({ quizlevel, userDbId }) {
  const [quizCounter, setQuizCounter] = useState(0);
  const [showStats, setShowStats] = useState(false);
  const [score, setScore] = useState(0);

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
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = quizCounter + 1;
    if (nextQuestion < quizLevelArr.questions.length) {
      setQuizCounter(nextQuestion);
    } else {
      setShowStats(true);
      updateScore();
    }
  };

  const updateScore = () => {
    const userId = userDbId;
    const newScore = score;

    fetch(`http://localhost:3000/users/${userId}/score`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ score: newScore }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error updating score:", error);
      });
  };

  console.log(userDbId);

  return (
    <>
      <div className="quiz-container">
        {showStats ? (
          <h1 className="quiz-stats">you scored {score}/20</h1>
        ) : (
          <>
            <div className="quiz-question">
              <h1 className="quiz-counter">Question {quizCounter + 1}/20</h1>
              <h2 className="quiz-question">
                {quizLevelArr.questions[quizCounter].question}
              </h2>
            </div>
            <div className="quiz-options">
              {quizLevelArr.questions[quizCounter].options.map((el) => {
                return (
                  <button
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
