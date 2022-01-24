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
import let_go from '../../images/arrow_forward.png'



class Explore extends Component {
  render() {
    return (
      <section id="adventure" className="section section-popular scrollspy" style={{
        maxWidth: "100%",
        backgroundColor: "#F5F8FA", height: "auto", paddingBottom: 0
      }}>
        <div id="about_container" className="container" style={{
          marginTop: "10vw", width: "100%",
          maxWidth: "87%", height: "auto", backgroundColor: "#fff", justifyContent: "space-between", display: "flex"
        }}>
          <div className="row" style={{ backgroundColor: "#fff", width: "75%", height: "auto", margin: "0 auto" }}>

            {/* <div className="col s12 m4">

              <div className="card" style={{
                textAlign: "left", 
                fontFamily: "Pretendard_medium",
                backgroundColor:"transparent", boxShadow:"none",
                width:"280px", height:"auto"
              }}>
                <div className="subName" style={{textAlign:"left", fontFamily:"Pretendard",
                color:"#000",lineHeight:"62px",fontSize:"32px"}}>
                MASTER PLAN
                </div>
                <div className="card-content" style={{height:"13vh",    //fontsize 15 lin high 25 margintop 14
                marginTop:"14px",fontSize: "20px",padding:0, paddingTop:"10px",
                lineHeight:"32px"}}>
                  <p>우리는 앞으로 10년간 다음과 같은 계획을 신속하게 실행하겠습니다. 
                  </p>
                </div>
            </div> */}
            <div className="col s12 m4" style={{
              display: "flex", flexDirection: "column"
            }}>
              <div id="master_colum" className="about_card_card_3" style={{
                textAlign: "left",
                fontFamily: "Pretendard_medium",
                fontSize: "25px",
                overflow: "hidden",
                height: "auto",marginRight: "25px",
                // width:"280px",

                backgroundColor: "transparent", boxShadow: "none",
              }}>
                <div id="Master_plan" className="subName" style={{
                  textAlign: "left", marginTop: "7vw",
                  color: "#252525", fontSize: "38px", lineHeight: "62px", fontFamily: 'Pretendard_semibold'
                }}>
                  MASTER <br className="padsize_br" />PLAN
                </div>
                <div id="about_master_contents" className="card-content" style={{
                  height: "205px",
                  borderBottom: "1px solid #fff",
                  marginBottom: "10px", 
                  padding: 0, fontSize: "18px", paddingTop: "1px", lineHeight: "26px"
                }}>
                  <p id="About_text_text_text"  style={{marginTop :"0px", fontFamily: 'Pretendard_medium'}}>기후위기 대응을 <br className="padsize_br" />위하여 2030<br />
                    년까지 하고자 하는 일
                  </p>
                </div>
              </div>

              <div id="one_width_out" className="card card3" style={{
                textAlign: "left",
                fontFamily: "Pretendard_medium",
                fontSize: "25px", height: "auto",
                overflow: "hidden", marginRight: "25px",
                // width:"280px",
                backgroundColor: "transparent", boxShadow: "none",
              }}>
                <div id="one_one" className="subName" style={{
                  textAlign: "left",
                  marginTop: "0",
                  color: "#252525", fontSize: "32px", lineHeight: "62px", fontFamily: 'Pretendard_light'
                }}>
                  3
                </div>
                <div id="about_master_contents" className="card-content" style={{
                  // height: "13vh",
                  borderTop: "1px solid #252525",
                  marginTop: "4px", padding: 0, fontSize: "25px", paddingTop: "13px", lineHeight: "32px", fontFamily: 'Pretendard_regular'
                }}>
                  <p id="About_text_text_text_text" >에너지 수요자와<br className="yes" /> 공급자를 <br className="no" />
                    직접 연결<br className="yes" />시키고 거래비용을 <br className="yes" /><br className="no" />
                    0에 수렴시킨다.
                  </p>
                </div>
              </div>

            </div>
            <div className="col s12 m4" style={{
              display: "flex", flexDirection: "column"
            }}>
              <div id="about_card_card" style={{
                textAlign: "left",
                fontFamily: "Pretendard_medium",
                fontSize: "25px",
                overflow: "hidden",
                height: "auto",
                // width:"280px",

                backgroundColor: "transparent", boxShadow: "none",
              }}>
                <div id="one_one" className="subName" style={{
                  textAlign: "left", marginTop: "7vw",
                  color: "#252525", fontSize: "32px", lineHeight: "62px", fontFamily: 'Pretendard_light'
                }}>
                  1
                </div>
                <div id="about_master_contents" className="card-content card_bottom" style={{
                  height: "205px",
                  borderTop: "1px solid #252525", marginBottom:"10px",
                  // marginTop: "14px", 
                  padding: 0, fontSize: "25px", paddingTop: "1px", lineHeight: "32px", fontFamily: 'Pretendard_regular'

                }}>
                  <p id="About_text_text_text_text" >재생에너지 발전소, <br className="yes" />전기차, <br className="no" />
                    스마트가전 등<br className="yes" /> 다양한 분산 전원을<br className="yes" /><br className="no" />
                    연결시킨다.
                    <br />
                    <br className='remove_br' />
                    <a href="/BUSINESS" style={{color:"#EC5B44"}}>햇빛바람지도<img id="color_row" style={{marginLeft:8,
                       height:"25px",
                       marginBottom:"-2px"}} src={let_go} alt='go' /></a>
                  </p>
                </div>
              </div>

              <div id="about_card_card_4" className="card" style={{
                textAlign: "left",
                fontFamily: "Pretendard_medium",
                fontSize: "25px",
                // width:"280px",
                overflow: "hidden",
                height: "auto",
                backgroundColor: "transparent", boxShadow: "none",
              }}>
                <div id="one_one" className="subName" style={{
                  textAlign: "left",
                  marginTop: "0",
                  color: "#252525", fontSize: "32px", lineHeight: "62px", fontFamily: 'Pretendard_light'
                }}>
                  4
                </div>
                <div id="about_master_contents" className="card-content" style={{
                  height: "auto",
                  marginTop: "4px", padding: 0, fontSize: "25px", lineHeight: "32px", paddingTop: "13px",
                  borderTop: "1px solid #252525", fontFamily: 'Pretendard_regular'
                }} >
                  <p id="About_text_text_text_text" >1-3을<br className="yes" /> 기반으로<br className="yes" /><br className="no" />
                    재생에너지를 빠르고<br />
                    안전하고 효율적으로<br />
                    확산시킨다.
                  </p>
                </div>
              </div>

              {/* <div className="subName" style={{textAlign:"left",color:"#000",fontSize:"43px",lineHeight:"62px",marginTop:"4vw"}}>
                    4
                </div>
                <div className="card-content"  style={{height:"13vh",
                borderTop: "1px solid #000",
                 marginTop:"15px",padding:0, fontSize:"26px", paddingTop:"10px",lineHeight:"38px"}}>
                  <p>재생에너지를 빠르고 안전하게 확산시킨다.
                  </p>
                </div> */}

            </div>
            <div className="col s12 m4" style={{
              display: "flex", flexDirection: "column"
            }}>

              <div id="about_card_card_2" style={{
                textAlign: "left",
                fontFamily: "Pretendard_medium",
                fontSize: "25px",
                paddingRight: 0, marginRight: 0,
                // width:"280px",
                overflow: "hidden",
                height: "auto",marginLeft: "25px",
                backgroundColor: "transparent", boxShadow: "none",
              }}>
                <div id="one_one" className="subName" style={{
                  textAlign: "left", color: "#252525", marginTop: "7vw",
                  fontSize: "32px", lineHeight: "62px", fontFamily: 'Pretendard_light'
                }}>
                  2
                </div>
                <div id="about_master_contents" className="card-content card_bottom" style={{
                  height: "205px",
                  borderTop: "1px solid #252525", marginBottom: '10px',
                  // marginTop: "14px",
                   padding: 0, fontSize: "25px", paddingTop: "1px", lineHeight: "32px", fontFamily: 'Pretendard_regular'
                }} >
                  <p id="About_text_text_text_text" > 연결된 자원들을 안전<br className="yes" />하고 <br className="no" />
                    효율적으로 관리할<br className="yes" /> 수 있게 한다. <br className="yes" /><br className="no" />{/*<br className="no" /> */}
                    <br />
                    <br className='remove_br' />
                    <a href="/BUSINESS#sun_lets_go" style={{color:"#EC5B44"}}>통합관제시스템<img id="color_row" style={{marginLeft:8,
                       height:"25px",
                       marginBottom:"-2px"}} src={let_go} alt='go' /></a>
                  </p>
                </div>
              </div>

              <div id="about_card_card_5" className="card" style={{
                textAlign: "left",
                fontFamily: "Pretendard_medium",
                fontSize: "25px",
                // width:"280px",
                overflow: "hidden",
                height: "auto",    marginLeft: "25px",
                backgroundColor: "transparent", boxShadow: "none",
              }}>
                <div id="one_one" className="subName" style={{
                  textAlign: "left",
                  marginTop: "0",
                  color: "#252525", fontSize: "32px", lineHeight: "62px", fontFamily: 'Pretendard_light'
                }}>
                  5
                </div>
                <div id="about_master_contents" className="card-content" style={{
                  height: "auto",
                  marginTop: "4px", padding: 0, fontSize: "25px", lineHeight: "32px", paddingTop: "13px",
                  borderTop: "1px solid #252525", fontFamily: 'Pretendard_regular'
                }} >
                  <p id="About_text_text_text_text" >1-4 를 해외에서<br className="yes" /> 반복한다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
  }
}

export default Explore;