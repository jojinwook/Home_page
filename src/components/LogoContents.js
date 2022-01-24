import React from 'react';
// , {Component}
// import logos from '../images/logos.png'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import { Link } from 'react-router-dom'
import icon from '../images/more_arrow.svg'
import  useMediaQuery  from '@mui/material/useMediaQuery';
//기업 로고
import "./LogoContents.css"
// import Skt from '../images/파트너사로고/skt.png'
// import LG from '../images/파트너사로고/LG소셜캠퍼스.png'
// import H from '../images/파트너사로고/H온드림.png'
// import Sin from '../images/파트너사로고/신한.png'
// import Kw from '../images/파트너사로고/kwater.png'
// import Sop from '../images/파트너사로고/sopoong.png'
// import My from '../images/파트너사로고/mysc.png'
// import Zero from '../images/파트너사로고/제로원.png'
// import Echo from '../images/파트너사로고/에코앤파트너스.png'

// import test from '../images/partner_company_logo/last_logo/1ESG.png'
import Skt from '../images/partner_company_logo/last_logo/1ESG.png'
import MobileSkt from '../images/partner_company_logo/mobile/1ESG.png' 
import LG from '../images/partner_company_logo/last_logo/2LG.png'
import MobileLG from '../images/partner_company_logo/mobile/2LG.png'
import H from '../images/partner_company_logo/last_logo/3H.png'
import MobileH from '../images/partner_company_logo/mobile/3H.png'

import Sin from '../images/partner_company_logo/last_logo/4sinhan.png'
import MobileSin from '../images/partner_company_logo/mobile/4sinhan.png'
import Kw from '../images/partner_company_logo/last_logo/5Kwater.png'
import MobileKw from '../images/partner_company_logo/mobile/5Kwater.png'
import Sop from '../images/partner_company_logo/last_logo/6sopoong.png'
import MobileSop from '../images/partner_company_logo/mobile/6sopoong.png'

import My from '../images/partner_company_logo/last_logo/7mysc.png'
import MobileMy from '../images/partner_company_logo/mobile/7mysc.png'
import Zero from '../images/partner_company_logo/last_logo/8zeroone.png'
import MobileZero from '../images/partner_company_logo/mobile/8zeroone.png'
import Echo from '../images/partner_company_logo/last_logo/9echo.png'
import MobileEcho from '../images/partner_company_logo/mobile/9echo.png'



