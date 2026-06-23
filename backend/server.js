const express = require('express');
const cors = require('cors');
require('dotenv').config();
const pool = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// Get 5 random questions
app.get('/questions', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM questions ORDER BY RANDOM() LIMIT 10'
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Save a score
app.post('/scores', async (req, res) => {
  const { player_name, score } = req.body;
  try {
    await pool.query(
      'INSERT INTO scores (player_name, score) VALUES ($1, $2)',
      [player_name, score]
    );
    res.json({ message: 'Score saved!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get top 10 leaderboard
app.get('/leaderboard', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM scores ORDER BY score DESC LIMIT 10'
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));