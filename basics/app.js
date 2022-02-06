const http = require('http');

/// works for every incoming requests
const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'text/html');

    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.JS</h1></body>');
    res.write('</html>');

    res.end();
});

server.listen(3000);