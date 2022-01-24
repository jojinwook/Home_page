// import * as React from 'react';
import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
// import '../../node_modules/materialize-css/dist/css/materialize.min.css'
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import lg from './image/Frame 140.png'
// import icon from '../../images/Vector.png'
// import icon from '../../images/arrow_forward.svg'
import icon from '../../images/gray_arrow.svg'
import { Link } from 'react-router-dom'
// import $ from "jquery";

// jQuery(function ($) {
//   $.fn.hScroll = function (amount) {
//       amount = amount || 120;
//       $(this).bind("DOMMouseScroll mousewheel", function (event) {
//           var oEvent = event.originalEvent, 
//               direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta, 
//               position = $(this).scrollLeft();
//           position += direction > 0 ? -amount : amount;
//           $(this).scrollLeft(position);
//           event.preventDefault();
//       })
//   };
// });

// $(document).ready(function() {
//   $('#adventure > div.container').hScroll(40); // You can pass (optionally) scrolling amount
// });



// function Component({ Children}) {
class Explore extends Component {
  render() {

    return (

      //   <section id="explore" className="section section-icons grey lighten-4 center">
      //     <div className="container">
      //       <div className="row">
      //       <h4 className="center">Test</h4>
      //         <div className="col s6 m3" style={{width:"33%"}}>
      //           <div className="card-panel">
      //             <h4>test1</h4>
      //             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
      //           </div>
      //         </div>
      //         <div className="col s6 m3" style={{width:"33%"}}>
      //           <div className="card-panel">
      //             <h4>test2</h4>
      //             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
      //           </div>
      //         </div>
      //         <div className="col s6 m3" style={{width:"33%"}}>
      //           <div className="card-panel">
      //             <h4>test3</h4>
      //             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
      //           </div>
      //         </div>

      //             </div>

      //             <div className="row">

      //         <div className="col s6 m3" style={{width:"33%"}}>
      //           <div className="card-panel">
      //             <h4>test1</h4>
      //             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
      //           </div>
      //         </div>
      //         <div className="col s6 m3" style={{width:"33%"}}>
      //           <div className="card-panel">
      //             <h4>test2</h4>
      //             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
      //           </div>
      //         </div>
      //         <div className="col s6 m3" style={{width:"33%"}}>
      //           <div className="card-panel">
      //             <h4>test3</h4>
      //             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
      //           </div>
      //         </div>

      //             </div>

      //             <div className="row">

      //         <div className="col s6 m3" style={{width:"33%"}}>
      //           <div className="card-panel">
      //             <h4>test1</h4>
      //             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
      //           </div>
      //         </div>
      //         <div className="col s6 m3" style={{width:"33%"}}>
      //           <div className="card-panel">
      //             <h4>test2</h4>
      //             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
      //           </div>
      //         </div>
      //         <div className="col s6 m3" style={{width:"33%"}}>
      //           <div className="card-panel">
      //             <h4>test3</h4>
      //             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
      //           </div>
      //         </div>

      //             </div>

      //     </div>
      //     </section>


      <section id="adventure" className="section section-popular scrollspy" style={{
        backgroundColor: "#F5F8FA", maxWidth: "100%",
        marginTop: "5vh", height: "auto"
      }}>

        {/* <div className="container" style={{marginTop:"10vw"}}>
        <h4 style={{fontFamily:"SpoqaHanSans", paddingBottom:"4vw",fontSize:"40px", lineHeight:"45px"}}> 언론 속의 식스티헤르츠 </h4>
          <div className="row" style={{textAlign:"-webkit-center", justifyContent:"space-between",}}>
            <div className="col s12 m4" style={{ marginRight: "-11vh",marginLeft: "11vh" ,}}>
              <div className="card" style={{
                borderBottom: "2px solid #E0E0E0",
                textAlign: "left", margin:0, justifyContent:"space-between",
                fontFamily: "SpoqaHanSans_OTF",
                fontSize: "25px", 
                width:"250px",backgroundColor:"transparent", boxShadow:"none"
              }}>
                <div className="subName" style={{textAlign:"left",color:"#666",fontSize:"15px"}}>
                  이투뉴스<img style={{marginLeft:10}} height="13px" src={icon} alt="icon" />
                </div>
                <div className="card-content" style={{height:"10vh",
                display:"table-cell", verticalAlign:"middle",
                marginTop:"15px",fontSize: "18px",padding:0}}>
                  <p style={{height:"81px"}}>식스티헤르츠, 임팩트투자사·<br />
                   대기업 펀드 동시 투자유치 
                  </p>
                </div>
            </div>
            <div className="card" style={{
             borderBottom: "2px solid #E0E0E0",
                textAlign: "left", 
                fontFamily: "SpoqaHanSans_OTF",
                fontSize: "25px", marginTop:"3vh",
                width:"255px",backgroundColor:"transparent", boxShadow:"none"
              }}>
                <div className="subName" style={{textAlign:"left",color:"#666",fontSize:"15px"}}>
                머니투데이<img style={{marginLeft:10}} height="13px"  src={icon} alt="icon" />
                </div>
                <div className="card-content" style={{height:"10vh",
                display:"table-cell", verticalAlign:"middle",
                fontSize:"18px", marginTop:"15px",padding:0}}>
                  <p style={{height:"81px"}}>'태양광 기여도' 논쟁 해결 AI<br />
                  등장.. '식스티헤르츠' 개발 
                  </p>
                </div>
              </div>
              <div className="card" style={{
              borderBottom: "2px solid #E0E0E0",
                textAlign: "left", 
                fontFamily: "SpoqaHanSans_OTF",
                fontSize: "25px", marginTop:"3vh",
                width:"255px",backgroundColor:"transparent", boxShadow:"none"
              }}>
                <div className="subName" style={{textAlign:"left",color:"#666",fontSize:"15px"}}>
                KOEF한국청년기업가정신재단 <img style={{marginLeft:10}} height="13px" src={icon} alt="icon" />
                </div>
                <div className="card-content" style={{height:"10vh",
                display:"table-cell", verticalAlign:"middle",
                fontSize:"18px",marginTop:"15px",padding:0}}>
                  <p style={{height:"81px"}}>재생에너지 가상발전소VPP_<br />
                  식스티헤르츠 
                  </p>
                </div>
            </div>
            </div>
            <div className="col s12 m4">
              <div className="card" style={{
               borderBottom: "2px solid #E0E0E0", margin:0,
                textAlign: "left", 
                fontFamily: "SpoqaHanSans_OTF",
                fontSize: "25px", 
                width:"255px",backgroundColor:"transparent", boxShadow:"none"
              }}> 
                <div className="subName" style={{textAlign:"left",color:"#666",fontSize:"15px"}}>
                    AI타임스<img style={{marginLeft:10}} height="13px" src={icon} alt="icon" />
                </div>
                <div className="card-content"  style={{height:"10vh",
                display:"table-cell", verticalAlign:"middle",
                fontSize:"18px", marginTop:"15px",padding:0}}>
                  <p style={{height:"81px"}}>발전량 예측부터 태양 추적까지…<br />
                   ‘AI’ 날개 다는 태양광 발전
                  </p>
                </div>
                </div>
              <div className="card" style={{
            borderBottom: "2px solid #E0E0E0",
                textAlign: "left", 
                fontFamily: "SpoqaHanSans_OTF",
                fontSize: "25px", marginTop:"3vh",
                width:"255px",backgroundColor:"transparent", boxShadow:"none"
              }}>
                <div className="subName" style={{textAlign:"left",color:"#666",fontSize:"15px"}}>
                    스마트시티투데이<img style={{marginLeft:10}} height="13px" src={icon} alt="icon" />
                </div>
                <div className="card-content"  style={{height:"10vh",
                display:"table-cell", verticalAlign:"middle",
                fontSize:"18px", marginTop:"15px",padding:0}}>
                  <p style={{height:"81px"}}>AI기반 태양광 발전량 예측<br />
                  서비스 이틀만에 개발, 공개
                  </p>
                </div>
            </div>
            <div className="card" style={{
              borderBottom: "2px solid #E0E0E0",
                textAlign: "left", 
                fontFamily: "SpoqaHanSans_OTF",
                fontSize: "25px", marginTop:"3vh",
                width:"255px",backgroundColor:"transparent", boxShadow:"none"
              }}>
                <div className="subName" style={{textAlign:"left",color:"#666",fontSize:"15px"}}>
                    에너지데일리<img style={{marginLeft:10}} height="13px" src={icon} alt="icon" />
                </div>
                <div className="card-content"  style={{height:"10vh",
                display:"table-cell", verticalAlign:"middle",
                fontSize:"18px", marginTop:"15px",padding:0}}>
                  <p style={{height:"81px"}}>"식스티헤르츠,<br />
                  가상발전소 사업 확대한다"
                  </p>
                </div>
              </div>
            </div>
            <div className="col s12 m4" style={{marginLeft: "-11vh"}}>
              <div className="card" style={{
              borderBottom: "2px solid #E0E0E0", margin:0,
                textAlign: "left", 
                fontFamily: "SpoqaHanSans_OTF",
                fontSize: "25px", 
                width:"255px",backgroundColor:"transparent", boxShadow:"none"
              }}>
                <div className="subName" style={{textAlign:"left",color:"#666",fontSize:"15px"}}>
                    스타트업투데이 <img style={{marginLeft:10}} height="13px" src={icon} alt="icon" />
                </div>
                <div className="card-content"  style={{height:"10vh",
                display:"table-cell", verticalAlign:"middle",
                fontSize:"18px", marginTop:"15px",padding:0}} >
                  <p style={{height:"81px"}}>식스티헤르츠 김종규 대표<br />
                  "가상발전소에 전기차 활용 서비스<br />
                  추가 계획 中"
                  </p>
                </div>
                </div>
                <div className="card" style={{
               borderBottom: "2px solid #E0E0E0",
                textAlign: "left", 
                fontFamily: "SpoqaHanSans_OTF",
                fontSize: "25px", marginTop:"3vh",
                width:"255px",backgroundColor:"transparent", boxShadow:"none"
              }}>
                <div className="subName" style={{textAlign:"left",color:"#666",fontSize:"15px"}}>
                    벤처스퀘어<img style={{marginLeft:10}} height="13px" src={icon} alt="icon" />
                </div>
                <div className="card-content"  style={{height:"10vh",
                display:"table-cell", verticalAlign:"middle",
                fontSize:"18px", marginTop:"15px",padding:0}} >
                  <p style={{height:"81px"}}>SKT·벤처스퀘어 등 참여 'ESG<br />
                  코리아 2021' 14개 기업 선정
                  </p>
                </div>
               </div>
                <div className="card" style={{
             borderBottom: "2px solid #E0E0E0",
                textAlign: "left", 
                fontFamily: "SpoqaHanSans_OTF",
                fontSize: "25px", marginTop:"3vh",
                width:"255px",backgroundColor:"transparent", boxShadow:"none"
              }}>
                <div className="subName" style={{textAlign:"left",color:"#666",fontSize:"15px"}}>
                    인사이트코리아<img style={{marginLeft:10}} height="13px" src={icon} alt="icon" />
                </div>
                <div className="card-content"  style={{height:"10vh",
                display:"table-cell", verticalAlign:"middle",
                fontSize:"18px", marginTop:"15px",padding:0}} >
                  <p style={{height:"81px"}}>김종규 식스티헤르츠 대표<br />
                  "풍력 발전 솔루션 내놓는<br />
                  소셜벤처 되겠다"
                  </p>
                </div>
               </div>
            </div>
          </div>
          
            </div> */}



        <h4 className="Main_box" style={{ fontFamily: "Pretendard_semibold", paddingBottom: "3vw", fontSize: "40px", lineHeight: "45px", paddingTop: "15vh" }}>언론 속의 식스티헤르츠</h4>
        <div id="home_contents" className="container" style={{
          textAlign: "-webkit-center", maxWidth: "1190px",
          width: "100%"
        }}>
          <div id="float" className="row profiles" style={{ width: "80%" }}>
            <div id="box" className="col s4 m4" style={{
              display: "flex", flexDirection: "column",
              width: "33%",
              margin: 0
            }}>
              <div onClick={() => window.open("https://futurechosun.com/archives/56258 ", "_blank")} id="item" className="card"
              //  <div onClick={() => window.open("https://n.news.naver.com/article/016/0001936837", "_blank")} id="item" className="card" 
                style={{
                  cursor: "pointer",
                  borderBottom: "1px solid #252525",
                  textAlign: "left", margin: 0,
                  fontFamily: "Pretendard_medium",
                  fontSize: "25px",
                  backgroundColor: "transparent", boxShadow: "none",
                  borderRadius: "0px"
                }}>
                <div id="news_test" className="subName" style={{ textAlign: "left", color: "#666", fontSize: "15px" }}>
                  조선일보 더나은미래<img style={{ marginLeft: 5, paddingTop: "7px" }} height="17px" src={icon} alt="icon" />
                  {/* 헤럴드 */}
                </div>
                <div className="card-content" style={{

                  display: "table-cell", verticalAlign: "middle",
                  marginTop: "15px", fontSize: "18px", padding: "5px 0 0 0"
                }}>
                  {/* <p id="Home_contents_60" style={{ height: "130px", padding: "10px 0 0 0",color:"#252525"}}>재생에너지 너무 많아 <br className="yes" /><br className='test_yes'/>
                  발전소<br className="no" /> 멈추는 촌극…<br className="yes" /><br className='test_yes'/>"손해보는 짓<br className="no" /> 멈춰야죠" <br className='test_yes'/><br className="yes" />[지구, 뭐래?] */}
                <p id="Home_contents_60" style={{ height: "130px", padding: "10px 0 0 0",color:"#252525"}}>"재생에너지<br className='test_yes'/> 효율 높이는 <br className='test_yes'/><br className="yes" />
                <br className="no" />'가상발전소' ...<br className="yes" /><br className='test_yes'/>선택 아닌 필수"<br className="no" /> <br className='test_yes'/><br className="yes" />

                  </p>
                </div>
              </div>
            </div>


            <div id="box" className="col s4 m4" style={{
              display: "flex", flexDirection: "column",
              width: "33%",
              margin: 0
            }}>
              {/* <div onClick={() => window.open("http://weekly.khan.co.kr/khnm.html?mode=view&artid=202201071527151&code=114#csidxf1036dccb5a75e0b1b5f894a5e5500c", "_blank")} id="item" className="card" style={{
                borderBottom: "1px solid #252525",
                textAlign: "left", margin: 0,
                fontFamily: "Pretendard_medium",
                fontSize: "25px",
                backgroundColor: "transparent", boxShadow: "none",
                borderRadius: "0px"
              }}>
                <div className="subName" style={{ textAlign: "left", color: "#666", fontSize: "15px" }}>
                  주간경향<img style={{ marginLeft: 5, paddingTop: "7px"}} height="17px" src={icon} alt="icon" />
                </div>
                <div className="card-content" style={{
                  display: "table-cell", verticalAlign: "middle",
                  fontSize: "18px", marginTop: "15px", padding: "5px 0 0 0"
                }}>
                  <p id="Home_contents_60" style={{ height: "130px", padding: "10px 0 0 0",color:"#252525" }} >김종규 식스티헤르츠<br className='test_yes'/> <br className="yes" />대표<br className="no" /> 인터뷰<br className="yes" /><br className='test_yes'/> "가상발전소에서<br className="yes" /> 흩어진 <br className='test_yes'/><br className="no" />
                    전력 모아 관리"
                  </p>
                </div>
              </div> */}
                            <div onClick={() => window.open("https://www.joongang.co.kr/article/25004739", "_blank")} id="item" className="card" style={{
                borderBottom: "1px solid #252525",
                textAlign: "left", margin: 0,
                fontFamily: "Pretendard_medium",
                fontSize: "25px",
                backgroundColor: "transparent", boxShadow: "none",
                borderRadius: "0px"
              }}>
                <div className="subName" style={{ textAlign: "left", color: "#666", fontSize: "15px" }}>
                  중앙일보<img style={{ marginLeft: 5, paddingTop: "7px" }} height="17px" src={icon} alt="icon" />
                </div>
                <div className="card-content" style={{
                  display: "table-cell", verticalAlign: "middle",
                  fontSize: "18px", marginTop: "15px", padding: "5px 0 0 0"
                }}>
                  <p id="Home_contents_60" style={{ height: "130px", padding: "10px 0 0 0",color:"#252525" }}>SKT, 현대차도 주목...<br />
                    {/* 예측<br className="no" /> */}
                    '재생에너지 가상발전소'<br className='test_yes'/> <br className="yes" />
                    만든<br className="no" /> 이 사람

                  </p>
                </div>
              </div>
            </div>


            <div id="box" className="col s4 m4" style={{
              display: "flex", flexDirection: "column",
              width: "33%",
              margin: 0
            }}>
              {/* <div onClick={() => window.open("https://magazine.hankyung.com/job-joy/article/202112226991d", "_blank")} id="item" className="card" style={{
                borderBottom: "1px solid #252525",
                textAlign: "left", margin: 0,
                fontFamily: "Pretendard_medium",
                fontSize: "25px",
                backgroundColor: "transparent", boxShadow: "none",
                borderRadius: "0px"
              }}>
                <div className="subName" style={{ textAlign: "left", color: "#666", fontSize: "15px" }}>
                한경잡앤조이<img style={{ marginLeft: 5, paddingTop: "7px" }} height="17px" src={icon} alt="icon" />
                </div>
                <div className="card-content" style={{
                  display: "table-cell", verticalAlign: "middle",
                  fontSize: "18px", marginTop: "15px", padding: "5px 0 0 0"
                }} >
                  <p id="Home_contents_60" style={{ height: "130px", padding: "10px 0 0 0",color:"#252525" }}>[소셜벤처 경연대회 <br className="yes" />수상팀] <br className='test_yes'/><br className="no" />
                     재생에너지 <br className="yes" />발전량 하루 전<br className='test_yes'/><br className="no" /> 예측하는<br className="yes" /> 기술 개발한<br className="yes" /><br className='test_yes'/> '식스티헤르츠'
                  </p>
                </div>
              </div> */}
                            <div onClick={() => window.open("https://www.yna.co.kr/view/AKR20211119150100017?section=industry/technology-science", "_blank")} id="item" className="card" style={{
                borderBottom: "1px solid #252525",
                textAlign: "left", margin: 0,
                fontFamily: "Pretendard_medium",
                fontSize: "25px",
                backgroundColor: "transparent", boxShadow: "none",
                borderRadius: "0px"
              }}>
                <div className="subName" style={{ textAlign: "left", color: "#666", fontSize: "15px" }}>
                  연합뉴스<img style={{ marginLeft: 5, paddingTop: "7px" }} height="17px" src={icon} alt="icon" />
                </div>
                <div className="card-content" style={{
                  display: "table-cell", verticalAlign: "middle",
                  fontSize: "18px", marginTop: "15px", padding: "5px 0 0 0"
                }}>
                  <p id="Home_contents_60" style={{ height: "130px", padding: "10px 0 0 0",color:"#252525" }}>"재생에너지 시대, <br className='test_yes'/><br className="yes" />
                  수십만개<br className="no" /> '작은 발전소' <br className="yes" /><br className='test_yes'/>발전량 
                  예측이 필수"
                  </p>
                </div>
              </div>
            </div>
          </div>



          <div id="float_1" className="row profiles" style={{ maxWidth: "1190px", width: "80%" }}>
            <div id="box" className="col s4 m4" style={{
              display: "flex", flexDirection: "column",
              width: "33%",
              margin: 0
            }}>
              {/* <div onClick={() => window.open("https://www.yna.co.kr/view/AKR20211119150100017?section=industry/technology-science", "_blank")} id="item" className="card" style={{
                borderBottom: "1px solid #252525",
                textAlign: "left", margin: 0,
                fontFamily: "Pretendard_medium",
                fontSize: "25px",
                backgroundColor: "transparent", boxShadow: "none",
                borderRadius: "0px"
              }}>
                <div className="subName" style={{ textAlign: "left", color: "#666", fontSize: "15px" }}>
                  연합뉴스<img style={{ marginLeft: 5, paddingTop: "7px" }} height="17px" src={icon} alt="icon" />
                </div>
                <div className="card-content" style={{
                  display: "table-cell", verticalAlign: "middle",
                  fontSize: "18px", marginTop: "15px", padding: "5px 0 0 0"
                }}>
                  <p id="Home_contents_60" style={{ height: "130px", padding: "10px 0 0 0",color:"#252525" }}>"재생에너지 시대, <br className='test_yes'/><br className="yes" />
                  수십만개<br className="no" /> '작은 발전소' <br className="yes" /><br className='test_yes'/>발전량 
                  예측이 필수"
                  </p>
                </div>
              </div> */}
              <div onClick={() => window.open("https://news.mt.co.kr/mtview.php?no=2021080615324868175", "_blank")} id="item" className="card" style={{
                borderBottom: "1px solid #252525",
                textAlign: "left", margin: 0,
                fontFamily: "Pretendard_medium",
                fontSize: "25px",
                backgroundColor: "transparent", boxShadow: "none",
                borderRadius: "0px"
              }}>
                <div className="subName" style={{ textAlign: "left", color: "#666", fontSize: "15px" }}>
                  머니투데이<img style={{ marginLeft: 5, paddingTop: "7px" }} height="17px" src={icon} alt="icon" />
                </div>
                <div className="card-content" style={{
                  display: "table-cell", verticalAlign: "middle",
                  fontSize: "18px", marginTop: "15px", padding: "5px 0 0 0"
                }}>
                  <p id="Home_contents_60" style={{ height: "130px", padding: "10px 0 0 0",color:"#252525" }}>'태양광 기여도'<br className="yes" /><br className='test_yes'/> 논쟁 해결<br className="no" />
                    {/* VPP_<br className="no" /> */}
                     AI 등장..'<br className="yes" /><br className='test_yes'/>식스티헤르츠' 개발
                  </p>
                </div>
              </div>
            </div>

            <div id="box" className="col s4 m4" style={{
              display: "flex", flexDirection: "column",
              width: "33%",
              margin: 0
            }}>
              {/* <div onClick={() => window.open("https://www.joongang.co.kr/article/25004739", "_blank")} id="item" className="card" style={{
                borderBottom: "1px solid #252525",
                textAlign: "left", margin: 0,
                fontFamily: "Pretendard_medium",
                fontSize: "25px",
                backgroundColor: "transparent", boxShadow: "none",
                borderRadius: "0px"
              }}>
                <div className="subName" style={{ textAlign: "left", color: "#666", fontSize: "15px" }}>
                  중앙일보<img style={{ marginLeft: 5, paddingTop: "7px" }} height="17px" src={icon} alt="icon" />
                </div>
                <div className="card-content" style={{
                  display: "table-cell", verticalAlign: "middle",
                  fontSize: "18px", marginTop: "15px", padding: "5px 0 0 0"
                }}>
                  <p id="Home_contents_60" style={{ height: "130px", padding: "10px 0 0 0",color:"#252525" }}>SKT, 현대차도 주목...<br />
                    '재생에너지 가상발전소'<br className='test_yes'/> <br className="yes" />
                    만든<br className="no" /> 이 사람

                  </p>
                </div>
              </div> */}
              <div onClick={() => window.open("http://www.electimes.com/article.php?aid=1629776495221745121", "_blank")} id="item" className="card" style={{
                borderBottom: "1px solid #252525",
                textAlign: "left", margin: 0,
                fontFamily: "Pretendard_medium",
                fontSize: "25px",
                backgroundColor: "transparent", boxShadow: "none",
                borderRadius: "0px"
              }}>
                <div className="subName" style={{ textAlign: "left", color: "#666", fontSize: "15px" }}>
                  전기신문<img style={{ marginLeft: 5, paddingTop: "7px" }} height="17px" src={icon} alt="icon" />
                </div>
                <div className="card-content" style={{
                  display: "table-cell", verticalAlign: "middle",
                  fontSize: "18px", marginTop: "15px", padding: "5px 0 0 0"
                }} >
                  <p id="Home_contents_60" style={{ height: "130px", padding: "10px 0 0 0",color:"#252525" }}>식스티헤르츠, <br />
                  임팩트투자사와<br className="yes" /><br className='test_yes'/> 대기업펀드로부터 <br className="yes" /><br className="no" />
                  투자유치

                    <br className="yes" />
                  </p>
                </div>
              </div>
            </div>

            <div id="box" className="col s4 m4" style={{
              display: "flex", flexDirection: "column",
              width: "33%",
              margin: 0
            }}>
              <div onClick={() => window.open("https://www.e2news.com/news/articleView.html?idxno=235448", "_blank")} id="item" className="card" style={{
                borderBottom: "1px solid #252525",
                textAlign: "left", margin: 0,
                fontFamily: "Pretendard_medium",
                fontSize: "25px",
                backgroundColor: "transparent", boxShadow: "none",
                borderRadius: "0px"
              }}>
                <div className="subName" style={{ textAlign: "left", color: "#666", fontSize: "15px" }}>
                  이투뉴스<img style={{ marginLeft: 5, paddingTop: "7px" }} height="17px" src={icon} alt="icon" />
                </div>
                <div className="card-content" style={{
                  display: "table-cell", verticalAlign: "middle",
                  fontSize: "18px", marginTop: "15px", padding: "5px 0 0 0"
                }} >
                  <p id="Home_contents_60" style={{ height: "130px", padding: "10px 0 0 0",color:"#252525" }}>식스티헤르츠, 임팩트투자사·<br />
                   대기업 펀드 동시 투자유치 
                    <br className="yes" />
                  </p>
                </div>
              </div>
            </div>
          </div>


          {/* <div id="float_2" className="row profiles" style={{ maxWidth: "1190px", width: "80%" }}>
            <div id="box" className="col s4 m4" style={{
              display: "flex", flexDirection: "column",
              width: "33%",
              margin: 0
            }}>
              <div onClick={() => window.open("https://news.mt.co.kr/mtview.php?no=2021080615324868175", "_blank")} id="item" className="card" style={{
                borderBottom: "1px solid #252525",
                textAlign: "left", margin: 0,
                fontFamily: "Pretendard_medium",
                fontSize: "25px",
                backgroundColor: "transparent", boxShadow: "none",
                borderRadius: "0px"
              }}>
                <div className="subName" style={{ textAlign: "left", color: "#666", fontSize: "15px" }}>
                  머니투데이<img style={{ marginLeft: 5, paddingTop: "7px" }} height="17px" src={icon} alt="icon" />
                </div>
                <div className="card-content" style={{
                  display: "table-cell", verticalAlign: "middle",
                  fontSize: "18px", marginTop: "15px", padding: "5px 0 0 0"
                }}>
                  <p id="Home_contents_60" style={{ height: "130px", padding: "10px 0 0 0",color:"#252525" }}>'태양광 기여도'<br className="yes" /><br className='test_yes'/> 논쟁 해결<br className="no" />
                     AI 등장..'<br className="yes" /><br className='test_yes'/>식스티헤르츠' 개발
                  </p>
                </div>
              </div>
            </div>

            <div id="box" className="col s4 m4" style={{
              display: "flex", flexDirection: "column",
              width: "33%",
              margin: 0
            }}>
              <div onClick={() => window.open("http://www.energydaily.co.kr/news/articleView.html?idxno=120627", "_blank")} id="item" className="card" style={{
                borderBottom: "1px solid #252525",
                textAlign: "left", margin: 0,
                fontFamily: "Pretendard_medium",
                fontSize: "25px",
                backgroundColor: "transparent", boxShadow: "none",
                borderRadius: "0px"
              }}>
                <div className="subName" style={{ textAlign: "left", color: "#666", fontSize: "15px" }}>
                에너지데일리<img style={{ marginLeft: 5, paddingTop: "7px"}} height="17px" src={icon} alt="icon" />
                </div>
                <div id="width_test" className="card-content" style={{
                  display: "table-cell", verticalAlign: "middle",
                  fontSize: "18px", marginTop: "15px", padding: "5px 0 0 0"
                }}>
                  <p id="Home_contents_60" style={{ height: "130px", padding: "10px 0 0 0",color:"#252525" }}>"식스티헤르츠,<br className='test_yes'/><br className="yes" />
                  계량기 없이<br className="no" /> AI기술로<br className='test_yes'/><br className="yes" /> 발전량 예측한다"
                  </p>
                </div>
              </div>
            </div>

            <div id="box" className="col s4 m4" style={{
              display: "flex", flexDirection: "column",
              width: "33%",
              margin: 0
            }}>
              <div onClick={() => window.open("https://www.sedaily.com/NewsVIew/22NK1C195W", "_blank")} id="item" className="card" style={{
                borderBottom: "1px solid #252525",
                textAlign: "left",
                fontFamily: "Pretendard_medium",
                fontSize: "25px", margin: 0,
                backgroundColor: "transparent", boxShadow: "none",
                borderRadius: "0px"
              }}>
                <div className="subName" style={{ textAlign: "left", color: "#666", fontSize: "15px" }}>
                서울경제<img style={{ marginLeft: 5, paddingTop: "7px" }} height="17px" src={icon} alt="icon" />
                </div>
                <div className="card-content" style={{
                  display: "table-cell", verticalAlign: "middle",
                  fontSize: "18px", marginTop: "15px", padding: "5px 0 0 0"
                }} >
                  <p id="Home_contents_60" style={{ height: "130px", padding: "10px 0 0 0",color:"#252525" }}>굿네이버스 글로벌<br className="yes" /> 임팩트,<br className='test_yes'/><br className="yes" />
                    식스티헤르츠와<br className="yes" /> 개발도상국<br className='test_yes'/> 재생에너지<br className="no" /><br className="yes" /> 자원지도<br className='test_yes'/> 제작 나선다
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>






        <div style={{ width: "100%", height: "auto", backgroundColor: "#F5F8FA", marginTop: "60px" }}>
          {/* <Box className="the_button" direction="row" spacing={2} style={{marginTop:"-1000hv", height:"10hv"}}>
                 <Button variant="contained">더 알아보기effeefef</Button>
                </Box> */}
          <Link to={{ pathname: "https://steep-makemake-973.notion.site/6a122ef527444ce28102eb38797b9ee9" }} target="_blank">
            <div className="home_the_view" id="home_the_view" style={{
              border: "2px solid #252525",
              fontFamily: "Pretendard_semibold", borderRadius:"100px",
              backgroundColor: "none",
              color: "#252525", width: "170px",
              height: "70px", display: "table-cell", fontSize: '20px',
              verticalAlign: "middle", marginTop: "50px", marginBottom: "2vw"
            }}> 더보기</div>
          </Link>
        </div>
      </section>
    );
  }
}
// Component.prototype = {
//   Children: PropTypes.node.isRequired,

