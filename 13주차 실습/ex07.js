const express = require("express");
const app = express();
const router = express.Router();
const port = 8000;

app.get("/", (req, res) => {
    //res.send(`<h1>Hello Router Object</h1>`);
    res.sendFile(__dirname +"/routerLogin.html");
});
router
    .route("/users")
    .get((req, res) => {
    res.send("get : 페이지 요청"); 
    })
    .post((req, res) => {
    res.send("post : 저장, 추가, 생성");
    });
router
    .route("/users/:id")
    .get((req, res) => {
        res.send(`[get] ID : ${req.params.id}`);
    })
    .put((req, res) => {
        res.send(`[put] ID : ${req.params.id}`);
    })
    .delete((req, res) => {
        res.send(`[delete] ID : ${req.params.id}`);
    });
app.use(router);

app.listen(port, () => {
    console.log(`${port}번 포트 대기 중`);
});