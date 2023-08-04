// 아정

const express = require("express");
const app = express();
var db = require("./db.js");
var conn = db.init();

// MySQL 연결
db.connect(conn);

// 데이터 쿼리문

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

// 가게 리스트 페이지

app.get("/resultpagelist", function (req, res) {
  // 버튼 선택에 따른 sql문 구현
  let sql;

  if (req.query.type == 0) {
    sql = "SELECT store.title FROM store"; // 전체
  } else if (req.query.type >= 1 && req.query.type <= 6) {
    // 아시안, 양식, 술집, 디저트, 브런치
    sql = `
    SELECT store.title
    FROM store
    JOIN \`id-store_id\` ON store.id = \`id-store_id\`.id
    WHERE \`id-store_id\`.store_type_id = ${req.query.type}
  `;
  } else {
    // 적절하지 않은 버튼 선택에 대한 예외처리
    res.status(400).send("잘못된 버튼 선택");
    return;
  }

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
