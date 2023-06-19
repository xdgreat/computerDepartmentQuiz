import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import { Quiz } from "./pages/quiz.jsx";
import { Admin } from "./pages/admin.jsx";
import "./reset.css";
import "./app.css";
import { NotFound } from "./NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
