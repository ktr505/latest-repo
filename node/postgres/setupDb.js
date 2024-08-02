require('dotenv').config();
const pgp = require('pg-promise')();
const db = pgp(process.env.DATABASE_URL);

const setupDb = async () => {
  try {
    await db.none('DROP TABLE IF EXISTS planets');
    await db.none(`
      CREATE TABLE planets (
        id SERIAL NOT NULL PRIMARY KEY,
        name TEXT NOT NULL
      )
    `);
    await db.none('INSERT INTO planets (name) VALUES ($1)', ['Earth']);
    await db.none('INSERT INTO planets (name) VALUES ($1)', ['Mars']);
    console.log('Database setup complete.');
  } catch (error) {
    console.error('Error setting up database:', error);
  } finally {
    pgp.end();
  }
};

setupDb();
