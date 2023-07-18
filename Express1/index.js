const express = require("express")
let server = express()

/*
function hello(req, res){
    res.send('Hello, welcome to TDP')
}
*/

function nbs(req, res){
    res.send('This is a NBS program')
}


server.get('/home', (req,res)=>{
    res.send('Hello, welcome Home')
})
server.get('/nbs', nbs)

server.listen(3000, ()=> {
    console.log('Server is running on port: 3000');
    console.log('ctrl+c to exit');
})