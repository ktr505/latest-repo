import express, { json } from 'express';
import { config } from 'dotenv';
import morgan from 'morgan';
import 'express-async-errors'; 

config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());

app.use(morgan('dev'));

import planets from './planets';

app.get('/planets', (req, res) => {
  res.json(planets);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
