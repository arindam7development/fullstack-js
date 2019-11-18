let http = require("http")
let thecount = 20

function theAbc() {
    
    console.log(thecount)
}

theAbc()
hello = () => { return "arindam"}
console.log(hello())

let ourApp = http.createServer( function (req, res) {
console.log(req.url)
if(req.url == "/abt") {
    res.end("Thanks")
} else {
    res.end("Hello thanks")
}

})

ourApp.listen(3000)

