const express = require('express');
const router = express.Router();
const { Pool } = require('pg');

// Configure the connection to the PostgreSQL database
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM usuarios');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/', async (req, res) => {
  const { name, email, phone } = req.body;
  try {
    const result = await pool.query('INSERT INTO usuarios (name, email, phone) VALUES ($1, $2, $3) RETURNING *', [name, email, phone]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
