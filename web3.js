const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 2323;
const serverName = 'Server Three';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`hello world from ${serverName}`);

    // Log the request details to a common file
    const logEntry = `${new Date().toISOString()} - Request handled by ${serverName} - ${req.method} ${req.url}\n`;
    fs.appendFile('all_servers.log', logEntry, (err) => {
        if (err) {
            console.error(`Error writing to log file: ${err}`);
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
