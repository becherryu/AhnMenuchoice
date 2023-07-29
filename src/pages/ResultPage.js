import React from "react";
import {Link} from 'react-router-dom';

import "../component/Result.css";
import styles from "../component/Result.module.css";

import {IoIosArrowBack} from "react-icons/io";

import resultsmp from "../img/result_sample.png";

const ResultPage=()=>{
    return(
        <div className="Result">
            <div className="back" style={{textAlign: 'left'}}><IoIosArrowBack size="30" color="white"/></div>
            <h1 className={styles.title}>당신의 선택 결과</h1>

            <div>
                <img src={resultsmp} />
            </div>

            <button className={styles.btn_shadow} style={{ backgroundColor: "white", color: "black"}}>
                위치 보러가기</button>
            <br/>
            <button className={styles.btn_shadow} style={{ backgroundColor: "#1F60A9" }}>
                다시 선택하기</button>
            <br/>
            <Link to="/resultpagelist">
                <button className={styles.btn_shadow} style={{ backgroundColor: "#0C2D83" }}>
                    가게 보러가기</button>
            </Link>
        </div>
    );
};

export default ResultPage;