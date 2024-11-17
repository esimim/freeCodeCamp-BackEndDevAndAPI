require('dotenv').config();
let express = require('express');
let app = express();
console.log("Hello World");
app.use("/public", express.static(__dirname + "/public"));
app.get("/json", function(req, res) {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({"message": "HELLO JSON"});
  }
  res.json({"message": "Hello json"});
});
app.get("/", function(req, res){
  res.sendFile(__dirname + "/views/index.html");
});






































 module.exports = app;
