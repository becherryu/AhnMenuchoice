import React from "react";
import { Link } from 'react-router-dom';

import "./Result.css";
import styles from "./Result.module.css";

import { IoIosArrowBack } from "react-icons/io";

const btnStyle1 = {
    color: "black",
    background: "white",
    padding: "5px 60px",
    border: "1px solid white",
    borderRadius: "30px",
    fontSize: "25px",
    fontWeight: "bold",
    lineHeight: 1.5,
};

const btnStyle2 = {
    color: "white",
    background: "#1F60A9",
    padding: "5px 60px",
    border: "1px solid #1F60A9",
    borderRadius: "30px",
    fontSize: "25px",
    fontWeight: "bold",
    lineHeight: 1.5,
    marginTop: 10,
};

const btnStyle3 = {
    color: "white",
    background: "#0C2D83",
    padding: "5px 60px",
    border: "1px solid #0C2D83",
    borderRadius: "30px",
    fontSize: "25px",
    fontWeight: "bold",
    lineHeight: 1.5,
    marginTop: 10,
};

const MainPage = () => {
    return (
        <div>
            <div className="Result">
                <div className="back" style={{ textAlign: 'center' }}><IoIosArrowBack size="30" color="white" /></div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <img src={process.env.PUBLIC_URL + 'img/snowchar.png'} alt="Snow Character" />
                </div>
                <Link to="/testpage">
                    <button className={styles.btn_shadow} style={btnStyle2}>테스트하기</button>
                </Link>
                <Link to="/RestPageList">
                    <button className={styles.btn_shadow} style={btnStyle3}>가게 리스트</button>
                </Link>
            </div>
        </div>
    );
};

export default MainPage;
