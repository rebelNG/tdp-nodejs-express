let nbs = require('express')
let server = nbs()

server.set('view engine', 'ejs')

server.get('/', (req,res)=>{
    res.render('index.ejs')
    res.end()
})

server.listen(3000, ()=>{
    console.log('Server is running on port 3000!');
    console.log('ctrl+c to close');
})