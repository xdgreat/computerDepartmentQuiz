import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Quiz = () => {
  const [data, setData] = useState([]);
  const [newUser, setNewUser] = useState("");

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

  const handleInputChange = (event) => {
    setNewUser(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newUser.trim() !== "") {
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: newUser }),
      })
        .then((res) => res.json())
        .then((data) => {
          setNewUser("");
          fetchData();
        })
        .catch((error) => {
          console.error("Error submitting data:", error);
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newUser}
          onChange={handleInputChange}
          placeholder="Enter name"
        />
        <button type="submit">Add User</button>
      </form>
      <Link to="/admin">Go to Admin Page</Link>
    </>
  );
};
