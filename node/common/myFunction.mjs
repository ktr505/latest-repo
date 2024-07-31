
function generateRandomID() {
    const crypto = require('crypto');
    return crypto.randomBytes(16).toString('hex');
}

module.exports = generateRandomID;
