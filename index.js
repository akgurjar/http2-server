const http = require('http2');
const { readFileSync } = require('fs');

const https = {
    cert: readFileSync('./cert/localhost-cert.pem'),
    key: readFileSync('./cert/localhost-privkey.pem'),
};

const server = http.createSecureServer(https, function(req, res) {
    console.log(req.url);
    res.write('Hello from http2 server');
    res.end();
});

// console.log(http.createServer);

const PORT = 3000;

server.listen(PORT, function() {
    console.info(`Listening on port ${PORT}`);
});
