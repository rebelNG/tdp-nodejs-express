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
server.get('/nbs2', nbs)

server.get('/add/:A/:B', (req,res)=>{
    let num1 = parseInt(req.params.A)
    let num2 = parseInt(req.params.B)
    let result = num1+num2
    res.send(`You added ${num1} and ${num2} and your answer is <br>${result}`)
})

server.listen(3000, ()=> {
    console.log('Server is running on port: 3000');
    console.log('ctrl+c to exit');
})