const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.set("views", path.join(__dirname, "../src"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/detail:id", (req, res) => {
  res.render("detail");
});

app.get("/collections", (req, res) => {
  res.render("collections");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
