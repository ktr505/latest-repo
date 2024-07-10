import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());

const express = require("express");
const app = express();
const port = 3000;
const character = {
  id: 195,
  name: "Kristen Stewart",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Female",
  origin: {
    name: "Earth (C-500A)",
    url: "https://rickandmortyapi.com/api/location/23",
  },
  location: {
    name: "Earth (C-500A)",
    url: "https://rickandmortyapi.com/api/location/23",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/195.jpeg",
  episodes: [
    {
      id: 8,
      name: "Rixty Minutes",
      air_date: "March 17, 2014",
      episode: "S01E08",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
      ],
      url: "https://rickandmortyapi.com/api/episode/8",
      created: "2017-11-10T12:56:34.747Z",
    },
  ],
  friends: [
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      gender: "Male",
      url: "https://rickandmortyapi.com/api/character/1",
    },
    {
      id: 2,
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      gender: "Male",
      url: "https://rickandmortyapi.com/api/character/2",
    },
  ],
  url: "https://rickandmortyapi.com/api/character/195",
  created: "2017-12-30T12:19:16.042Z",
};

app.get("/character", (req, res) => {
  res.status(200).json(character);
});
app.get("/character/location", (req, res) => {
  res.status(200).json(character.location);
});
app.get("/character/friends/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const friend = character.friends.find((x) => x.id === id);
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({ error: "friend not found" });
  }
});
app.use((req, res) => {
  res.status(404).json({ error: "page not found" });
});
app.listen(port, () => {
  console.log(`Il server è in esecuzione su http://localhost:${port}`);
});
