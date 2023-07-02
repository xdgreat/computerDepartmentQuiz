import React, { useEffect, useState } from "react";
import "../styles/Form.css";

function Form({ submit, formName, userDbId, Name }) {
  const [data, setData] = useState([]);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newClass, setNewClass] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleFirstNameChange = (event) => {
    setNewFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setNewLastName(event.target.value);
  };

  const handleClassChange = (event) => {
    setNewClass(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newFirstName.trim() || !newLastName.trim() || !newClass.trim()) {
      return;
    }

    const userData = {
      firstName: newFirstName,
      lastName: newLastName,
      userClass: newClass,
      status: "In-Progress",
      score: 0,
    };
    console.log(newClass);
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        setNewFirstName("");
        setNewLastName("");
        setNewClass("");
        fetchData();
        submit();
        userDbId(data.id);
        formName(newClass);
        Name(data.firstName);
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
  };

  return (
    <>
      <div className="form-container">
        <div className="form-content-left">
          <h1 className="form-title">Quiz Registration</h1>
          <p className="form-content">
            Please fill out the form to register for the Computer Department
            Quiz.
          </p>
          <p className="form-tos">
            By participating in the quiz, you agree to abide by the rules and
            regulations set forth by the Computer Department at MGMHS.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="quiz-form" id="quiz-form">
          <label htmlFor="firstName" className="quiz-label">
            First Name
          </label>
          <input
            className="FirstName"
            name="FirstName"
            type="text"
            value={newFirstName}
            onChange={handleFirstNameChange}
          />
          <label htmlFor="lastName" className="quiz-label">
            Last Name
          </label>
          <input
            className="LastName"
            name="lastName"
            type="text"
            value={newLastName}
            onChange={handleLastNameChange}
          />
          <label htmlFor="class" className="quiz-label">
            Form
          </label>
          <select
            name="newClass"
            value={newClass}
            onChange={handleClassChange}
            className="select-form"
          >
            <option
              value=""
              disabled
              className="select-options select-disabled"
            >
              Select a Form
            </option>
            <option value="Year 11" className="select-options">
              Year 11
            </option>
            <option value="Year 12" className="select-options">
              Year 12
            </option>
            <option value="Year 13" className="select-options">
              Year 13
            </option>
          </select>

          <button type="submit" className="quiz-submit">
            Let's Go
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
