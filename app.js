const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  console.log(req.ip);
  console.log("New request!");
});

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(port, () => {
  console.log("running");
});
