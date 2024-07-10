import express from "express";
import dbPromise from "./database.mjs";
import cors from "cors";

const app = express();
const PORT = 3005;

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Character API");
});

app.get("/character", async (req, res) => {
  const db = await dbPromise;
  const character = await db.get(`SELECT * FROM character WHERE id = 195`);
  res.status(200).json(character);
});

app.get("/character/origin", async (req, res) => {
  const db = await dbPromise;
  const origin = await db.get(
    `SELECT origin_name AS name, origin_url AS url FROM character WHERE id = 195`
  );
  res.status(200).json(origin);
});

app.get("/character/location", async (req, res) => {
  const db = await dbPromise;
  const location = await db.get(
    `SELECT location_name AS name, location_url AS url FROM character WHERE id = 195`
  );
  res.status(200).json(location);
});

app.get("/character/episodes", async (req, res) => {
  const db = await dbPromise;
  const episodes = await db.all(
    `SELECT * FROM episode WHERE character_id = 195`
  );
  res.status(200).json(episodes);
});

app.get("/character/friends", async (req, res) => {
  const db = await dbPromise;
  const friends = await db.all(`SELECT * FROM friend WHERE character_id = 195`);
  res.status(200).json(friends);
});

app.get("/character/friends/:id", async (req, res) => {
  const db = await dbPromise;
  const friendId = parseInt(req.params.id, 10);
  const friend = await db.get(
    `SELECT * FROM friend WHERE character_id = 195 AND friend_id = ?`,
    friendId
  );
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({ error: "Friend not found" });
  }
});

app.post("/character/friends", async (req, res) => {
  const db = await dbPromise;
  const { friend_name, status, species, gender } = req.body;
  await db.run(
    `
    INSERT INTO friend (character_id, friend_name, status, species, gender)
    VALUES (195, ?, ?, ?, ?)
  `,
    [friend_name, status, species, gender]
  );
  res.status(201).send("AMICO AGGIUNTO CON SUCCESSO");
});

app.delete("/character/friends/:id", async (req, res) => {
  const db = await dbPromise;
  const index = req.params.id;
  await db.run(`DELETE FROM friend WHERE id = ?`, [index]);
  res.status(200).send("AMICO RIMOSSO CON SUCCESSO");
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server in esecuzione su http://localhost:${PORT}/`);
});
