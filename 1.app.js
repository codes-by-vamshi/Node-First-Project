const http = require('http');

const rqListener = (req, res) => {
    console.log(req);
    //process.exit();
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My App</title></head>');
    res.write('<body><h1>Hello</h1></body>');
    res.write('</html>');
    res.end();
}

const server = http.createServer(rqListener);

server.listen(3000);