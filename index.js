import express from "express";
import sqlite3 from "sqlite3";
import cors from "cors";

const app = express();
const db = new sqlite3.Database(":memory:");

db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, firstName TEXT, lastName TEXT, class TEXT, status TEXT, score INTEGER)"
  );
});

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self' 'unsafe-inline'"
  );
  next();
});

app.get("/users", (req, res) => {
  db.all("SELECT * FROM users", (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal server error");
    } else {
      res.json(rows);
    }
  });
});

app.post("/users", (req, res) => {
  const { firstName, lastName, class: userClass, status, score } = req.body;

  db.run(
    "INSERT INTO users (firstName, lastName, class, status, score) VALUES (?, ?, ?, ?, ?)",
    [firstName, lastName, userClass, status, score],
    function (err) {
      if (err) {
        console.error(err);
        res.status(500).send("Internal server error");
      } else {
        const userId = this.lastID;
        res.json({
          id: userId,
          firstName,
          lastName,
          class: userClass,
          status,
          score,
        });
      }
    }
  );
});

app.put("/users/:id/score", (req, res) => {
  const { id } = req.params;
  const { score } = req.body;

  db.run(
    "UPDATE users SET score = ? WHERE id = ?",
    [score, id],
    function (err) {
      if (err) {
        console.error(err);
        res.status(500).send("Internal server error");
      } else {
        res.json({ id: Number(id), score: Number(score) });
      }
    }
  );
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
