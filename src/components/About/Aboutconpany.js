import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import { Link } from 'react-router-dom'
import useMediaQuery from '@mui/material/useMediaQuery';

import Skt from '../../images/partner_company_logo/partner_sa/SKT_ESG.png'
import LG from '../../images/partner_company_logo/partner_sa/LG.png'
import H from '../../images/partner_company_logo/partner_sa/H.png'
import Sin from '../../images/partner_company_logo/partner_sa/sinhan.png'
import Kw from '../../images/partner_company_logo/partner_sa/Kwater.png'
import Sop from '../../images/partner_company_logo/partner_sa/sopoong.png'
import My from '../../images/partner_company_logo/partner_sa/mysc.png'
import Zero from '../../images/partner_company_logo/partner_sa/zeroone.png'
import Echo from '../../images/partner_company_logo/partner_sa/echo.png'

import Good from '../../images/partner_company_logo/partner_sa/good.png'
import G from '../../images/partner_company_logo/partner_sa/grid.png'
import In from '../../images/partner_company_logo/partner_sa/inups.png'
import U from '../../images/partner_company_logo/partner_sa/happy.png'
import Im from '../../images/partner_company_logo/partner_sa/impact.png'
import So from '../../images/partner_company_logo/partner_sa/social.png'

// import { textAlign } from '@mui/system';       1:, {Component}


import MobileSkt from '../../images/mobile_About/SKT_ESG.png'
import MobileLG from '../../images/mobile_About/LG.png'
import MobileH from '../../images/mobile_About/H.png'
import MobileSin from '../../images/mobile_About/sinhan.png'
import MobileKw from '../../images/mobile_About/Kwater.png'
import MobileSop from '../../images/mobile_About/sopoong.png'
import MobileMy from '../../images/mobile_About/mysc.png'
import MobileZero from '../../images/mobile_About/zeroone.png'
import MobileEcho from '../../images/mobile_About/echo.png'

import MobileGood from '../../images/mobile_About/good.png'
import MobileG from '../../images/mobile_About/grid.png'
import MobileIn from '../../images/mobile_About/inups.png'
import MobileU from '../../images/mobile_About/happy.png'
import MobileIm from '../../images/mobile_About/impact.png'
import MobileSo from '../../images/mobile_About/social.png'


