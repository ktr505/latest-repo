
const crypto = require('crypto');

console.log('Metodi disponibili nel modulo crypto:');
console.log(Object.keys(crypto));

const randomID = crypto.randomBytes(16).toString('hex');
console.log('Random ID:', randomID);
