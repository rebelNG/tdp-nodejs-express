let nbs = require('express')
let server = nbs()

server.set('view engine', 'ejs')

server.get('/result/Mark', (req,res)=>{
    res.render('trainer.ejs', {
        'sname': 'Mark', 
        'phy':30,
        'chem': 60,
        'math': 52
    })
    res.end()
})

server.get('/result/Emma', (req,res)=>{
    res.render('trainer.ejs', {
        'sname': 'Emmanuel', 
        'phy':30,
        'chem': 70,
        'math': 92
    })
    res.end()
})

server.get('/result/Rebel', (req,res)=>{
    res.render('trainer.ejs', {
        'sname': 'Emma', 
        'phy':90,
        'chem': 115,
        'math': 120
    })
    res.end()
})

server.get('/', (req,res)=>{
    res.render('index.ejs')
    res.end()
})

server.get('/timestable/:number', (req,res)=>{
    res.render('calc.ejs',{num: req.params.number})
    res.end()
})

server.listen(3000, ()=>{
    console.log('Server is running on port 3000');
    console.log('ctrl+c to end');
})