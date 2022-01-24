import React, { Component } from 'react';
// import logos from '../images/logos.png'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import { Link } from 'react-router-dom'
import icon from '../../images/Business/image99.png'
// eslint-disable-next-line no-undef
class Explore extends Component {
  render() {
    return (
      <section id="Business_one" style={{
        maxWidth: "1190px", margin: "0 auto", padding: 0,
        height: "auto", width: "100%",
        backgroundColor: "#fff", paddingTop: "70px",
      }}>
        <Container style={{ maxWidth: "1190px", padding: 0, marginBottom: "25px" }}>
          <Typography variant="h1" component="h1">
            <div className="Business_one" style={{ paddingTop: "30px" }}>
              <img style={{ height: "42px" }} src={icon} alt="icon" />
              <h4 id="Business_sub_title" style={{
                justifyContent: "start",
                fontFamily: "Pretendard_semibold", fontSize: "40px", lineHeight: "60px",
                marginTop: "-17px", marginBottom: "0"
              }}>연구 개발 분야</h4>
            </div>
          </Typography>
        </Container>
        <div id="container" className="container" style={{
          marginTop: "3vw", 
          width:"75%",
          // width: "85%",
           display: "flex", 
          //  justifyContent: "space-between"
        }}>
          {/* <div id="field" className="row"> */}
          <div id="Business_test_width" className="col s12 m4" style={{marginRight:25, padding: 0, width: "100%" }} >
            <div id="margin_bottom_error" className="card" style={{
              textAlign: "left",
              fontSize: "25px",
              backgroundColor: "transparent", boxShadow: "none"
            }}>
              <div id="no_bold" className="subName study_card study_card_title subName_line subName1" style={{
                textAlign: "left",
                fontFamily: "Pretendard_medium",
                fontSize: "23px", borderBottom: "1px solid #252525", paddingBottom: "10px",
              }}>
                재생에너지 발전량 예측
              </div>
              <div id="test_p" className="card-content study_card" style={{
                fontFamily: "Pretendard",
                marginTop: "15px", fontSize: "16px", lineHeight: "24px", padding: 0,
              }}>
                <p className="Business_text_margin linebottom_content linebottom_content1" id="Business_width" style={{fontFamily: "Pretendard_regular"}}>
                  세계 각국의 인공위성영상, 수치예보<br className="br_3 " />
                  모델 기상<br className="br_4" /> 빅데이터를 사용하여 <br className="br_3" />
                  재생에너지 발전량 예측을<br className="br_4" /> 수행합니다. <br className="br_3" />
                  기상예측의 불확실성을 해소하기 위한<br className="br_3" />
                  AI/ML 모델 기반의 연구를 수행합니다.
                </p>
              </div>
            </div>
          </div>
          <div id="Business_test_width" className="col s12 m4" style={{ padding: 0, width: "100%" }}>
            <div id="margin_bottom_error" className="card card2" style={{
              textAlign: "left",
              fontFamily: "Pretendard_medium",
              fontSize: "25px",
              backgroundColor: "transparent", boxShadow: "none"
            }}>
              <div id="no_bold" className="subName study_card subName_line subName2" style={{
                textAlign: "left",
                fontFamily: "Pretendard_medium",
                fontSize: "23px", borderBottom: "1px solid #252525", paddingBottom: "10px",
              }}>
                가상발전소(VPP) 운영 최적화
              </div>
              <div id="test_p" className="card-content study_card" style={{
                fontFamily: "Pretendard",
                marginTop: "15px", fontSize: "16px", lineHeight: "24px", padding: 0,
              }}>
                <p className="Business_text_margin linebottom_content linebottom_content2" id="Business_width" style={{fontFamily: "Pretendard_regular"}} >
                  국내 시장에 적합한 재생에너지 <br className="br_3" />
                  발전량 예측 기술을<br className="br_4" /> 연구합니다. <br className="br_3" />
                  가상발전소 최적 운영을 위해 <br className="br_3" />
                  변동성,<br className="br_4" /> 경제성 등을 고려한 집합 최적화 <br className="br_3" />
                  방법을 연구합니다.
                </p>
              </div>
            </div>
          </div>
          <div id="Business_test_width" className="col s12 m4" style={{
            padding: 0, width: "100%", marginLeft:25,
            marginBottom: "15vw"
          }}>
            <div id="margin_bottom_error" className="card card3" style={{
              textAlign: "left",
              fontFamily: "Pretendard_medium",
              fontSize: "25px",
              backgroundColor: "transparent", boxShadow: "none"
            }}>
              <div id="no_bold" className="subName study_card subName_line subName3" style={{
                textAlign: "left",
                fontFamily: "Pretendard_medium",
                fontSize: "23px", borderBottom: "1px solid #252525", paddingBottom: "10px",
              }}>
                에너지·기후 분석
              </div>
              <div id="test_p" className="card-content study_card"  style={{
                fontFamily: "Pretendard",
                marginTop: "15px", fontSize: "16px", lineHeight: "24px", padding: 0
              }}>
                <p className="Business_text_margin linebottom_content linebottom_content3" id="Business_width" style={{fontFamily: "Pretendard_regular"}} >
                  전세계의 기후/기상을 분석하여 <br className="br_3" />
                  농업, 수자원 등<br className="br_4" /> 각종 분야의 <br className="br_3" />
                  사업성을 분석합니다.<br className="br_3" />
                  국내/외 재생<br className="br_4" /> 에너지 발전의 잠재성을 <br className="br_3" />
                  분석합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    );
  }
}
export default Explore;