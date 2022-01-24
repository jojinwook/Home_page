// import React, { Component } from 'react';
import React from 'react';
import Box from '@mui/material/Box';
// import '../../node_modules/materialize-css/dist/css/mat';
// import '../../node_modules/materialize-css 복사본/dist/css/materialize.min.css'
import '../../node_modules/materialize-css/dist/css/materialize.min.css';
// import Button from '@mui/material/Button';
// import '../'


// import videoSrc from '../images/movie/main_video_final.mp4'

import $ from "jquery";

import { Link } from 'react-router-dom'
// import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

// import map_1 from '../images/sun_wind_map_img/map_1.jpg';
// import map_2 from '../images/sun_wind_map_img/map_2.jpg';
// import map_3 from '../images/sun_wind_map_img/map_3.jpg';
// import map_4 from '../images/sun_wind_map_img/map_4.jpg';
// import map_5 from '../images/sun_wind_map_img/map_5.jpg';
// import map_6 from '../images/sun_wind_map_img/map_6.jpg';


import backimg from '../images/image_29.png'

// import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './Main.css'







// import shadows from '@material-ui/core/styles/shadows';
// import { margin } from '@mui/system';

// export default function Main() {
//   return (


// export default function BoxSx() {
//     return (
//         <Box
//         sx={{
//             display: 'inline-block',
//             flexDirection: 'column',
//             // minHeight: '90vh',
//             maxWidth: "100%",
//             // backgroundColor: "#f5f5f5",
//             backgroundImage: `url(${backimg})`,
//             backgroundSize: "100% 100%",
//             height:"60vw", width:"100%"
//             // paddingTop:"5vw"
//         }}
//         >
//     <CssBaseline />
//     <Container component="main" style={{ marginTop: "20vw", marginBottom: 1,
//                 maxWidth:"100%" }} maxWidth="sm">
//         <Typography variant='h1' gutterBottom style={{
//                     fontFamily: "Pretendard", fontSize: "50px", fontStyle: "normal",
//                        lineHeight:"70px"}}>
//                 {'깨끗한 에너지가 중심이 되는 세상을 꿈꾸는'} <br />
//                 {'에너지 IT 소셜벤처입니다.'}        
//         </Typography> 
//     </Container>
//     {/* <Box direction="row" spacing={2} style={{}}>

//     </Box> */}
//     <div>
//         <Link to="./이동할 페이지 경로/파일명"> 
//                     <div style={{
//                         fontFamily: "Pretendard",
//                         backgroundColor: "#277F70",
//                         color: "#fff", width: "216px",
//                         height: "74px", display: "inline-block",
//                         paddingTop: 25
//                     }}> 더 알아보기</div>
//         </Link>
//             </div>

//     </Box>
//   );
// }


