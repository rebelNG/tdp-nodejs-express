const express = require("express");
const server = express();

let middleware = (req, res, next) => {
    res.write('<h1>Emmanuels blog</h1><br>');
    res.write('<h6>My life in pictures</h6> <hr>');
    next();
};

server.use('/', middleware);

server.get('/', (req, res) => {
    res.write('Are you ready to delve into my world?');
    res.end();
});

server.get('/pictures', (req, res) => {
    res.write('These pictures will let you know better!');
    res.end();
});

server.listen(3000, () => {
    console.log('Server is running on port 3000!');
    console.log('ctrl+c to end server!');
})