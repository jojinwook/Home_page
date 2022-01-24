import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import About_Main from '../../images/ABOUT_Main.png'
import Img from '../../images/Career/image25.png';
import Title from '../../images/Career/image32.png'
import One from '../../images/Career/image6.png'
import Two from '../../images/Career/image5.png'
import Three from '../../images/Career/image4.png'
// import { CSSTransition, SwitchTransition } from 'react-transition-group';
import '../Main.css'

import Carcon from './Carerrcontents'


const About = () => {
  return (
    <React.Fragment>
      <Box id="Career_backgorund_img"
        sx={{
          display: 'inline-block',
          flexDirection: 'column',
          // minHeight: '90vh',
          maxWidth: "100%",

          // backgroundImage: `url(${backimg})`,
          backgroundImage: `url(${Title})`,
          backgroundSize: "100% 100%",
          height: "auto", width: "100%"
          // paddingTop:"5vw"
        }}
      >

        <CssBaseline />
        <Container component="main" style={{
          /*marginTop: "5vw",*/
          maxWidth: "1190px", height: "auto", margin: "0 auto"
        }} maxWidth="sm">
          <Typography className="Career_title" variant='h1' gutterBottom style={{
            maxWidth: "1190px", /*height: "20vw",*/
            fontFamily: "Pretendard", fontSize: "40px", fontStyle: "normal", display: "inline-block",
            lineHeight: "65px"/*, marginTop: "10vw"*/
          }}>
            <p className="logo_text logo_text_career" style={{ /*marginTop: "17.5%",*/marginTop: "299px", fontFamily: "Pretendard", fontStyle: "normal", marginBottom: '15px' }}>
              식스티헤르츠와 함께<br />
              에너지 시장의 새로운 미래를 <br className="yes" />열어갈 <br className="br" />
              당신을 기다립니다.</p>
            <div className="Career_title_img" style={{ /*marginTop: "1vw"*/ }}>
              <img src={Img} height="40px" alt="img" />
              <img src={Img} height="40px" alt="img" />
              <img src={Img} height="40px" alt="img" />
            </div>
          </Typography>


        </Container>
      

      {/* <section style={{ maxWidth: "100%",width:"100%", height: "auto", backgroundColor: "#fff", paddingTop:"50px",display: "inline-block" }}>
        <Container maxWidth="sm" >
            <Typography variant="h1" component="h1" style={{maxWidth: "100%"}}>
          <div style={{ marginLeft:"-46vw"}}>
            <h4 style={{fontFamily:"Pretendard",fontSize:"40px", lineHeight:"48px"}}>함께 만들어나가는 문화</h4>
          </div>
            </Typography>
        </Container>
        <div className="container" style={{marginTop:"5vw", height:"auto"}}>
          <div className="row" style={{width:"100%", height:"auto"}}>
            <div className="col s12 m4" >
              <div className="card" style={{
                textAlign: "left", 
                fontFamily: "Pretendard_medium",
                fontSize: "26px", 
                width:"303px",height:"288px",backgroundColor:"transparent", boxShadow:"none"
              }}>
                  
                <div className="subName" style={{textAlign:"left",fontSize:"24px"}}>
                <img src={One} height="62px" alt="One" />
                <p style={{fontFamily: "Pretendard_medium", lineHeight:"32px",marginBottom:"15px"}}>업무에 집중할 수 있는<br />
                    최상의 환경을 제공합니다.</p>
                </div>
                <div className="card-content" style={{height:"13vh",fontSize: "16px",padding:0}}>
                  {'업무관련 도서 지원'}<br />
                  {'최신 사양의 업무 장비 제공'}<br />
                  {'맛있고 푸짐한 점심 식사 지원'}<br />
                </div>
            </div>
            </div>

            <div className="col s12 m4" style={{maxWidth:"100%",height:"auto" }}>
              <div className="card" style={{
                textAlign: "left",
                fontFamily: "Pretendard_medium",
                fontSize: "26px", 
                width:"303px",height:"288px",backgroundColor:"transparent", boxShadow:"none"
              }}>
                  
                <div className="subName" style={{textAlign:"left",fontSize:"24px", }}>
                <img src={Two} height="62px" alt="Two" />
                <p style={{fontFamily: "Pretendard_medium", lineHeight:"32px",marginBottom:"15px"}}> 자유롭지만<br />
                효율적으로 일합니다.</p>
                </div>
                <div className="card-content" style={{height:"13vh",fontSize: "16px",padding:0}}>
                {'8-11시 시차 출퇴근제'}<br />
                  {'수평적인 조직문화(님 호칭 사용)'}<br />
                  {'눈치보지 않는 연차, 반차 사용'}<br />
                </div>
            </div>
            </div>
            
            <div className="col s12 m4" style={{maxWidth:"100%",height:"auto"}}>
              <div className="card" style={{
                textAlign: "left", 
                fontSize: "26px", 
                width:"360px",height:"288px",backgroundColor:"transparent", boxShadow:"none"
              }}>
                  
                  <div className="subName" style={{textAlign:"left",fontSize:"24px"}}>
                  <img src={Three} height="62px" alt="Three" />
                <p style={{fontFamily: "Pretendard_medium", lineHeight:"32px",marginBottom:"15px"}}>소셜벤처,<br />
                더 나은 세상을 추구합니다.</p>
                <div className="card-content" style={{height:"12vh",fontSize: "16px",padding:0, }}>
                {'소셜임팩트 얼라이언스 참여'}<br />
                  {'마이스터고 학생 대상 현장실습 제공'}<br />
                  {'여성 특성화고 개발직군 대상 인턴기회 제공'}<br />
                </div>
            </div>
            </div>

            </div>
          </div>
            </div>
      </section> */}

      <section id="adventure" className="section section-popular scrollspy" style={{
        // backgroundColor: "#fff",
         maxWidth: "1190px",
        //  height: "auto",
        //  width: "100%",
        margin: "0 auto",
        paddingBottom: "30vh", clear: "both"
      }}>

        {/* maxWidth:"70%" */}
        <div className="container" style={{
          textAlign: "-webkit-center",
          display: "flex", justifyContent: "space-between", width: "auto"
        }}>

          <div id="Career_content_table" className="row profiles" style={{ width: '100%' }}>

            <h4 id="Career_sub_title" style={{
              justifyContent: "start",
              //  display:"flex",
              fontFamily: "Pretendard_semibold", paddingBottom: "95px",
              fontSize: "40px", lineHeight: "45px", paddingTop: "100px", textAlign: "left"
              //  marginLeft:"-67.5vh"
            }}>식스티헤르츠는 이렇게 일합니다.</h4>
            {/* <div className="test_flex_direction"> */}

            <div className="col s4 m4" style={{ padding: 0 }} >
              <div id="card_card" style={{
                textAlign: "left",
                fontFamily: "Pretendard_medium",
                fontSize: "25px",
                backgroundColor: "transparent", boxShadow: "none"
              }}>
                <img id="Career_content_img" src={One} height="62px" alt="One" />
                <div id="line_test" className="subName" style={{
                  textAlign: "left", fontSize: "20px", 
                  fontFamily: "Pretendard_semibold", lineHeight: "32px", marginBottom: "15px", marginTop: "24px"
                }}>
                  집중할 수 있는 업무 환경
                </div>
                <p id="list_contet_test" style={{ height: "132px", fontFamily: "Pretendard_medium", fontSize: "20px", padding: 0, lineHeight: "32px", marginTop:"18px" }}>
                · 최신 사양 노트북 직무별 맞춤 지원<br />
                · 식사비와 무제한 간식 제공<br />
                · 업무 관련 도서 상시 신청 가능<br />
                * 병역지정업체<br />
                * 청년재직자 내일채움공제 지원 
                </p>
              </div>
            </div>


            <div id="Career_width_test" className="col s4 m4" style={{ padding: 0 }}>
              <div id="card_card_2" style={{
                textAlign: "left",
                fontFamily: "Pretendard_medium",
                fontSize: "25px",
                backgroundColor: "transparent", boxShadow: "none"
              }}>
                <img id="Career_content_img" src={Two} height="62px" alt="Two" />
                <div id="line_test" className="subName" style={{
                  textAlign: "left", fontSize: "20px", 
                  fontFamily: "Pretendard_semibold", lineHeight: "32px", marginBottom: "15px", marginTop: "24px"
                }}>
                  유연한 근무시간
                </div>
                <p id="list_contet_test" style={{ height: "132px", fontFamily: "Pretendard_medium", fontSize: "20px", padding: 0, lineHeight: "32px", marginTop:"18px" }}>
                · 8-11시 시차 출퇴근제<br />
                · 눈치보지 않는 연차/반차/반반차사용<br />
                · 생일 축하 휴가(생일자 4시간 근무)<br />
                · 동서남북 오피스<br />
                (명동, 역삼, 성수, 마곡)
                </p>
              </div>
            </div>

            <div className="col s4 m4" style={{ padding: 0 }}>
              <div className="card" style={{
                textAlign: "left",
                fontFamily: "Pretendard_medium",
                fontSize: "25px",
                backgroundColor: "transparent", boxShadow: "none", margin: 0
              }}>
                <img id="Career_content_img" src={Three} height="62px" alt="Three" />
                <div id="line_test" className="subName" style={{
                  textAlign: "left", fontSize: "20px", 
                  fontFamily: "Pretendard_semibold", lineHeight: "32px", marginBottom: "15px", marginTop: "24px"
                }}>
                  수평적인 소통문화
                </div>
                <p id="list_contet_test" style={{ height: "132px", fontFamily: "Pretendard_medium", fontSize: "20px", padding: 0, lineHeight: "32px", marginTop:"18px" }}>
                · 한달 한번 전직원 올핸즈 미팅<br />
                · 직급 상관없이 모든 팀원 '님' 호칭 사용<br />
                · 워크툴 이용한 활발한 업무 정보 공유<br />
                (슬랙·노션·플렉스·먼데이닷컴)
                </p>
              </div>
            </div>


          </div>


          


        </div>
        <div id="Carrer_bar_2" style={{
          display: 'flex',
          justifyContent: 'start',
          backgroundColor: "#DADADA",
          height: "1px", width: "100%"
        }}>
          <div id="Career_bar" style={{ clear: "both" }}> <br className="yes" /></div>
        </div>
        {/* </div> */}
      </section >
      </Box>
      <Carcon />
      



    </React.Fragment>
  );
};

export default About;
