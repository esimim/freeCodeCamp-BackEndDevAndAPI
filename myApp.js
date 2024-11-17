require('dotenv').config();
let express = require('express');
let app = express();
console.log("Hello World");
app.use("/public", express.static(__dirname + "/public"));
app.get("/json", function(req, res) {
  let message = "Hello world";
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    message = message.toUpperCase();
    console.log(message);
  }
  console.log({"message": message});
  res.json({"message": message});
});
app.get("/", function(req, res){
  res.sendFile(__dirname + "/views/index.html");
});






































 module.exports = app;
