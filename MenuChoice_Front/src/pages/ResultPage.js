import React from "react";
import { Link } from "react-router-dom";

import "../component/Result.css";
import styles from "../component/Result.module.css";
import "../component/Home.css";

import resultsmp from "../img/result_sample.png";

const ResultPage = () => {

  return (
    <div className="Result">
      <br/>
      <h1 className={styles.title}>당신의 선택 결과</h1>

      <div>
        <img src={resultsmp} />
      </div>

      <button id="testBtn">
        다시 선택하기
      </button>
      <br />
      <Link to="/resultpagelist">
        <button id="listBtn">
          가게 보러가기
        </button>
      </Link>
    </div>
  );
};

export default ResultPage;