// }

export default Explore;




// class Explore extends Component {
//   render() {
//       return (
//       <section id="explore" className="section section-icons grey lighten-4 center" >
//         <div className="container" style={{display:"inline-block"}}>
//           <div style={{width:"20%", height:"20%"}}>   {/* 이게 한 row */}
//             <div>
//               <div style={{backgroundColor:"#fff"}} >
//                 <h4 style={{backgroundColor:"#fff"}}>Hotels</h4>
//                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
//               </div>
//             </div>
//             <div className="col s6 m3">
//               <div style={{backgroundColor:"#fff"}}>
//                 <h4>Restaurant</h4>
//                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
//               </div>
//             </div>
//             <div className="col s7 m3">
//               <div style={{backgroundColor:"#fff"}}>
//                 <h4>Coffee</h4>
//                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
//               </div>
//             </div>
//             </div>

//             <div>   {/* 이게 한 row */}
//             <div className="col s6 m3">
//               <div style={{backgroundColor:"#fff"}} >
//                 <h4>Hotels</h4>
//                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
//               </div>
//             </div>
//             <div className="col s6 m3">
//               <div style={{backgroundColor:"#fff"}}>
//                 <h4>Restaurant</h4>
//                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
//               </div>
//             </div>
//             <div className="col s7 m3">
//               <div style={{backgroundColor:"#fff"}}>
//                 <h4>Coffee</h4>
//                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
//               </div>
//             </div>
//          </div>


