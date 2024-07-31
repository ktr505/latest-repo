
import { writeFile } from 'fs';

const filePath = 'example.txt';
const fileContent = 'Creato utilizzando fs.writeFile!';

writeFile(filePath, fileContent, (error) => {
  if (error) {
    console.error('Errore', error);
  } else {
    console.log('File avviato con successo');
  }
});
