require('dotenv').config();
let express = require('express');
let app = express();
console.log("Hello World01");
app.get("/json", function(req, res) {
  console.log("Hello World02");
  res.json({message: "Hello json"});
});
app.get("/json", function(req, res) {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    console.log("Hello World02a");
    res.json({message: "HELLO JSON"});
  } else {
    console.log("Hello World02b");
    res.json({message: "Hello json"});
  };
  
});
console.log("Hello World03");
app.get("/", function(req, res){
  res.sendFile(__dirname + "/views/index.html");
});
app.use("/public", express.static(__dirname + "/public"));






































 module.exports = app;
