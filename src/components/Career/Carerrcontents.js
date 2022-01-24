import React, { Component } from 'react';
// import logos from '../images/logos.png'
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
import Qna from '../Qna'
import './Carrer.css'
// import { margin } from '@mui/system';

// import { Link } from 'react-router-dom'
// import icon from '../../images/Business/image99.png'

// const onQnaClick = (num) => {
//   if (OpenNum == num) {
//     // 자기 자신 오픈
//     setOpenNum(-1)
//   } else {
//     setOpenNum(num)
//   }
// }

class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openNum: -1
    };
  }


  render() {
    const onQnaClick = (num) => {

      if (this.state.openNum === num) {
        // 자기 자신 오픈

        this.setState({
          openNum: -1,
        });
        
      } 
      else {
        this.setState({
          openNum: num,
        });
      }
    }



    const QnaData = [
      {
        title: '<b id="Carerr_text">서비스 개발팀 - 백엔드</b>',
        content: '<p class="career_info" style="font-size:20px;">식스티헤르츠는 매일 10만개가 넘는 재생에너지 발전소의 발전량을 예측하고 있습니다.<br/>이를 위하여 한국, 미국, 유럽연합의 기상청 및 유관기관으로부터 수신한 대량의 데이터를 효율적으로 처리해야 합니다. <br />인공위성 영상, 각국의 수치예보모델 자료를 아마존 클라우드 기반으로 처리 합니다.<br /><br/><b class="career_info" style="font-size:20px;">주요 업무</b><p class="career_info" style="font-size:20px;">- 발전량 예측 API 등 백엔드 시스템 개발<br />- 재생에너지 모니터링 시스템 개발 (대쉬보드)<br /> <br/><b class="career_info" style="font-size:20px;">개발 스택</b><p class="career_info" style="font-size:20px;">- Python 언어 구사 능력 (필수)<br />- Web Application Framework / ORM 이해 (필수)<br />- AWS 기반 인프라 사용 경험 (필수)<br/>- AirFlow, Docker, TDD, CI, Git (우대)<br />- Slack / Jira / Confluence                 <br/><br/><br/><br/> <p style="width:50%; border-bottom: 1px solid black; font-size:20px;"> hr@60hz.io로 자유형식의 이력서와 자기소개서 제출(상시 모집) </p></p>'

      },
      {
        title: '<b id="Carerr_text">서비스 개발팀 - 프론트엔드</b>',
        content: '<p class="career_info" style="font-size:20px;">식스티헤르츠가 개발한 햇빛바람지도는 에너지산업의 주요 이해관계자 600여명이 사용하고 있습니다.<br/>지도 위에서 효율적으로 그래픽을 처리해야 하고, 다양한 조건에 따라 효율적으로 화면이 전환될 수 있도록 해야 합니다.<br />대쉬보드 형태의 응용 웹서비스는 데이터 시각화에 대한 감각이 필요할 수 있습니다.<br /><br/><b class="career_info" style="font-size:20px;">주요 업무</b><p class="career_info" style="font-size:20px;">- 햇빛바람지도 개발 (https://map.60hz.io)<br />- 재생에너지 모니터링 시스템 개발 (대쉬보드)<br /> <br/><b class="career_info" style="font-size:20px;">개발 스택</b><p class="career_info" style="font-size:20px;">- HTML / JavaScript / CSS 관련 기본지식 보유 (필수)<br />- React나 Vue를 활용한 작업 경력 (필수)<br />- Mapbox 기반 작업 경력 (우대)<br/>- DOM 랜더링 관련 지식 (우대)<br />- 대쉬보드 구축 경험 (우대)<br />- Slack / Jira / Confluence                 <br/><br/><br/><br/> <p style="width:50%; border-bottom: 1px solid black; font-size:20px;"> hr@60hz.io로 자유형식의 이력서와 자기소개서 제출(상시 모집) </p></p>'
      },
      // {
      //   title: '<div style="margin-botton:50vw;"><b id="Carerr_text">데이터 사이언티스트</b></div>',
      //   content: '<b class="career_info" style="font-size:20px;">테크 스택</b><br/><p class="career_info" style="font-size:20px;">식스티헤르츠는 Microservice Artchitecrue 와 최신 기술 스택을 사용하여 개발하고 있습니다.<br/>- TypeScript 를 사용하여 대부분의 서비스를 개발<br/>- Microservice Architecture 기반의 설계를 적용<br/>- Back-end 서비스 개발 - Node.js / AWS Elastic Beanstalk, SQS, SNS, Lambda 등<br/>- Front-end 서비스 개발 - React.js, Next.js<br/>- 모바일 APP 개발 - React Native</p><b class="career_info" style="font-size:20px;"><br/>주요 업무</b><br/><br/><p class="career_info" style="font-size:20px;">- 확장성/생산성/안정성을 고려하여 서비스 주요 피처(API, Web, App 포함) 설계/구현/운영<br/>- 피드 알고리즘 개발 (개인화 및 추천)<br/>- 사용자 문제 해결을 위한 신규 피처(feature) 개발에 관한 논의에 참여</p><br/><br/><b class="career_info" style="font-size:20px;">자격 요건</b><br/><p class="career_info" style="font-size:20px;">- 컴퓨터공학 또는 관련 학문을 전공: Data Structure, OOP, Algorithm, Database, Network 등<br/>컴퓨터 과학의 기초지식에 대한 높은 이해를 갖추신 분<br/>- 소프트웨어 엔지니어 경력 2년 이상<br/>- 함께 협업하는 사람들과 논리적으로 의사소통 할 수 있는 분<br/>- 장기적인 관점으로 확장성 있고 유연하게 설계하는 것이 습관화 되어있는 분<br/>- MVVM,MVC,MVP등의 디자인 패턴에 대한 이해와 개발 경험이 있는 분<br/>- Restful API에 대한 이해와 실무 경험이 있는 분<br/><br/><b>우대 요건</b><br/>- 아래와 같은 B2C 서비스를 개발해본 경험을 가지고 있는 분<br/>- E-Book, 웹툰/웹소설, 뉴스 등 디지털 콘텐츠/미디어 서비스<br/>- 오픈 마켓, 소셜 커머스 등 전자상거래 서비스</p><br/>             <a href="mailto:admin@60hz.io" id="Carerr_last_text_button" style="background:transparent; width:180px; height:70px; line-height:68px; margin:7.5% 0% 10% 39.5%;  display: inline-block; text-align:center; border:2px solid #252525; color:#252525; border-radius:100px;  font-family: Pretendard_semibold; font-size:20px;">지원하기</a>'
      // },

    ]
    return (
      <React.Fragment>

        {/* <Container className="Career_co" style={{ paddingLeft: 0, paddingRight: 0, margin: "-7vh 0 0 0", maxWidth: "1190px" }}> */}
        {/* , width: "100%" */}
        {/* <Typography> */}



        {/* style={{ textAlign:"left", 
           width: "12%",
            float:"left",
           , paddingTop:"1vh"
           marginLeft:"4vw",
           }} */}


        {/* <Container maxWidth="sm" >
            <Typography variant="h1" component="h1">
          <div style={{ marginLeft:"-60vw"}}>
            <h4 style={{fontFamily:"Pretendard",fontSize:"40px", lineHeight:"48px", paddingLeft:"20px"}}>인재영입</h4>
          </div>
            </Typography>
        </Container>
           */}



        {/* <Typography variant="h1" component="h1" style={{maxWidth: "1190px"}}>
          <div style={{ width:"47.8%"}}>
            <h4 style={{fontFamily:"Pretendard",fontSize:"40px", lineHeight:"48px"}}>인재 영입</h4>
          </div>
            </Typography> */}



        {/* </Typography> */}

        <div style={{ maxWidth: "1190px", margin: "0 auto", clear: 'both' }}>
          <div id="spacebetween" style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
            <div id="jionehage" style={{
              // display: "flex",
              width: '100%',
              // marginTop: "7vw"
              margin: "0 auto"
              // marginTop: "10vh"
            }}>
              <h4 id="Career_sub_subtitle" className="Career_in" style={{
                fontFamily: "Pretendard_semibold",
                // display: "flex",
                // justifyContent: "start",
                fontSize: "40px",
                flex: 2,
                marginRight: "7vw",
                textAlign: 'left',
                marginBottom: "60px",

                // lineHeight: "45px",
                // margin: "12.3vh 0 0 3vh"
              }}>인재영입</h4>


              <div className="faq-list-box" style={{
                display: "block", width: "90%", flex: 10, marginBottom: "15vw", marginRight: "6vw"
              }}>

                {

                  QnaData && QnaData.map((qna, idx) => {
                    return (

                      <Qna qna={qna} show={idx === this.state.openNum} idx={idx} onQnaClick={onQnaClick} />
                    )
                  })
                }
                
              </div>
            </div>
          </div>
        </div>

        {/* <div className="faq-list-box">
            {
              QnaData && QnaData.map((qna, idx) => {
                return (
                  <Qna qna={qna} show={idx == OpenNum} idx={idx} onQnaClick={onQnaClick} />
                )
              })
            }
          </div> */}

        {/* </Container> */}
      </React.Fragment>
    );
  }
}

export default Explore;
