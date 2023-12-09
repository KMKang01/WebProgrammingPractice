const express = require("express");
const app = express();
const port = 8000;
app.set("view engine", "ejs"); // 뷰에 사용할 ejs템플릿 엔진 설정
app.set("views", "./views"); // ejs템플릿 파일 경로
app.listen(port, () => {
console.log(`${port}번 포트 대기 중…`);
});
app.get("/", (req, res) => {
// render() 함수 : 01ejsTest.ejs 템플릿 파일로 데이터 전달
res.render("ex01.ejs", { message: "ejs를 테스트 합니다." });
});