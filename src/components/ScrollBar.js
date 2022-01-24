// import * as React from 'react';
import React from "react";
// , { useState, useEffect }
import useMediaQuery from '@mui/material/useMediaQuery';
import Slider from "react-slick";
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
import logo from "../images/sanjabu.png"
import logo_2 from "../images/gobu.png"
import logo_3 from "../images/sobu.png"
import logo_4 from "../images/hang_bu.png"

import mobile_logo from "../images/mobile_su/sanjabu.png"
import mobile_logo_2 from "../images/mobile_su/gobu.png"
import mobile_logo_3 from "../images/mobile_su/sobu.png"
import mobile_logo_4 from "../images/mobile_su/hang_bu.png"






import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';



// import ReactTextTransition, { presets } from "react-text-transition";




function LollingText(props) {

    const max768 = useMediaQuery('(max-width:360px)')

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        speed: 1200,
        autoplaySpeed: 3000,
        cssEase: "ease-in-out"

        // verticalSwiping: true,
        // beforeChange: function (currentSlide, nextSlide) {
        //     console.log("before change", currentSlide, nextSlide);
        // },
        // afterChange: function (currentSlide) {
        //     console.log("after change", currentSlide);
        // }
    };

    const textArr = [
        "범정부 공공데이터 활용 창업경진대회 대상 (대통령상)",
        "소셜벤처 경연대회 대상 (국무총리상)",
        "사회적경제 박람회 소셜벤처 IR 대상 (중소벤처기업부 장관상)",
        "공공데이터 활용 BI 아이디어 공모전 대상 (산업통상자원부 장관상)"
    ]

    return (
        // <div>
        <Box
            sx={{
                // display: 'flex',
                // flexDirection: 'column',
                paddingTop: "3vw",
                maxWidth: "1190px",
                margin: "0 auto"
                // height: "30vw", paddingTop: "15vw"
            }}
        >
            {/* <img className="photo" src={logo} alt="logo" /> */}

            <Slider {...settings}>
                {
                    textArr.map((data, idx) => {
                        return (
                            <div>
                                <div className="lolling_text"
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        // height: '100px',
                                        height: '50px',
                                        // maxWidth: '1100px',  최근
                                        margin: '0 auto'
                                        // backgroundColor: 'red'
                                        // margin:'0'
                                    }}
                                >
                                    <div className="lolling" style={{
                                        // paddingLeft: "12vw",
                                        // height: '60px'
                                        height: '70px'
                                        // backgroundColor: 'blue'
                                    }}>
                                        {
                                            // height="35px"     
                                            idx === 0 ? <img className="lolling_img1" src={max768 ? mobile_logo_4 : logo_4} alt="logo_4" /> : idx === 1 ? <img className="lolling_img2" src={max768 ? mobile_logo_2 : logo_2} alt="logo_1" /> : idx === 2 ? <img className="lolling_img3" src={max768 ? mobile_logo_3 : logo_3} alt="logo_2" /> : idx === 3 ? <img className="lolling_img4" src={max768 ? mobile_logo : logo} alt="logo" /> : ''
                                        }



                                    </div>
                                    {
                                        // <span style={{fontFamily:"Pretendard_medium", fontSize:"19px", marginLeft:"0.5vw", marginBottom:"14px",width:"200px"}}>{data}</span>

                                        idx === 0 ? max768 ? <span id="lolling_span" style={{ width: "235px", left: "20%" }}>{data}</span> : <span id="lolling_span" style={{ width: "600px", marginTop: "-48.5px" }}>{data}</span> : idx === 1 ? max768 ? <span id="lolling_span_1" style={{ width: "200px", left: "23%" }}>{data}</span> : <span id="lolling_span_1" style={{ width: "460px", marginTop: "-48px" }}>{data}</span> : idx === 2 ? max768 ? <span id="lolling_span_2" style={{ width: "180px", left: "28%" }}>{data}</span> : <span id="lolling_span_2" style={{ width: "520px", marginTop: "-49px" }}>{data}</span> : idx === 3 ? max768 ? <span id="lolling_span_3" style={{ width: "230px", left: "20%" }}>{data}</span> : <span id="lolling_span_3" style={{ width: "500px", marginTop: "-48px" }}>{data}</span> : ''

                                    }

                                </div>
                            </div>
                        )
                    })
                }

            </Slider>


            {/* <ReactTextTransition style={{
                fontFamily: "Pretendard_medium",
                fontSize: "26px",
                lineHeight: "35px",
                display: "inline-block"
            }}
                springConfig={presets.slow}
                text={TextInfo}
            // springConfig={{ stiffness: 50, damping: 20 }}
            /> */}
            {/* </div> */}
        </Box>
    );
}

export default LollingText;








