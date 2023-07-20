let nbs = require('express')
let server = nbs()

server.set('view engine', 'ejs')

server.get('/', (req,res)=>{
    res.render('index.ejs')
    res.end()
})

server.get('/selectRange/:n', (req,res)=>{
    res.render('range.ejs',{number: req.params.n})
    res.end()
})

server.get('/selectRange/:range/:T', (req,res)=>{
    res.render('tTable.ejs',{T: req.params.T, R: req.params.range})
    res.end()
})

server.listen(3000, ()=>{
    console.log('Server is running on PORT 3000');
    console.log('ctrl+c to exit');
})