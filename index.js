import express from 'express';
import sqlite3 from 'sqlite3';
import cors from 'cors';

const app = express();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)');
});

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src 'self' 'unsafe-inline'");
  next();
});

app.get('/users', (req, res) => {
  db.all('SELECT * FROM users', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal server error');
    } else {
      res.json(rows);
    }
  });
});

app.post('/users', (req, res) => {
  const { name } = req.body;

  db.run('INSERT INTO users (name) VALUES (?)', name, function (err) {
    if (err) {
      console.error(err);
      res.status(500).send('Internal server error');
    } else {
      const userId = this.lastID;
      res.json({ id: userId, name });
    }
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
