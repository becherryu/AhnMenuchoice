import React from "react";
import { Card, CardImg, CardText } from 'reactstrap';
import { IoIosArrowBack } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Result.css";
import styles from "./Result.module.css";

const ResultSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        vertical: true, 
        slidesToShow: 2, 
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            <div style={{ lineHeight: "200%" }}>
                <Card>
                    <CardImg src={process.env.PUBLIC_URL + 'img/salady_sample.png'} />
                    <CardText>
                        샐러디 숙명여대점<br />
                        영업시간<br />
                        08:00~21:00<br />
                    </CardText>
                </Card>
            </div>
            <div>
                <Card>
                    <CardImg src={process.env.PUBLIC_URL + 'img/monster_sample.png'} />
                    <CardText>
                        몬스터플레이스<br />
                        영업시간<br />
                        08:00~20:30<br />
                    </CardText>
                </Card>
            </div>
            <div>
                <Card>
                    <CardImg src={process.env.PUBLIC_URL + 'img/salady_sample.png'} />
                    <CardText>
                        샐러디 숙명여대점<br />
                        영업시간<br />
                        08:00~21:00<br />
                    </CardText>
                </Card>
            </div>
            <div>
                <Card>
                    <CardImg src={process.env.PUBLIC_URL + 'img/monster_sample.png'} />
                    <CardText>
                        몬스터플레이스<br />
                        영업시간<br />
                        08:00~20:30<br />
                    </CardText>
                </Card>
            </div>
            <div>
                1
            </div>
            <div>
                2
            </div>
            <div>
                3
            </div>
        </Slider>
    )
}

const ResultPageList = () => {
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

    return (
        <div>
            <div className="Result">
                <div className="back" style={{ textAlign: 'left' }}><IoIosArrowBack size="30" color="white" /></div>
                <button className={styles.btn_shadow} style={btnStyle3}>가게 리스트</button>
                <hr />
                <div>
                    <ResultSlider />
                </div>
                <hr />
            </div>
        </div>
    );
};
