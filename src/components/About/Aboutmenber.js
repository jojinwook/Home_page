// import * as React from 'react';     2:, useEffect, , { useState }
import React from 'react';


import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
// import icon_1 from '../../images/menber/img_jk.png'
// import icon_2 from '../../images/menber/img_yj.png'
// import icon_3 from '../../images/menber/img_jh.png'
// import icon_4 from '../../images/menber/img_yn.png'
// import icon_5 from '../../images/menber/img_ph.png'
// import icon_6 from '../../images/menber/img_dh.png'
// import icon_7 from '../../images/menber/img_jw.png'
// import icon_8 from '../../images/menber/img_kyh.png'
// import icon_9 from '../../images/menber/img_myj.png'
// import icon_10 from '../../images/menber/img_db.png'


// import { Link } from 'react-router-dom'
// import CloseIcon from '@mui/icons-material/Close';
import './index.css'
// import $ from "jquery";
// import AddIcon from '@mui/icons-material/Add';

import icon from '../../images/menber/members_img.png'
import mobile_icon from '../../images/menber/mobile_members_2.png'
import useMediaQuery from '@mui/material/useMediaQuery';


function Aboutmenber() {

  const max768 = useMediaQuery('(max-width:768px)')

  // const [ActiveText, setActiveText] = useState('')

  // const closeBox = () => {
  //   $(".profiles").removeClass('show1')
  //   $(".profileShow").hide()
  // }

  // const open = (count, low) => {
  //   setActiveText(userData[count])
  //   $(".profiles").removeClass('show1')
  //   $(".profiles").eq(low - 1).addClass('show1')
  //   $(".profileShow").hide()
  //   $(".profileShow").eq(low - 1).fadeIn(300)
  // }

  // const userData = [
  //   "좋은 기술로 재생에너지 확산의 걸림돌을 하나씩 제거하고 싶어요.\n재생에너지는 날씨에 따라 달라지는 간헐적 에너지예요.\n게다가 재생에너지는 발전소가 소규모로 전국에 뿔뿔이 흩어져 지어져 있어 전체적인 수요를 예측하기 어려워요.\n재생에너지 현황을 한눈에 알아볼 수 있는 지도를 만든 이유입니다.",
  //   "좋은 기술로 재생에너지 확산의 걸림돌을 하나씩 제거하고 싶어요.\n재생에너지는 날씨에 따라 달라지는 간헐적 에너지예요.\n게다가 재생에너지는 발전소가 소규모로 전국에 뿔뿔이 흩어져 지어져 있어 전체적인 수요를 예측하기 어려워요.\n재생에너지 현황을 한눈에 알아볼 수 있는 지도를 만든 이유입니다.",
  //   "좋은 기술로 재생에너지 확산의 걸림돌을 하나씩 제거하고 싶어요.\n재생에너지는 날씨에 따라 달라지는 간헐적 에너지예요.\n게다가 재생에너지는 발전소가 소규모로 전국에 뿔뿔이 흩어져 지어져 있어 전체적인 수요를 예측하기 어려워요.\n재생에너지 현황을 한눈에 알아볼 수 있는 지도를 만든 이유입니다.",

  //   "좋은 기술로 재생에너지 확산의 걸림돌을 하나씩 제거하고 싶어요.\n재생에너지는 날씨에 따라 달라지는 간헐적 에너지예요.\n게다가 재생에너지는 발전소가 소규모로 전국에 뿔뿔이 흩어져 지어져 있어 전체적인 수요를 예측하기 어려워요.\n재생에너지 현황을 한눈에 알아볼 수 있는 지도를 만든 이유입니다.",
  //   "좋은 기술로 재생에너지 확산의 걸림돌을 하나씩 제거하고 싶어요.\n재생에너지는 날씨에 따라 달라지는 간헐적 에너지예요.\n게다가 재생에너지는 발전소가 소규모로 전국에 뿔뿔이 흩어져 지어져 있어 전체적인 수요를 예측하기 어려워요.\n재생에너지 현황을 한눈에 알아볼 수 있는 지도를 만든 이유입니다.",
  //   "좋은 기술로 재생에너지 확산의 걸림돌을 하나씩 제거하고 싶어요.\n재생에너지는 날씨에 따라 달라지는 간헐적 에너지예요.\n게다가 재생에너지는 발전소가 소규모로 전국에 뿔뿔이 흩어져 지어져 있어 전체적인 수요를 예측하기 어려워요.\n재생에너지 현황을 한눈에 알아볼 수 있는 지도를 만든 이유입니다.",

  //   "좋은 기술로 재생에너지 확산의 걸림돌을 하나씩 제거하고 싶어요.\n재생에너지는 날씨에 따라 달라지는 간헐적 에너지예요.\n게다가 재생에너지는 발전소가 소규모로 전국에 뿔뿔이 흩어져 지어져 있어 전체적인 수요를 예측하기 어려워요.\n재생에너지 현황을 한눈에 알아볼 수 있는 지도를 만든 이유입니다.",
  //   "좋은 기술로 재생에너지 확산의 걸림돌을 하나씩 제거하고 싶어요.\n재생에너지는 날씨에 따라 달라지는 간헐적 에너지예요.\n게다가 재생에너지는 발전소가 소규모로 전국에 뿔뿔이 흩어져 지어져 있어 전체적인 수요를 예측하기 어려워요.\n재생에너지 현황을 한눈에 알아볼 수 있는 지도를 만든 이유입니다.",
  //   "좋은 기술로 재생에너지 확산의 걸림돌을 하나씩 제거하고 싶어요.\n재생에너지는 날씨에 따라 달라지는 간헐적 에너지예요.\n게다가 재생에너지는 발전소가 소규모로 전국에 뿔뿔이 흩어져 지어져 있어 전체적인 수요를 예측하기 어려워요.\n재생에너지 현황을 한눈에 알아볼 수 있는 지도를 만든 이유입니다.",

  //   "좋은 기술로 재생에너지 확산의 걸림돌을 하나씩 제거하고 싶어요.\n재생에너지는 날씨에 따라 달라지는 간헐적 에너지예요.\n게다가 재생에너지는 발전소가 소규모로 전국에 뿔뿔이 흩어져 지어져 있어 전체적인 수요를 예측하기 어려워요.\n재생에너지 현황을 한눈에 알아볼 수 있는 지도를 만든 이유입니다.",
  //   "좋은 기술로 재생에너지 확산의 걸림돌을 하나씩 제거하고 싶어요.\n재생에너지는 날씨에 따라 달라지는 간헐적 에너지예요.\n게다가 재생에너지는 발전소가 소규모로 전국에 뿔뿔이 흩어져 지어져 있어 전체적인 수요를 예측하기 어려워요.\n재생에너지 현황을 한눈에 알아볼 수 있는 지도를 만든 이유입니다.",
  //   "좋은 기술로 재생에너지 확산의 걸림돌을 하나씩 제거하고 싶어요.\n재생에너지는 날씨에 따라 달라지는 간헐적 에너지예요.\n게다가 재생에너지는 발전소가 소규모로 전국에 뿔뿔이 흩어져 지어져 있어 전체적인 수요를 예측하기 어려워요.\n재생에너지 현황을 한눈에 알아볼 수 있는 지도를 만든 이유입니다.",
  // ]
  return (
    <section id="adventure_1" className="section section-popular scrollspy" style={{
      backgroundColor: "#F5F8FA", maxWidth: "100%", height: "auto", marginTop: "15vw", width: "100%", paddingBottom: "170px"
    }}>
      <h4 id="about_h4" style={{ fontFamily: "Pretendard_semibold", fontSize: "40px", lineHeight: "60px" }}>식스티헤르츠 멤버들</h4>


      {/* <div className="container" style={{ marginTop: "7vh", maxWidth: "100%", }}>
        <div className="row profiles" style={{maxWidth:"1190px"}}> 
          <div className="col s4 m4">
            <div className="card" style={{
              marginLeft:"10vh",
              display:"inline-block",
              textAlign: "center",
              fontFamily: "Pretendard_medium",
              fontSize: "25px",
              backgroundColor: "transparent", boxShadow: "none",
              position: 'relative'
            }}>
              <img src={icon_1} alt="icon" className="profile_icon" />
              <div className="card-content" style={{ height: "13vh", marginTop: "15px", padding: 0, fontFamily: "Pretendard" }}>
                <p style={{lineHeight:"25px"}}>김종규 <br />
                <span style={{fontSize:"15px"}}>CEO</span>
                </p>
              </div>
              <AddIcon
                onClick={() => { open(0, 1) }}
                style={{
                  cursor: 'pointer',
                  position: 'absolute',
                  right: '-10px',
                  top: '10px'
                }}
              />
            </div>

          </div>
          <div className="col s4 m4">
            <div className="card" style={{
              display:"inline-block",
              textAlign: "center",
              fontFamily: "Pretendard_medium",
              fontSize: "25px",
              backgroundColor: "transparent", boxShadow: "none"
            }}>
              <img src={icon_2} alt="icon" className="profile_icon" />
              <div className="card-content" style={{ height: "13vh", marginTop: "15px", padding: 0, fontFamily: "Pretendard"}}>
                <p style={{lineHeight:"25px"}}>이유진 <br />
                <span style={{fontSize:"15px"}}>Data Scientist</span>
                </p>
              </div>
              <AddIcon
                onClick={() => { open(1, 1) }}
                style={{
                  cursor: 'pointer',
                  position: 'absolute',
                  right: '-10px',
                  top: '10px'
                }}
              />
            </div>
          </div>
          <div className="col s4 m4">
            <div className="card" style={{
              display:"inline-block", marginRight:"10vh",
              textAlign: "center",
              fontFamily: "Pretendard_medium",
              fontSize: "25px",
              backgroundColor: "transparent", boxShadow: "none"
            }}>
              <img src={icon_3} alt="icon" className="profile_icon" />
              <div className="card-content" style={{ height: "13vh", marginTop: "15px", padding: 0, fontFamily: "Pretendard" }}>
                <p style={{lineHeight:"25px"}}>서지형 <br />
                <span style={{fontSize:"15px"}}>Software  Engineer</span>
                </p>
              </div>
              <AddIcon
                onClick={() => { open(2, 1) }}
                style={{
                  cursor: 'pointer',
                  position: 'absolute',
                  right: '-10px',
                  top: '10px'
                }}
              />
            </div>
          </div>

          <div className="profileShow">
            <span>{ActiveText}</span>
            <CloseIcon
              onClick={closeBox}
              style={{
                position: 'absolute',
                cursor:"pointer",
                right: '12.5vh',
                top: '35px'
              }}
            />
          </div>
        </div>
        <div className="row profiles" style={{maxWidth:"1190px"}}>
          <div className="col s4 m4">
            <div className="card" style={{
              textAlign: "center", display:"inline-block",
              fontFamily: "Pretendard_medium", marginLeft:"10vh",
              fontSize: "25px",
              backgroundColor: "transparent", boxShadow: "none"
            }}>
              <img src={icon_4} alt="icon" className="profile_icon" />
              <div className="card-content" style={{ height: "13vh", marginTop: "15px", padding: 0, fontFamily: "Pretendard" }}>
                <p style={{lineHeight:"25px"}}>이유니 <br />
                <span style={{fontSize:"15px"}}>Research Assistant(독일 베를린)</span>
                </p>
              </div>
              <AddIcon
                onClick={() => { open(3, 2) }}
                style={{
                  cursor: 'pointer',
                  position: 'absolute',
                  right: '-10px',
                  top: '10px'
                }}
              />
            </div>
          </div>
          <div className="col s4 m4">
            <div className="card" style={{
              textAlign: "center", display:"inline-block",
              fontFamily: "Pretendard_medium",
              fontSize: "25px",
              backgroundColor: "transparent", boxShadow: "none"
            }}>
              <img src={icon_5} alt="icon" className="profile_icon" />
              <div className="card-content" style={{ height: "13vh", marginTop: "15px", padding: 0, fontFamily: "Pretendard" }}>
                <p style={{lineHeight:"25px"}}>김평화 <br />
                <span style={{fontSize:"15px"}}>Product Designer</span>
                </p>
              </div>
              <AddIcon
                onClick={() => { open(4, 2) }}
                style={{
                  cursor: 'pointer',
                  position: 'absolute',
                  right: '-10px',
                  top: '10px'
                }}
              />
            </div>
          </div>
          <div className="col s4 m4">
            <div className="card" style={{
              textAlign: "center",
              fontFamily: "Pretendard_medium", display:"inline-block",
              fontSize: "25px", marginRight:"10vh",
              backgroundColor: "transparent", boxShadow: "none"
            }}>
              <img src={icon_6} alt="icon" className="profile_icon" />
              <div className="card-content" style={{ height: "13vh", marginTop: "15px", padding: 0, fontFamily: "Pretendard" }}>
                <p style={{lineHeight:"25px"}}>김대호 <br />
                <span style={{fontSize:"15px"}}>Data Scientist</span>
                </p>
              </div>
              <AddIcon
                onClick={() => { open(5, 2) }}
                style={{
                  cursor: 'pointer',
                  position: 'absolute',
                  right: '-10px',
                  top: '10px'
                }}
              />
            </div>
          </div>

          <div className="profileShow">
            <span>{ActiveText}</span>
            <CloseIcon
              onClick={closeBox}
              style={{
                position: 'absolute',
                cursor:"pointer",
                right: '12.5vh',
                top: '35px'
              }}
            />
          </div>
        </div>
        <div className="row profiles" style={{maxWidth:"1190px"}}>
          <div className="col s4 m4">
            <div className="card" style={{
              textAlign: "center", display:"inline-block",
              fontFamily: "Pretendard_medium", marginLeft:"10vh",
              fontSize: "25px",
              backgroundColor: "transparent", boxShadow: "none"
            }}>
              <img src={icon_7} alt="icon" className="profile_icon" />
              <div className="card-content" style={{ height: "13vh", marginTop: "15px", padding: 0, fontFamily: "Pretendard" }}>
                <p style={{lineHeight:"25px"}}>조진욱 <br />
                <span style={{fontSize:"15px"}}>Software Engineer</span>
                </p>
              </div>
              <AddIcon
                onClick={() => { open(6, 3) }}
                style={{
                  cursor: 'pointer',
                  position: 'absolute',
                  right: '-10px',
                  top: '10px'
                }}
              />
            </div>
          </div>

          <div className="col s4 m4">
            <div className="card" style={{
              textAlign: "center",
              fontFamily: "Pretendard_medium", display:"inline-block",
              fontSize: "25px",
              backgroundColor: "transparent", boxShadow: "none"
            }}>
              <img src={icon_8} alt="icon" className="profile_icon" />
              <div className="card-content" style={{ height: "13vh", marginTop: "15px", padding: 0, fontFamily: "Pretendard" }}>
                <p style={{lineHeight:"25px"}}>김윤호 <br />
                <span style={{fontSize:"15px"}}>Management Support</span>
                </p>
              </div>
              <AddIcon
                onClick={() => { open(7, 3) }}
                style={{
                  cursor: 'pointer',
                  position: 'absolute',
                  right: '-10px',
                  top: '10px'
                }}
              />
            </div>
          </div>

          <div className="col s4 m4">
            <div className="card" style={{
              textAlign: "center",
              fontFamily: "Pretendard_medium", display:"inline-block",
              fontSize: "25px", marginRight:"10vh",
              backgroundColor: "transparent", boxShadow: "none"
            }}>
              <img src={icon_9} alt="icon" className="profile_icon" />
              <div className="card-content" style={{ height: "13vh", marginTop: "15px", padding: 0, fontFamily: "Pretendard" }}>
                <p style={{lineHeight:"25px"}}>마영주 <br />
                <span style={{fontSize:"15px"}}>Management Support</span>
                </p>
              </div>
              <AddIcon
                onClick={() => { open(8, 3) }}
                style={{
                  cursor: 'pointer',
                  position: 'absolute',
                  right: '-10px',
                  top: '10px'
                }}
              />
            </div>
          </div>


          <div className="profileShow">
            <span>{ActiveText}</span>
            <CloseIcon
              onClick={closeBox}
              style={{
                position: 'absolute',
                cursor: 'pointer',
                right: '12.5vh',
                top: '35px'
              }}
            />
          </div>
        </div>

        <div className="row profiles" style={{maxWidth:"1190px"}}>
          <div className="col s4 m4">
            <div className="card" style={{
              textAlign: "center", display:"inline-block",
              fontFamily: "Pretendard_medium", marginLeft:"10vh",
              fontSize: "25px",
              backgroundColor: "transparent", boxShadow: "none"
            }}>
              <img src={icon_10} alt="icon" className="profile_icon" />
              <div className="card-content" style={{ height: "13vh", marginTop: "15px", padding: 0, fontFamily: "Pretendard" }}>
                <p style={{lineHeight:"25px"}}>정단비 <br />
                <span style={{fontSize:"15px"}}>Brand Marketer</span>
                </p>
              </div>
              <AddIcon
                onClick={() => { open(9, 4) }}
                style={{
                  cursor: 'pointer',
                  position: 'absolute',
                  right: '-10px',
                  top: '10px'
                }}
              />
            </div>
          </div>


          <div className="profileShow">
            <span>{ActiveText}</span>
            <CloseIcon
              onClick={closeBox}
              style={{
                position: 'absolute',
                cursor: 'pointer',
                right: '12.5vh',
                top: '35px'
              }}
            />
          </div>
        </div>
      </div> */}





      <p id="about_menber" style={{
        fontFamily: "Pretendard_semibold", fontStyle: "normal", textAlign: "center",
        lineHeight: "50px"
        , fontSize: "24px", padding: "4vh 0"
      }}>
        전체 멤버의 절반이 SW 및 알고리즘 개발 업무를 합니다. <br />
        <span style={{ color: "#EC5B44" }}>30%</span>의 멤버가 석사 이상의 학력입니다. <br />
        3~6년 사이의 경력자가 <span style={{ color: "#EC5B44" }}>50%</span>로<br className="br_4" />  가장 많은 비중을 차지하고 있습니다. <br />
        전체 남녀 성비는 <span style={{ color: "#EC5B44" }}>1:1</span>입니다.
        {/* 식스티헤르츠 멤버의 성비는 <span style={{ color: "#EC5B44" }}>5:5</span>입니다. <br />
        식스티헤르츠는 20대가 <span style={{ color: "#EC5B44" }}>41%</span> , 30대가 <span style={{ color: "#EC5B44" }}>59%</span>로 입니다. <br />
        특성화고 <span style={{ color: "#EC5B44" }}>00%</span>, 학사 <span style={{ color: "#EC5B44" }}>00%</span>, 석사 이상이 <span style={{ color: "#EC5B44" }}>00%</span>입니다. <br />
        팀원의 <span style={{ color: "#EC5B44" }}>00%</span>가 3년 미만의 경력을 가지고 있습니다. <br />
        그리고 <span style={{ color: "#EC5B44" }}>00%</span>는 5년 이상의 경력자죠. <br />
        소프트웨어·알고리즘 <span style={{ color: "#EC5B44" }}>00%</span>, 데이터·리서치 <span style={{ color: "#EC5B44" }}>00%</span> <br /> */}
      </p>




      <img id="member_img_icon" height="230px" src={max768 ? mobile_icon : icon} alt="web_menber" />






    </section >
  )
}


export default Aboutmenber;