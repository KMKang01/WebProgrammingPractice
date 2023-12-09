const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, ()=>{
    console.log(`${port}번 포트 대기 중...`);
});
app.get("/",(req,res)=>{
    res.render("ex02.ejs");
});
app.get("/query", (req, res)=>{
    let userData = {
        data1: req.query.content,
    };
    res.send(userData.data1);
    console.log(userData);
})