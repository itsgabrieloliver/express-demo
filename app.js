const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  console.log(req.ip);
  console.log("new request!");
});

app.get("/ping", (req, res) => {
  res.send("pong!");
});

app.get("/testing", (req, res) => {
  res.send("testing testing 1 2 3!");
});

app.listen(port, () => {
  console.log("running!");
});
