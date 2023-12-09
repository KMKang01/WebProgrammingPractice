const express = require("express");
const app = express();
const port = 8000;

let arrGET = [];
let arrPOST = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, () => {
  console.log(`${port}번 포트 대기 중...`);
});

app.get("/", (req, res) => {
  res.render("ex04.ejs", { arrGET, arrPOST });
});

app.get("/create", (req, res) => {
    const data = {
        content : req.query.contents,
    }
    arrGET.push(data.content);
    console.log(arrGET);
    res.redirect("/");
});

app.post("/create", (req, res) => {
  const { contents } = req.body;
  arrPOST.push(contents);
  console.log(arrPOST);
  res.redirect("/");
});
