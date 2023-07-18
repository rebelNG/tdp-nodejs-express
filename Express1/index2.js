const express = require("express")
let server = express()

server.get('/', (req, res)=>{
    res.write('<h1> <center> Welcome to my HOME PAGE </center> </h1>')
    res.write('<b>List of departments</b> <br><br>')
    res.write('<a href ="http://127.0.0.1:3000/department/01"> Human resource department </a> <br>')
    res.write('<a href ="http://127.0.0.1:3000/department/02"> Hustle department </a> <br>')
    res.write('<a href ="http://127.0.0.1:3000/department/03"> IT department </a><br>')
})

server.get('/department/:dept', (req, res)=>{
    let deptName;
    if (req.params.dept==01){
        deptName= 'Human Resource department'
    }
    if(req.params.dept==02){
        deptName='Hustle Department'
    }
    if(req.params.dept==03){
        deptName='IT department'
    }
    res.write(`<h1> <center> ${deptName} </center></h1>`)
})

server.listen(3000, ()=> {
    console.log('Server is running on port: 3000');
    console.log('ctrl+c to exit');
})