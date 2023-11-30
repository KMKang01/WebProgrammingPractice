const http = require("http");
const port = 8000;
const server = http.createServer((req, res) => {
  // 요청 메서드와 URL 파싱
  const { method, url } = req;
  res.setHeader("Content-Type", "text/plain");
  // URL에 따른 응답 처리
  if (method === "GET" && url === "/home") {
    res.statusCode = 200;
    res.end("HOME");
  } else if (method === "GET" && url === "/about") {
    exports.statusCode = 200;
    res.end("ABOUT");
  } else {
    res.statusCode = 404;
    res.end("NOT Found");
  }
});
server.listen(port, () => {
  console.log(`${port}번 포트 대기 중`);
});
