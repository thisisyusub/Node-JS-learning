const http = require('http');

/// works for every incoming requests
const server = http.createServer((req, res) => {
    console.log(req);
});

server.listen(3000);