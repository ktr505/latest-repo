import dbPromise from "./database.mjs";

async function populate() {
  const db = await dbPromise;
  await db.run(`
        INSERT INTO character (id, name, status, species, type, gender, origin_name, origin_url, location_name, location_url, image, url, created)
        VALUES (195, 'Kristen Stewart', 'Alive', 'Human', '', 'Female', 'Earth (C-500A)', 'https://rickandmortyapi.com/api/location/23', 'Earth (C-500A)', 'https://rickandmortyapi.com/api/location/23', 'https://rickandmortyapi.com/api/character/avatar/195.jpeg', 'https://rickandmortyapi.com/api/character/195', '2017-12-30T12:19:16.042Z');
      `);

  await db.run(`
        INSERT INTO episode (character_id, episode_id, episode_name, air_date, episode_code, episode_url, created)
        VALUES (195, 8, 'Rixty Minutes', 'March 17, 2014', 'S01E08', 'https://rickandmortyapi.com/api/episode/8', '2017-11-10T12:56:34.747Z');
      `);

  await db.run(`
        INSERT INTO friend (character_id, friend_id, friend_name, status, species, gender, friend_url)
        VALUES (195, 1, 'Rick Sanchez', 'Alive', 'Human', 'Male', 'https://rickandmortyapi.com/api/character/1'),
               (195, 2, 'Morty Smith', 'Alive', 'Human', 'Male', 'https://rickandmortyapi.com/api/character/2');
      `);
}
populate();
