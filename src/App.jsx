import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();

    const interval = setInterval(fetchData, 2000);

    return () => {
      clearInterval(interval);
    };
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

  return (
    <div>
      <h1>Users:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <a href="/quiz">aas</a>
    </div>
    
  );
}

export default App;
