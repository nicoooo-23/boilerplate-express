let express = require("express");
let app = express();
require("dotenv").config();

module.exports = app;

// Challenge 1
console.log("Hello World");

// Challenge 4
app.use("/public", express.static(__dirname + "/public"));

// Challenge 3
app.get("/", function (req, res) {
  // res.send("Hello Express"); // Challenge 2
  const absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
});


app.get("/json", function (req, res) {
  // Challenge 6
  process.env.MESSAGE_STYLE === "uppercase"
    ? res.json({ message: "HELLO JSON" })
    : res.json({ message: "Hello json" });
})
  
  // Challenge 5
  // res.json({
  //   message: "Hello json"
  // })