var express = require("express");
let path = require('path')
var app = express();
//configure app to serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res, next) => {
    //respond with index.html 
    //res.sendFile('index.html')
    res.sendFile(__dirname + '/index.html');
  })
app.get("/users", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
   });
app.listen(3000, () => {
 console.log("Server running on port 3000");
});