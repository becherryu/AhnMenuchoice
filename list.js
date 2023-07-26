// 아정

const express = require("express");
const app = express();
var db = require("./db.js");
var conn = db.init();

// MySQL 연결
db.connect(conn);

app.get("/", function (req, res) {
  // store 테이블 데이터 가져오는 쿼리 작성
  const sql = "SELECT * FROM store";

  // 쿼리 실행
  conn.query(sql, (err, results) => {
    if (err) {
      console.error("쿼리 실행 에러 : " + err);
      res.status(500).send("쿼리 실행 오류");
    } else {
      // 쿼리 결과를 res.send로 보냄
      res.send(results);
    }
  });
});

app.listen(3000);
