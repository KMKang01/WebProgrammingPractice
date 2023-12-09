const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, ()=>{
    console.log(`${port}번 포트 대기중...`);
});

app.get("/", (req, res)=>{
    res.render("ex03.ejs");
});

app.get("/create", (req, res)=>{
    let data ={
        name1: req.query.content1,
        name2: req.query.content2,
    };
    console.log(data.name1, data.name2);    
    res.send("The result " + data.name1 + ", " + data.name2);
});

app.post("/create", (req,res)=>{
    const name1 = req.body.content1;
    const name2 = req.body.content2;
    console.log(name1, name2);
    res.send("The result " +name1 + ", " + name2);
});