import React, { useState } from "react";
import Form from "../components/form";
import NavBar from "../components/NavBar";
import NavSpace from "../components/NavSpace";
import BackToTop from "../components/BackToTop";
import QuizGame from "../components/QuizGame";

export const Quiz = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formName, getFormName] = useState("");
  const [userId, getUserId] = useState("");

  const handleIsSubmitted = () => {
    setIsSubmitted(true);
  };
  const handleChildValue = (value) => {
    getFormName(value);
  };
  const handleUserId = (value) => {
    getUserId(value);
  };

  console.log(formName);

  return (
    <>
      <NavSpace />
      <NavBar />
      <BackToTop />
      {isSubmitted ? (
        <QuizGame quizlevel={formName} userDbId={userId} />
      ) : (
        <Form
          submit={handleIsSubmitted}
          formName={handleChildValue}
          userDbId={handleUserId}
        />
      )}
    </>
  );
};
