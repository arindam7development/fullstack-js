let express = require('express')
let ourApp = express()
ourApp.use(express.urlencoded({extended:false}))
ourApp.get('/', function(req, res){
res.send(`
<form action="/answer" method="POST">
  <p>What's the color of sky</p>
  <input name="skyColor" autocomplete="off">
  <button>Submit</button>
</form>`)
})
ourApp.post('/answer', function(req, res){

    if(req.body.skyColor.toUpperCase() == "BLUE") {
    res.send(`
       <p>Congrats</p>
       <a href="/">Home</a>
    `)
    }else {
        res.send(`
        <p>Wrong answer</p>
        <a href="/">Home</a>
     `)
    }
})
ourApp.listen(3000)