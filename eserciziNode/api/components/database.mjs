import sqlite3 from "sqlite3";
import { open } from "sqlite";

const dbPromise = open({
  filename: "./database.sqlite",
  driver: sqlite3.Database,
});

async function setup() {
  const db = await dbPromise;
  await db.exec(`
    CREATE TABLE IF NOT EXISTS character (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      status TEXT,
      species TEXT,
      type TEXT,
      gender TEXT,
      origin_name TEXT,
      origin_url TEXT,
      location_name TEXT,
      location_url TEXT,
      image TEXT,
      url TEXT,
      created TEXT
    );
    CREATE TABLE IF NOT EXISTS episode (
      id INTEGER PRIMARY KEY,
      character_id INTEGER,
      episode_id INTEGER,
      episode_name TEXT,
      air_date TEXT,
      episode_code TEXT,
      episode_url TEXT,
      created TEXT
    );
    CREATE TABLE IF NOT EXISTS friend (
      id INTEGER PRIMARY KEY,
      character_id INTEGER,
      friend_id INTEGER,
      friend_name TEXT,
      status TEXT,
      species TEXT,
      gender TEXT,
      friend_url TEXT
    );`);
}
setup()
export default dbPromise