import React from "react";
import {Link} from 'react-router-dom';

import "../component/Result.css";
import styles from "../component/Result.module.css";

import {IoIosArrowBack} from "react-icons/io";

import resultsmp from "../img/result_sample.png";

const btnStyle1={
    color:"black",
    background: "white",
    padding: "5px 60px",
    border: "1px solid white",
    borderRadius: "30px",
    fontSize: "25px",
    fontWeight: "bold",
    lineHeight: 1.5,
}

const btnStyle2={
    color:"white",
    background: "#1F60A9",
    padding: "5px 60px",
    border: "1px solid #1F60A9",
    borderRadius: "30px",
    fontSize: "25px",
    fontWeight: "bold",
    lineHeight: 1.5,
    marginTop: 10,
};

const btnStyle3={
    color:"white",
    background: "#0C2D83",
    padding: "5px 60px",
    border: "1px solid #0C2D83",
    borderRadius: "30px",
    fontSize: "25px",
    fontWeight: "bold",
    lineHeight: 1.5,
    marginTop: 10,
};

const ResultPage=()=>{
    return(
        <div className="Result">
            <div className="back" style={{textAlign: 'left'}}><IoIosArrowBack size="30" color="white"/></div>
            <h1 className={styles.title}>당신의 선택 결과</h1>

            <div>
                <img src={resultsmp} />
            </div>

            <button className={styles.btn_shadow} style={btnStyle1}>위치 보러가기</button>
            <br/>
            <button className={styles.btn_shadow} style={btnStyle2}>다시 선택하기</button>
            <br/>
            <Link to="/resultpagelist">
                <button className={styles.btn_shadow} style={btnStyle3}>가게 보러가기</button>
            </Link>
        </div>
    );
};

export default ResultPage;