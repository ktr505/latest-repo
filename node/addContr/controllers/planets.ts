import { Request, Response } from 'express';

let planets = [
  { id: 1, name: 'Mercury' },
  { id: 2, name: 'Venus' },
  { id: 3, name: 'Earth' },
  { id: 4, name: 'Mars' },
];

export const getAll = (req: Request, res: Response) => {
  res.json(planets);
};

export const getOneById = (req: Request, res: Response) => {
  const { id } = req.params;
  const planet = planets.find((p) => p.id === parseInt(id));
  if (planet) {
    res.json(planet);
  } else {
    res.status(404).send('Planet not found');
  }
};

export const create = (req: Request, res: Response) => {
  const newPlanet = req.body;
  newPlanet.id = planets.length ? planets[planets.length - 1].id + 1 : 1;
  planets = [...planets, newPlanet];
  res.status(201).json(newPlanet);
};

export const updateById = (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedPlanet = req.body;
  planets = planets.map((p) => (p.id === parseInt(id) ? { ...p, ...updatedPlanet } : p));
  const planet = planets.find((p) => p.id === parseInt(id));
  if (planet) {
    res.json(planet);
  } else {
    res.status(404).send('Planet not found');
  }
};

export const deleteById = (req: Request, res: Response) => {
  const { id } = req.params;
  const initialLength = planets.length;
  planets = planets.filter((p) => p.id !== parseInt(id));
  if (planets.length < initialLength) {
    res.status(204).send();
  } else {
    res.status(404).send('Planet not found');
  }
};
