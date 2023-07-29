import React from "react";

import "../component/Result.css";
import styles from "../component/Result.module.css";

import {Card, CardText} from 'reactstrap';

import {IoIosArrowBack} from "react-icons/io";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import resultsmp from "../img/result_sample.png";
import saladysmp from "../img/salady_sample.png";
import monstersmp from "../img/monster_sample.png";

const ResultSlider=()=>{
    const settings={
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return(
        <Slider {...settings}>
            <div style="line-height: 200%">
                <Card>
                    <img src={saladysmp} />
                    <CardText>
                        샐러디 숙명여대점<br/>
                        영업시간<br/>
                        08:00~21:00<br/>
                    </CardText>
                </Card>
            </div>
            <div>
                <Card>
                    <img src={monstersmp} />
                    <CardText>
                        몬스터플레이스<br/>
                        영업시간<br/>
                        08:00~20:30<br/>
                    </CardText>
                </Card>
            </div>
            <div>
                <Card>
                    <img src={saladysmp} />
                    <CardText>
                        샐러디 숙명여대점<br/>
                        영업시간<br/>
                        08:00~21:00<br/>
                    </CardText>
                </Card>
            </div>
            <div>
                <Card>
                    <img src={monstersmp} />
                    <CardText>
                        몬스터플레이스<br/>
                        영업시간<br/>
                        08:00~20:30<br/>
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

const ResultPageList=()=>{
    return(
        <div className="Result">
            <div className="back" style={{textAlign: 'left'}}><IoIosArrowBack size="30" color="white"/></div>
            <h1 className={styles.title}>당신의 선택 결과</h1>

            <div>
                <img src={resultsmp} />
            </div>

            <hr/>
            <div>
                <ResultSlider/>
            </div>
            <hr/>
            
            <h5 className={styles.scroll}>좌우로 스크롤 하여 확인해보세요 :)</h5>
        </div>
    );
};

export default ResultPageList;