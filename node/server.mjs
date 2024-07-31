
const http = require('http');

const server = http.createServer((req, res) => {

    res.statusCode = 200;

    res.setHeader('Content-Type', 'text/html');

    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Custom Message</title>
        </head>
        <body>
            <h1>Hello, welcome to my custom server!</h1>
            <p>This is a custom message from your Node.js HTTP server.</p>
        </body>
        </html>
    `);
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
