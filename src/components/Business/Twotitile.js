import React from 'react';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import About_Main from '../../images/ABOUT_Main.png'
import Imgg from '../../images/system.jpg';
import Ver from '../../images/Business/Vector.svg'
import la from '../../images/Business/image88.png'
import { Link } from 'react-router-dom'

import Slider from "react-slick";
// import backimg from '../images/image_29.png'

// import { CSSTransition, SwitchTransition } from 'react-transition-group';
import '../Main.css'





const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0,
    cssEase: "linear"

    // verticalSwiping: true,
    // beforeChange: function (currentSlide, nextSlide) {
    //     console.log("before change", currentSlide, nextSlide);
    // },
    // afterChange: function (currentSlide) {
    //     console.log("after change", currentSlide);
    // }
  };

  return (
    <React.Fragment>
      <Container id="Business_two_title_img" style={{
        // marginTop: "10vw", 
        marginBottom: 1, width: "100%", backgroundColor: "#F5F8FA",
        maxWidth: "100%", height: "auto", 
        // paddingBottom:"5vw"
      }} >
        <div className="Two_title_img" style={{
          maxWidth: "100%", display: "inline-block", marginTop: "15vw",
          width: "660px", height: "470px",
          overflow:'hidden',
          backgroundColor: "#F5F8FA", borderRadius: "20px",
          boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2)", border: "30px solid #fff", float: "right",
          position: "relative"
          // position: "relative"
        }}>
          <Slider {...settings}>
            <div
              style={{
                maxWidth: "100%",

              }}
            >
              <img id="Two_title_img_2" style={{ width: '100%' }} src={Imgg} alt="One" />
            </div>
            <div
              style={{
                maxWidth: "100%",

              }}
            >
              <img id="Two_title_img_2" style={{ width: '100%' }} src={Imgg} alt="One" />
            </div>
            <div
              style={{
                maxWidth: "100%",

              }}
            >
              <img id="Two_title_img_2" style={{ width: '100%' }} src={Imgg} alt="One" />
            </div>
            <div
              style={{
                maxWidth: "100%",

              }}
            >
              <img id="Two_title_img_2" style={{ width: '100%' }} src={Imgg} alt="One" />
            </div>
          </Slider>
        </div>
        <div id="title_one" className="Business_img_To_title" style={{
          display: "inline-block", marginTop: "15vw",  
        }}>
          <img style={{height: "40px", marginBottom: "1vw", marginTop: "2vw",display: "flow-root" }} src={la} alt="la" />

          <p style={{ fontFamily: "Pretendard_light", lineHeight: "50px", fontSize: "40px", textAlign: "left", margin: 0, color:"#252525" }}>
            재생에너지 <br />
            <span style={{fontFamily: "Pretendard_semibold"}}>통합관제시스템</span></p>
          <br />
          <div id="color_fow" style={{
            fontSize: "14px", lineHeight: "20px", fontFamily: "Pretendard_medium",
            marginTop: "1vw", textAlign: "left"
          }}>
            보유하고 계신 다양한 분산 자원을<br />
            효율적으로 관리하고 싶으신가요?<br />
            전력 중개 사업, 발전량 예측과 같은<br />
            에너지 신사업에 참여하고 싶으신가요?<br />
            식스티헤르츠가 도와드리겠습니다.
          </div>
          
          <Link to={{ pathname:"https://docs.google.com/forms/d/e/1FAIpQLSer94Hec0tHCNQ3FkYYtTA8S7DGU48LYX6GNvqTw8uDFIeWgA/viewform" }} target="_blank">
          <div id="sun_lets_go_2" style={{
            color: "#1D336A",
            fontFamily: "Pretendard", textAlign: "left",
            lineHeight: "30px", fontSize: "22px", marginTop: "2vw", marginBottom: "50px"
          }} onClick>
            솔루션 문의하기 <img style={{ marginLeft: 10 }} height="19px" src={Ver} alt="Ver" />
          </div>
          </Link>
        </div>
      </Container>

    </React.Fragment>
  );
};

export default About;
