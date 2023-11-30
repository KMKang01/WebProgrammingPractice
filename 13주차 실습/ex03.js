const express = require("express");
const app = express();
const port = 8000;
let cnt = 0;
app.get("/", (req, res) => {
  cnt = cnt + 1;
  res.status(200);
  res.send(`${cnt} : Hello Node!`);
});
app.listen(port, () => {
  console.log(`${port}번 포트 대기중`);
});
