const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded());

app.use((req, res, next) => {
    console.log("In the middleware");
    next(); //required to call next middleware
});

app.use((req, res, next) => {
    console.log("In the 2nd middleware");
    res.send('<h1>Hello from ExpressJS</h1>');
});

app.listen(3000)