// eslint-disable-next-line no-undef
function Explore(props) {
  // render() {
  const max768 = useMediaQuery('(max-width:768px)')
  return (
    <section className="aboutcompany_top" style={{
      maxWidth: "100%",
      width: "100%", height: "auto",
      display: "inline-block"
    }}>
      <div style={{ marginLeft: "10vw", width: "100%", height: 0 }}></div>
      <Container maxWidth="sm" style={{ maxWidth: "100%" }}>
        <Typography variant="h1" component="h1">
          <div className="dikkkv" style={{ verticalAlign: "middle" }}>
            <h4 id="company_da" style={{ fontFamily: "Pretendard_semibold", fontSize: "40px", lineHeight: "45px", letterSpacing: '0px' }}> 식스티헤르츠와 함께 합니다. </h4>
            <p id="about_text" style={{ fontSize: "16px", color: "#848484", fontFamily: "Pretendard_medium", fontWeight:'normal', letterSpacing: '0px' }}>
              2021년 9월 28일 기준</p>

          </div>
          <div className="About_conpany" style={{
            width: "90%", textAlign: "left", fontSize: "20px", display: "inline-block",
            fontFamily: "Pretendard_medium", marginTop: "5vh",
            borderBottom: "0.5px solid #252525"
          }}>
            {/* <span style={{fontSize:"16px", fontFamily:"Pretendard_medium", paddingRight:"5vw" ,textAlign:"left",
          position:"relative",left:"0", display:"contents" }}>엑셀러레이팅</span> */}
            <text className="About_conpany_sub_title" style={{
              display: "inline-block",
              position: "relative", bottom: "40px", width: "170px"
            }}>엑셀러레이팅 </text>
            {/* <img src={Skt} width="19%" height="auto" style={{marginRight:"1vw", marginLeft:"4vw",  }} />
              <img src={LG} width="15%" height="auto" style={{marginRight:"1vw", marginLeft:"1vw", }} />
              <img src={H}  width="13%" height="auto" style={{marginRight:"1vw", marginLeft:"1vw", }} />
              <img src={Sin} width="16%" height="auto" style={{marginRight:"1vw",marginLeft:"1vw",  }} />
              <img src={Kw} width="8%" height="auto" style={{marginRight:"1vw",marginLeft:"1vw", }} />
               */}
            <img id="About_mobile_img" height={90} src={max768 ? MobileH : H} alt="h" />
            <img id="About_mobile_img" height={90} src={max768 ? MobileLG : LG} alt="lg" />
            <img id="About_mobile_img" height={90} src={max768 ? MobileSkt : Skt} alt="skt" />
            <img id="About_mobile_img" height={90} src={max768 ? MobileSin : Sin} alt="sin" />
            <img id="About_mobile_img" height={90} src={max768 ? MobileKw : Kw} alt="kw" />
          </div>

          <div className="About_conpany" style={{
            width: "90%", textAlign: "left", fontSize: "20px", display: "inline-block",
            fontFamily: "Pretendard_medium",
            borderBottom: "0.5px solid #252525"
          }}>
            {/* <span style={{fontSize:"16px", fontFamily:"Pretendard_medium", paddingRight:"5vw" ,textAlign:"left",
          position:"relative",left:"0", display:"contents" }}>엑셀러레이팅</span> */}
            <text className="About_conpany_sub_title" style={{
              display: "inline-block",
              position: "relative", bottom: "45px", width: "170px"
            }}>투자사</text>
            {/* <img src={Sop} width="13%" height="auto" style={{marginRight:"2vw", marginLeft:"4vw",}} />
              <img src={My} width="7%" height="auto" style={{marginRight:"2vw", marginLeft:"1vw", }} />
              <img src={Zero}  width="21%" height="auto" style={{marginRight:"2vw", marginLeft:"1vw",    display: "inline-block",
    position: "relative",
    paddingBottom: "10px"}} /> */}
            <img id="About_mobile_img" height={90} src={max768 ? MobileSop : Sop} alt="sop" />
            <img id="About_mobile_img" height={90} src={max768 ? MobileMy : My} alt="my" />
            <img id="About_mobile_img" height={90} src={max768 ? MobileZero : Zero} alt="zero" />
          </div>

          <div className="About_conpany" style={{
            width: "90%", textAlign: "left", fontSize: "20px", display: "inline-block",
            fontFamily: "Pretendard_medium",
            borderBottom: "0.5px solid #252525"
          }}>
            {/* <span style={{fontSize:"16px", fontFamily:"Pretendard_medium", paddingRight:"5vw" ,textAlign:"left",
          position:"relative",left:"0", display:"contents" }}>엑셀러레이팅</span> */}
            <text className="About_conpany_sub_title" style={{
              display: "inline-block",
              position: "relative", bottom: "40px", width: "170px"
            }}>파트너</text>
            {/* <img src={Echo} width="20%" height="auto" style={{marginRight:"2vw", marginLeft:"4vw",}} />
              <img src={Good} width="20%" height="auto" style={{marginRight:"2vw", marginLeft:"1vw", }} />
              <img src={G}  width="12%" height="auto" style={{marginRight:"2vw", marginLeft:"1vw", marginBottom:"10px"}} />
              <img src={In}  width="auto" height="50px" style={{marginRight:"2vw", marginLeft:"1vw", }} /> */}
            <img id="About_mobile_img" height={90} src={max768 ? MobileGood : Good} alt="good" />
            <img id="About_mobile_img" height={90} src={max768 ? MobileEcho : Echo} alt="echo" />
            <img id="About_mobile_img" height={90} src={max768 ? MobileG : G} alt="g" />
            <img id="About_mobile_img" height={90} src={max768 ? MobileIn : In} alt="in" />
          </div>

          <div className="About_conpany" style={{
            width: "90%", textAlign: "left", fontSize: "20px", display: "inline-block",
            fontFamily: "Pretendard_medium",
          }}>
            {/* <span style={{fontSize:"16px", fontFamily:"Pretendard_medium", paddingRight:"5vw" ,textAlign:"left",
          position:"relative",left:"0", display:"contents" }}>엑셀러레이팅</span> */}
            <text className="About_conpany_sub_title" style={{
              display: "inline-block",
              position: "relative", bottom: "40px", width: "170px"
            }}>소셜 임팩트</text>
            {/* <img src={U} width="8%" height="auto" style={{marginRight:"2vw", marginLeft:"4vw",}} />
              <img src={Im} width="16%" height="auto" style={{marginRight:"2vw", marginLeft:"1vw", }} />
              <img src={So}  width="12%" height="auto" style={{marginRight:"2vw", marginLeft:"1vw", }} /> */}
            <img id="About_mobile_img" height={90} src={max768 ? MobileIm : Im} alt="in" />
            <img id="About_mobile_img" height={90} src={max768 ? MobileSo : So} alt="so" />
            <img id="About_mobile_img" height={90} src={max768 ? MobileU : U} alt="u" />
          </div>
        </Typography>
      </Container>
    </section>
  );
}


export default Explore;
