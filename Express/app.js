const express = require('express');

const app = express();

app.get('/', (req, res)=> {
    res.send('This endpoint is working!');
});

app.get('/about', (req, res) => {
    res.send('This is the about page!');
});

app.post('/create', (req, res) =>{
    res.send('post request received');
})

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`)
})

// app.get('/user/:id', (req, res) => {
//     const data = req.params.id;
//     res.send(`Has been deleted: ${data}`)
// })

app.listen(9000, ()=> {
    console.log(`Express server is running on PORT: 9000`);
    console.log('to stop the server, press ctrl+c');
});



/*
    curl POST http://localhost:9000/create -H 'Content-type:application/json' -d '{}'

    curl GET http://localhost:9000/

    curl -s -X GET http://localhost:9000/
*/