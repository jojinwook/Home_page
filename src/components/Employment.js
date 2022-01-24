import React, { Component } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ig from '../images/image2.png'
// import ba from '../images/JoinUs.png'
// import { fontWeight } from '@mui/system';
import { Link } from 'react-router-dom'
import backimg from '../images/image_29.png'


class Explore extends Component {
  render() {
      return (
        <Container className="wel_body" style={{
            maxWidth: "100%",
            // backgroundColor: "#f5f5f5",
            backgroundImage: `url(${backimg})`,
            backgroundSize: "100% 100%",
            // height:"50vh",
            padding:"5vw"
        }}>
        <Typography>

                 {/* onClick={
                     () => {
                     window.scrollTo(0, 0);
                     }
                 }> */}
            <img id="emoji" style={{
                maxWidth: "100%",
                height:"50px"
                  }} src={ig} alt="img" />
                  <div className="Employment_won" style={{
                      fontSize: "35px",
                  fontFamily:"Pretendard_semibold", lineHeight:"60px", color:"#252525"}}>
            함께해요!          
        </div>
        <div className="wel">
            <p style={{ fontSize: "20px", margin:"0 0 2vw 0",
                  fontFamily:"Pretendard_medium", lineHeight:"24px", color:"#252525"}}>에너지 시장의 새로운 미래를 열어갈 당신을 기다립니다.</p>
        </div>
        <div className="let_go">
        <Link to="/CAREER"> 
            <div id="ch_button" style={{
                fontFamily: "Pretendard_semibold",
                backgroundColor: "none", marginTop:"10px",
                color: "#252525", width: "180px", borderRadius:'100px',
                // display: "inline-block",
                height: "70px",  verticalAlign:"middle", display:"table-cell",
                // paddingTop: 25,  
                fontSize: "20px", lineHeight: "25px",
                border:"2px solid #252525", boxSizing:"border-box"
            }}> 채용 바로가기</div>
        </Link>
    </div>
        </Typography>
        </Container>
    );
  }
}

export default Explore;