//         <div className="row" style={{marginLeft:"45vh"}}>   {/* 이게 한 row */}
//             <div className="col s6 m3">
//               <div style={{backgroundColor:"#fff"}} >
//                 <h4>Hotels</h4>
//                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
//               </div>
//             </div>
//             <div className="col s6 m3">
//               <div style={{backgroundColor:"#fff"}}>
//                 <h4>Restaurant</h4>
//                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
//               </div>
//             </div>
//             <div className="col s7 m3">
//               <div style={{backgroundColor:"#fff"}}>
//                 <h4>Coffee</h4>
//                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
//               </div>
//             </div>
//          </div>

//         </div>
//       </section>
//     );
//   }
// }

// export default Explore;



// <div className="col s7 m3">
//              <div className="card-panel">
//                <h4>Coffee</h4>
//                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
//              </div>
//                    </div> 

// export default function Contents() {
//     return (
//         <Container maxWidth="sm"  sx={{height:500, width:"1000px"}}>
//             <Box style={{
//                         width: "334px",
//                 textAlign: "center"
//             }}>
//                 <text>이투뉴스</text><br />
//                 식스티헤르츠,임팩트투자사<br />대기업 펀드 동시 투자유치
//             </Box>
//             <Box style={{
//                     width: "334px",
//                     height: "166px",
//                     left: "401px",
//                     top: "2259px",
//                     textAlign: "center"}}>
//             식스티헤르츠,임팩트투자사<br />대기업 펀드 동시 투자유치
//             </Box>
//             <Box style={{
//                     width: "334px",
//                     height: "166px",
//                     left: "401px",
//                     top: "2259px",
//                     textAlign: "center"}}>
//             식스티헤르츠,임팩트투자사<br />대기업 펀드 동시 투자유치
//             </Box>

//         </Container>  
//     );
// }