const Slide = (props) => {
  return (
    <React.Fragment>
      <Box className="logo_img"
        sx={{
          display: 'inline-block',
          flexDirection: 'column',
          // minHeight: '90vh',
          maxWidth: "100%",
          // backgroundColor: "#f5f5f5",
          backgroundImage: `url(${backimg})`,
          backgroundSize: "100% 100%",
          width: "100%", height: "1000px"
          // paddingTop:"5vw"
        }}
      >


        {/* <CssBaseline /> */}
        <Container component="main" className="mainDiv" style={{
          marginBottom: 1,
          // marginTop: "15%",
          maxWidth: "100%"
        }} maxWidth="sm">
          <Typography variant='h1' className="mainText logo_text_mains" gutterBottom >
            <p className="logo_text logo_text_main" style={{ marginTop: "301px", fontFamily: "Pretendard", fontStyle: "normal" }}>
              식스티헤르츠는<br className="br_4" /> <span>에너지 IT 소셜벤처 입니다.</span> <br />
              여러분과 함께 기후위기 대응을 위한<br className="br_4" />  기술과 서비스를 만듭니다.</p>
          </Typography>
        </Container>

        <div>
          <Link to="/ABOUT">
            <div id="Main_the" className="Main_the" style={{
              fontFamily: "Pretendard_semibold",
              backgroundColor: "transparent", border:'2px solid #252525',
              color: "#252525", width: "180px", borderRadius:"100px",
              height: "70px", display: "table-cell", verticalAlign: "middle", fontSize: '20px'
            }}> 더 알아보기</div>
          </Link>
        </div>
        {/* <video autoPlay>
          <source src="../images/main.mov" type="video/mov">
            이 문장은 사용자의 웹 브라우저가 video 태그를 지원하지 않을 때 나타납니다!
          </source>
        </video> */}

        

    {/* <video controls width="250">

    <source src="/images/movie/main.mp4"
            type="video/mp4" />

    Sorry, your browser doesn't support embedded videos.
    </video> */}
        <div className="Main_img" style={{
          maxWidth: "100%", display: "inline-block",
          width: "85%", height: "47vw", marginTop: "10vh",
          backgroundColor: "#fff", borderRadius: "20px",
          boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2)", border: "40px solid #fff",
          overflow: "hidden", position: "relative"
          // position: "relative"
        }}>

          {/* <SwitchTransition mode={"out-in"}>
            <CSSTransition  classNames="fade" timeout={1000} key={props.image.link}>
                    <img style={{
                        display: 'inline-block',
                        flexDirection: 'column',
                        // maxWidth: "100%", 
                        maxWidth: "100%", 
                        backgroundSize: "100% 100%",
                        height: "110%", width: "100%",
                        overflow: "none"
                    }}
                        src={props.image.link} alt="Sliderr_image" />
            </CSSTransition>
        </SwitchTransition>  */}

          {/* <div id="slide" style={{ position: 'relative' }}> */}
            {/* <div className="rolling_img"> */}
              {/* <img style={{
                position: 'absolute',
                left: 0,
                top: 0,
                maxWidth: "100%",

              }} src={map_1} alt="main_img_1" /> */}

          {/* <video autoPlay muted loop playsInline style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width:"100%",
                  maxWidth: "100%" }}>
            <source src={videoSrc}></source>
          </video> */}
          <div className='video-container'>
          <iframe frameborder="0" allowfullscreen title="햇빛바람지도_미리보기" style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width:"100%",
                  height:"100%",
                  maxWidth: "100%" }}
                  
            src="https://www.youtube.com/embed/yGeiyZLHnlI?autoplay=1&mute=1&amp;playlist=yGeiyZLHnlI&loop=1&modestbranding=1&controls=0">
          </iframe>
          </div>

          


            {/* </div> */}
            {/* <div className="rolling_img">
              <img style={{
                position: 'absolute',
                left: 0,
                top: 0,
                maxWidth: "100%",
              }} src={map_2} alt="main_img_2" />

            </div>
            <div className="rolling_img">
              <img style={{
                position: 'absolute',
                left: 0,
                top: 0,
                maxWidth: "100%",
              }} src={map_3} alt="main_img_3" />

            </div>
            <div className="rolling_img">
              <img style={{
                position: 'absolute',
                left: 0,
                top: 0,
                maxWidth: "100%",
              }} src={map_4} alt="main_img_4" />

            </div>
            <div className="rolling_img">
              <img style={{
                position: 'absolute',
                left: 0,
                top: 0,
                maxWidth: "100%",
              }} src={map_5} alt="main_img_5" />

            </div>
            <div className="rolling_img">
              <img style={{
                position: 'absolute',
                left: 0,
                top: 0,
                maxWidth: "100%",
              }} src={map_6} alt="main_img_6" />

            </div> */}

          {/* </div> */}







          {/* <img style={{
            display: 'inline-block',
            flexDirection: 'column',
            // maxWidth: "100%", 
            maxWidth: "100%", 
            backgroundSize: "100% 100%",
                    height: "110%", width: "100%",
            overflow:"none"
            }} src={props.image.link} alt="Sliderr_image" /> */}



        </div>
      </Box>


    </React.Fragment>
  );
};
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
    }, 1500);




    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => {
        return prev + 1 === slides.length ? 0 : prev + 1;
      });
    }, 500);
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






    // <Container
    //             sx={{
    //                 marginTop: 10,
    //             }}>
    //         <Box
    //                 style={{
    //                 maxWidth:"100%",
    //             border: "10px solid red",
    //             // height: "947px", width:"1678px",
    //             backgroundRepeat:"no-repeat",
    //             borderRadius: 10,
    //             // backgroundImage: `url(${logo})`,
    //             // backgroundSize: "100% 100%",
    //             overflow: "hidden",
    //             position: "relative"
    //                 }}



    //         // sx={{
    //         //     textAlign: "center",
    //         //     border: 1,
    //         //     bxShadow: 3,
    //         //     mt : 10,o
    //         //     borderRadius: 3,
    //         //     height: 500,
    //         //     backgroundImage: 'url("./test.png")',

    //         //     '&:hover': {
    //         //     backgroundColor: 'primary.main',
    //         //     opacity: [0.9, 0.8, 0.7],
    //         //     },
    //         // }}

    //             >
    //                 <img style={{
    //                     maxWidth: "100%",
    //                     width: "95%",
    //                     border: "10px solid black",
    //                     borderRadius: 10
    //                 }} src={Imgone} alt="One" />
    //         </Box>



    //     {/* <Box >
    //         <img src={logo} alt="logo"/>
    //     </Box> */}




    // </Container>






