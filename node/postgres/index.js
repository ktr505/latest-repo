require('dotenv').config();
import express from 'express';
import { json, urlencoded } from 'body-parser';
const pgp = require('pg-promise')();

const db = pgp(process.env.DATABASE_URL);
const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/planets', async (req, res) => {
  try {
    const planets = await db.any('SELECT * FROM planets');
    res.json(planets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/planets/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const planet = await db.oneOrNone('SELECT * FROM planets WHERE id=$1', id);
    if (planet) {
      res.json(planet);
    } else {
      res.status(404).json({ error: 'Planet not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/planets', async (req, res) => {
  try {
    const { name } = req.body;
    await db.none('INSERT INTO planets (name) VALUES ($1)', name);
    res.status(201).json({ message: 'Planet added' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/planets/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { name } = req.body;
    await db.none('UPDATE planets SET name=$2 WHERE id=$1', [id, name]);
    res.json({ message: 'Planet updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/planets/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    await db.none('DELETE FROM planets WHERE id=$1', id);
    res.json({ message: 'Planet deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
