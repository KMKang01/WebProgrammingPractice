const express = require("express");
const app = express();
const port = 8000;
let cnt = 0;
app.get("/", (req, res) => {
  cnt = cnt + 1;
  res.status(200);
  res.send(`${cnt} : Hello Node!`);
});
app.get("/users", (req, res) => {
  res.send("users Page");
});
// 저장, 추가, 삽입
app.post("/users", (req, res) => {
  res.send("[post] 생성");
});
// 내용 보기
app.get("/users/:id", (req, res) => {
  res.send(`[get] 가져오기 ID: ${req.params.id}`);
});
// 수정하기
app.put("/users/:id", (req, res) => {
  res.send(`[put] 수정 ID: ${req.params.id}`);
});
// 삭제하기
app.delete("/users/:id", (req, res) => {
  res.send(`[delete] 삭제 ID: ${req.params.id}`);
});
app.listen(port, () => {
  console.log(`${port}번 포트 대기 중`);
});
