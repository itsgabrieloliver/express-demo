const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  console.log(req.ip);
  console.log("New request!");
  res.send("hello zain this is from my source code!");
});

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.get("/hello", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log("running");
});
