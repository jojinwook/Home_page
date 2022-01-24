import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Ver from '../../images/Business/Vector.svg'
import la from '../../images/Business/image_77.png'

// import map_1 from '../../images/sun_wind_map_img/map_1.jpg';
// import map_2 from '../../images/sun_wind_map_img/map_2.jpg';
// import map_3 from '../../images/sun_wind_map_img/map_3.jpg';
// import map_4 from '../../images/sun_wind_map_img/map_4.jpg';
// import map_5 from '../../images/sun_wind_map_img/map_5.jpg';
// import map_6 from '../../images/sun_wind_map_img/map_6.jpg';

// import videoSrc from '../../images/movie/main_video_final.mp4'

// import { CSSTransition, SwitchTransition } from 'react-transition-group';
import '../Main.css'
import $ from "jquery";

import { Link } from 'react-router-dom'


const Slide = (props) => {
    return (
        <React.Fragment>
            <Box
        sx={{
            marginTop:"275px",
            display: 'inline-block',
            flexDirection: 'column',
            // minHeight: '90vh',
            maxWidth: "100%",
            backgroundColor: "#fff",
            // backgroundImage: `url(${backimg})`,
            backgroundSize: "100% 100%",
            height:"auto", width:"100%"
            // paddingTop:"5vw"
        }}
            >
                
     <CssBaseline />
     {/* <Container className="business_div" component="main" style={{  marginBottom: 1,
                maxWidth:"100%" , height:"auto"}} maxWidth="sm">
        <Typography className="Business_title_text" variant='h1' gutterBottom style={{
            maxWidth:"1190px",height:"18vw", 
                    fontFamily: "Pretendard", fontSize: "40px", fontStyle: "normal", display:"inline-block",  marginTop: "259px",
                       lineHeight:"65px", marginBottom:"5vh"}}>


                <p className="logo_text logo_text_business" style={{fontFamily: "Pretendard", fontStyle: "normal"}}>
                재생에너지 발전량을 예측하고<br />
                 전국의 다양한 발전소를 <br className="br_2" />
                 통합하여 운영하는 <br className="br_1" />
                 새로운 에너지 수요공급에 <br className="br_2" />
                 도전합니다.</p>

        </Typography> 
    
        
    </Container>           */}

     </Box>


     <Container className="Business_lolling" component="main" style={{  marginBottom: 1,
                maxWidth:"100%" ,height:"auto", width:"100%" }} maxWidth="sm">



    {/* <div style={{maxWidth:"100%", display:"inline-block",
          width: "45vw", height:"auto", 
          marginTop:"-10vw", marginLeft:"-10vw",
          backgroundColor: "#fff", borderRadius: "20px",
        boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2)", border: "40px solid #fff",
           position:"relative"
          
            }}>
                      <img style={{
                         maxWidth: "100%",
                         borderRadius: 10
                     }} src={Imgg} alt="One" />
    </div> */}

<div id="slide" style={{ position: 'relative', width:0,
  marginTop:"-1vw",
  //  marginLeft:"12vw"
    }}>
          {/* <div className="rolling_img" style={{position: 'relative'}}> */}

                  {/* <video className="business_video1" autoPlay muted loop playsInline style={{
                          position: 'absolute', top: 24,
                          // maxWidth: "70%",
                          height:"auto", width:"660px", borderRadius: "20px",
                          border: "30px solid #fff",
                          boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2)" }}>
                      <source src={videoSrc}></source>
                  </video> */}

            {/* <div className='video-container'> */}

              <iframe id="video" frameborder="0" allowfullscreen title="햇빛바람지도_미리보기" style={{
                          position: 'absolute', top: 24, 
                          height:"398px", width:"660px", borderRadius: "20px",
                          border: "30px solid #fff",
                          boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2)" }}
                src="https://www.youtube.com/embed/yGeiyZLHnlI?autoplay=1&mute=1&amp;playlist=yGeiyZLHnlI&loop=1&modestbranding=1&controls=0">
              </iframe>

            {/* </div> */}

          {/* </div> */}



          {/* <div className="rolling_img" style={{position:'relative'}}>
            <img style={{
              position: 'absolute',
              left: "20%",
              top: 0,
              // maxWidth: "70%",
               height:"auto", width:"660px", borderRadius: "20px",
              border: "30px solid #fff", 
              // boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2)"
            }} src={map_2} alt="img_map_2" />

          </div>
          <div className="rolling_img" style={{position:'relative'}}>
            <img style={{
              position: 'absolute',
              left: "20%",
              top: 0,
              // maxWidth: "70%",
             height:"auto", width:"660px", borderRadius: "20px",
              border: "30px solid #fff",
              //  boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2)"
            }} src={map_3} alt="img_map_3" />

          </div>
          <div className="rolling_img" style={{position:'relative'}}>
            <img style={{
              position: 'absolute',
              left: "20%",
              top: 0,
              // maxWidth: "70%",
              height:"auto", width:"660px", borderRadius: "20px",
              border: "30px solid #fff", 
              // boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2)"
            }} src={map_4} alt="img_map_4" />

          </div>
          <div className="rolling_img" style={{position:'relative'}}>
            <img style={{
              position: 'absolute',
              left: "20%",
              top: 0,
              // maxWidth: "70%",
              height:"auto", width:"660px", borderRadius: "20px",
              border: "30px solid #fff", 
              // boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2)"
            }} src={map_5} alt="img_map_5" />

          </div>
          <div className="rolling_img" style={{position:'relative'}}>
            <img style={{
              position: 'absolute',
              left: "20%",
              top: 0,
              // maxWidth: "70%",
               height:"auto", width:"660px", borderRadius: "20px",
              border: "30px solid #fff", 
              boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2)"
            }} src={map_6} alt="img_map_6" />

          </div> */}

        </div>


    <div className="Business_img_title" style={{fontFamily:"Pretendard_semibold", display:"inline-block",
        lineHeight:"50px",fontSize:"40px", textAlign:"left"}}>
            <img style={{height:"40px",marginTop: "4vw", marginBottom:"12px",display:"table-cell"}}src={la} alt="la"/>
            <text id="sum" > 햇빛바람지도 </text>
            <br />
            <div id="title_one" style={{fontSize:"14px",lineHeight:"20px",fontFamily:"Pretendard_medium",
        marginTop:"2vw"}}>
            약 8만여개의 태양광, 풍력 발전소를 한 눈에<br />
            확인해보세요. AI기술로 미래 발전량을 예측하고,<br />
            기상 정보를 다양한 방식으로 시각화하였습니다.<br />
            공공데이터 활용 우수사례로 대통령상을<br />
            수상하였습니다.
                </div> 
          <Link to={{ pathname:"https://map.60hz.io/index.html" }} target="_blank">
            <div id="sun_lets_go" style={{color:"#1D336A",
                    fontFamily:"Pretendard",
                    lineHeight:"30px", fontSize:"22px", marginTop:"2vw", marginBottom:"50px"}}>
            햇빛바람지도 바로가기 <img style={{marginLeft:10, height:"19px"}} src={Ver} alt="Ver" />
        </div>
            </Link>
        </div>
        </Container>          

      </React.Fragment>
    );
  };





  
//   export default About;
const Banner = (props) => {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const slides = [
      {
        id: 1,
        link: "../../map_1.jpg"
  
      },
      {
        id: 2,
        link: "../../map_2.jpg"
      },
      {
        id: 3,
        link: "../../map_3.jpg"
      },
      {
        id: 4,
        link: "../../map_4.jpg"
      },
      {
        id: 5,
        link: "../../map_5.jpg"
      },
      {
        id: 6,
        link: "../../map_6.jpg"
      }
    ];
    React.useEffect(() => {
      $('#slide > div:gt(0)').hide();
  
      setInterval(function () {
        $('#slide > div:first')
          .fadeIn(600)
          .next()
          .fadeOut(600)
          .end()
          .appendTo('#slide');
      }, 4000);
  
  
  
  
      const intervalId = setInterval(() => {
        setCurrentSlide((prev) => {
          return prev + 1 === slides.length ? 0 : prev + 1;
        });
      }, 1000);    //이부분 아님????
      return () => {
        clearInterval(intervalId);
      };
    }, [slides.length]);
    return (
      <React.Fragment>
        <Slide
          image={slides[currentSlide]}
        />
  
      </React.Fragment>
    );
  };
  
  
  
  export default Banner;
