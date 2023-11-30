const http = require("http");
const port = 8000;
let cnt = 0;
const server = http.createServer((req, res) => {
  cnt = cnt + 1;
  console.log(`${cnt}: 클라이언트 요청`);
});
server.listen(port, () => {
  console.log(`${port}번 포트 대기 중`);
});