// eslint-disable-next-line no-undef
function Explore(props) {
  const max768 = useMediaQuery('(max-width:768px)')
  return (
    
    <section id="margin_top_test" style={{maxWidth:"100%",
    margin:"0 auto", clear: 'both', width: "100%", height: "auto", backgroundColor: "#F5F8FA", paddingTop:"10vw",display: "inline-block" ,
    // paddingBottom:"10vw",
    }}>

      <div className="" id="border_1" style={{maxWidth:"100%",
                display: 'flex',
                justifyContent: 'start',
                borderBottom:"0.5px solid #252525", marginLeft:"10vw", width:"80%", height:0}}></div>

    <Container maxWidth="sm" style={{maxWidth:"100%",}}>
        <Typography variant="h1" component="h1">
          <div className="dikkkv" style={{ verticalAlign: "middle" }}>
          <h4 className="wel_company" style={{fontFamily:"Pretendard_semibold", paddingTop:"6vw",fontSize:"40px", lineHeight:"45px", letterSpacing: '0px', paddingBottom:'83px'}}> 식스티헤르츠와 함께 합니다. </h4>
          {/* <p style={{ fontSize: "16px", fontWeight:'normal', color:"#848484", fontFamily:"Pretendard_medium", letterSpacing: '0px'}}>
            2021년 9월 28일 기준</p> */}
          
          {/* <img className="logos" sx={{width:"871px", height:"297px", display:"inline-block"}} src={logos} alt="logo" /> */}
          <div className="company_img" style={{height:'80px'}}>
           {/* style={{marginBottom:"20px"}}> */}
                <img id="company_img_logo" style={{marginBottom:'10px'}} height={70} src={max768? MobileH:H} alt="h"/>
                <img id="company_img_logo" style={{marginBottom:'10px'}} height={70} src={max768? MobileLG:LG} alt="lg" />
                <img id="company_img_logo" style={{marginBottom:'10px'}} height={70} src={max768? MobileSkt:Skt} alt="skt" />

                {/* <div className='Home_company_test'> 
                  <div style={{width:"402.83px", height:'70px',fontSize:'20px'}}>
                  이게뭐야 
                  </div>
                  <div style={{width:"402.83px", height:'70px',fontSize:'20px'}}>
                  이게뭐야22222
                  </div>
                  <div style={{width:"402.83px", height:'70px',fontSize:'20px'}}>
                  이게뭐야333333
                  </div>
                  
                </div> */}

                {/* <div className='Home_company_test' style={{width:"402.83px", height:'70px'}}>
                  
                </div> */}
          </div>
          <div class="jb-text_fc" style={{marginBottom:'50px'}}>
            <div class="jb-text" style={{    marginLeft: "212px"}}>
            현대차 정몽구재단
            </div>
            <div class="jb-text">
            LG전자/화학
            </div>
            <div class="jb-text">
            SK 텔레콤
            </div>
          </div>
          <div className="company_img" style={{height:'80px'}} >
          {/*  style={{marginBottom:"20px"}}> */}
                {/* <img src={Sin} width="14%" height="auto" style={{marginRight:"6vw", marginLeft:"-2vw"}} />
                <img src={Kw} width="8%" height="auto" style={{marginRight:"5vw"}} />
                <img src={Sop} width="13%" height="auto" style={{marginBottom:"-10px"}} /> */}

                <img id="company_img_logo" style={{marginBottom:'10px'}} height={70} src={max768? MobileSin:Sin} alt="sin" />
                <img id="company_img_logo" style={{marginBottom:'10px'}} height={70} src={max768? MobileKw:Kw} alt="kw" />
                <img id="company_img_logo" style={{marginBottom:'10px'}} height={70} src={max768? MobileEcho:Echo} alt="echo" />

          </div>
          <div class="jb-text_fc" style={{marginBottom:'50px'}}>
            <div class="jb-text" style={{    marginLeft: "212px"}}>
            신한금융그룹
            </div>
            <div class="jb-text">
            수자원공사
            </div>
            <div class="jb-text">
            SK 에코플랜트
            </div>
          </div>
          <div className="company_img" style={{height:'80px'}}>
           {/* style={{marginBottom:"20px"}}> */}
                {/* <img src={My} width="auto" height="30px" style={{marginRight:"7vw",marginLeft:"3vw"}} />
                <img src={Zero} width="14%" height="auto" style={{marginBottom:"10px", marginRight:"3vw"}} />
                <img src={Echo} width="14%" height="auto" style={{marginBottom:"10px", }} /> */}

                <img id="company_img_logo" style={{marginBottom:'10px'}} height={70} src={max768? MobileSop:Sop} alt="sop" />
                <img id="company_img_logo" style={{marginBottom:'10px'}} height={70} src={max768? MobileMy:My} alt="my" />
                <img id="company_img_logo" style={{marginBottom:'10px'}} height={70} src={max768? MobileZero:Zero} alt="zero" />
                
          </div>
          <div class="jb-text_fc" style={{marginBottom:'50px'}}>
            <div class="jb-text" style={{    marginLeft: "212px"}}>
            소풍벤처스
            </div>
            <div class="jb-text">
            엠와이소셜컴퍼니
            </div>
            <div class="jb-text">
            현대자동차그룹 제로원
            </div>
          </div>
          {/* </div> */}
        </div>
        <div >
      <div className="Home_The"> 
      {/* <Link to={"#company_da"} refresh="true">  */}
      <a href="/ABOUT#bottom_top_text" onClick={ refreshPage } > 
                  <div id="the_many_view"
                    // onClick={
                    //   () => {
                    //     window.scrollTo(0, 0);
                    //   }
                    // }
                      style={{
                      fontFamily: "Pretendard",
                      backgroundColor: "none",  
                      borderBottom: "1px solid #252525", width: "158px",
                      height: "35px", fontSize:"16px",lineHeight:"10px", letterSpacing: '0',
                      display:"table-cell", verticalAlign:"middle", fontWeight:"bold", color:"#252525"
                  }}> 더 많은 파트너 보기 <img style={{marginLeft:4, height:"12px", paddingTop:1}} src={icon} alt="icon" /></div>
      {/* </Link> */}
      </a>
    </div>    
        </div>
          </Typography>
      </Container>
    </section>
  );
}

function refreshPage(){ 
  window.location.reload(); 
}

export default Explore;
