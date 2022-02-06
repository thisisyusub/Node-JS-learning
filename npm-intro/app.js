const http = require('http');
const requestHandler = require('./info');

const server = http.createServer(requestHandler);

server.listen(3000);