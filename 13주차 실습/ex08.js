const express = require("express");
const app = express();
const ejs = require("ejs");
app.set("view engine", "ejs");
app.set("views", __dirname);
app.engine("ejs", ejs.renderFile);
const server = app.listen(8000, () => {
  console.log("서버 대기 중...");
});
app.get("/", (req, res) => {
  res.render("loginQuery.ejs");
});
app.get("/query", (req, res) => {
  let userData = {
    data1: req.query.data1,
    data2: req.query.data2,
  };
  res.render("loginQuery.ejs", userData);
  console.log(userData);
});