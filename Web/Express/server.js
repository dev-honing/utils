// Express 서버
const express = require("express");
const { Route } = require("./utils");
const app = express();
const PORT = 3000;

// '/' 경로에 대한 핸들러 등록
Route(app, "get", "/", (req, res) => {
  res.send("Hello, Express!!");
});

// '/test' 경로에 대한 핸들러 등록
Route(app, "get", "/test", (req, res) => {
  res.send("/test 점검");
});

// '/test2' 경로에 대한 핸들러 등록
Route(app, "get", "/test2", (req, res) => {
  res.send("/test2 점검");
});


app.listen(PORT, () => {
  console.log(`서버 ON: http://localhost:${PORT}`);
});
