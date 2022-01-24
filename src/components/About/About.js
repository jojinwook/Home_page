import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import About_Main from '../../images/ABOUT_Main.png'
import mobile_About_Main from '../../images/mobile_About/img.png'
import  useMediaQuery  from '@mui/material/useMediaQuery';

// import Acontents from './Abcontents'
// import Aboutconpany from './Aboutconpany'
// import Acotentesco from './Abcontents_sang'

// import backimg from '../images/image_29.png'

// import { CSSTransition, SwitchTransition } from 'react-transition-group';
import '../Main.css'





const About = () => {
  const max768 = useMediaQuery('(max-width:768px)')
    return (
        <React.Fragment>
            <Box
        sx={{
            display: 'inline-block',
            flexDirection: 'column',
            // minHeight: '90vh',
            maxWidth: "100%",
            backgroundColor: "#F5F8FA",
            // backgroundImage: `url(${backimg})`,
            backgroundSize: "100% 100%",
            height:"auto", width:"100%"
            // paddingTop:"5vw"
        }}
            >
                
     <CssBaseline />
     <Container component="main" style={{ /*marginTop: "15.6%",*/  marginBottom: 1, 
                maxWidth:"100%" , height:"auto"}} maxWidth="sm">
        <Typography className="About_title" variant='h1' gutterBottom style={{
                    }}>
            <p className="logo_text logo_text_about" style={{marginTop: "313px", fontFamily: "Pretendard", fontSize: "42px", fontStyle: "normal",
                       lineHeight:"40px", marginBottom: '28px'}}>
            재생에너지로 <br className="br_4" />지구를 지키는 방법을 <br className="br_4" /> 연구합니다.</p>
            
        
        </Typography> 
        <Typography> 
        <p className="about_subtxt" style={{fontFamily: "Pretendard_medium",  fontStyle: "normal",lineHeight:"30px"}}>
            전세계 기후 변화를 막기 위해 재생에너지를<br className="br_4" /> 늘리는 방안으로 <br className="br_web"/>
            다양한 종류의 분산자원을 IT기술로<br className="br_4" /> 연결하고, 예측 및 관리 가능하도록 가상발전소를 <br className="br_4" />구축합니다.</p>
          
        </Typography>
        {/* <img className="About_title_image" style={{marginTop:"5vw", maxWidth:"100%", height:"35vw"}}src={max768? mobile_About_Main:About_Main} alt="About_main" /> */}
        <img className="About_title_image" style={{marginTop:"5vw", maxWidth:"100%", height:"550px"}}src={max768? mobile_About_Main:About_Main} alt="About_main" />
    </Container>          
     </Box>
     {/* <About /> */}
     {/* <Acontents/>
     <Acotentesco/>
     <Aboutconpany/> */}
    
      </React.Fragment>
    );
  };

  export default About;
