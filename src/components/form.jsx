import React, { useEffect, useState } from "react";
import "../styles/Form.css";

function Form() {
  const [data, setData] = useState([]);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");

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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newFirstName.trim() !== "" && newLastName.trim() !== "") {
      const userData = {
        firstName: newFirstName,
        lastName: newLastName,
        status: "in progress",
        score: 0
      };
  
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
          fetchData();
        })
        .catch((error) => {
          console.error("Error submitting data:", error);
        });
    }
  };

  return (
    <>
      <div className="form-container">
        <div className="form-content-left">
          <h1 className="form-title">Quiz Registration</h1>
          <p className="form-content">
            Please fill out the form to register for the Computer Department Quiz.
          </p>
          <p className="form-tos">
            By participating in the quiz, you agree to abide by the rules and regulations set forth by the Computer Department at MGMHS.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="quiz-form">
          <label htmlFor="firstName">First Name</label>
          <input
            className="Name"
            name="firstname"
            type="text"
            value={newFirstName}
            onChange={handleFirstNameChange}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            className="LastName"
            name="lastName"
            type="text"
            value={newLastName}
            onChange={handleLastNameChange}
            placeholder="Enter last name"
          />
          <select name="form" id="">
            <option value="">Year 11</option>
            <option value="">Year 12</option>
            <option value="">Year 13</option>
          </select>
          <button type="submit">Let's Go</button>
        </form>
      </div>
    </>
  );
}

export default Form;
