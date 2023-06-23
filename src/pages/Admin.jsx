import React, { useEffect, useState } from "react";

function Admin() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchData();

    const interval = setInterval(fetchData, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const results = users.filter((user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, users]);

  const fetchData = () => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <h1 className="admin-title">Admin Page</h1>
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="list-container">
        {searchResults.map((user) => (
          <div className="listed-div animate" key={user.id}>
            <label htmlFor="lists">
              Name:
              <li className="lists">{user.firstName} {user.lastName}</li>
            </label>
            <label htmlFor="form">
              Form:
              <li className="form">1301</li>
            </label>
            <label htmlFor="status">
              Status:
              <li className="status">{user.status}</li>
            </label>
            <label htmlFor="score">
              Score:
              <li className="score">{user.score}/20</li>
            </label>
          </div>
        ))}
      </div>
    </>
  );
}

export default Admin;
