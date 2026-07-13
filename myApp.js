let express = require("express");
let app = express();
require("dotenv").config();
let bodyParser = require("body-parser");

// Challenge 1
console.log("Hello World");

// Challenge 7
app.use(function (req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

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
    ? res.json({
        message: "HELLO JSON",
      })
    : res.json({
        message: "Hello JSON", // Challenge 5
      });
});

// Challenge 8
const middleware = (req, res, next) => {
  req.time = new Date().toString();
  next();
};

app.get("/now", middleware, (req, res) => {
  res.send({
    time: req.time,
  });
});

// Challenge 9
app.get("/:word/echo", function (req, res) {
  res.json({ echo: req.params.word });
});

// Challenge 10
app.get("/name", function (req, res) {
  const first = req.query.first;
  const last = req.query.last;

  res.json({
    name: `${first} ${last}`,
  });
});

// Challenge 11
app.use(bodyParser.urlencoded({ extended: false }));
module.exports = app;

// Challenge 12
app.post("/name", function (req, res) {
  const first = req.body.first;
  const last = req.body.last;
  res.json({
    name: `${first} ${last}`,
  });
});
