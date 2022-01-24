import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom'
// import { height, lineHeight } from '@mui/system';
// import { height } from '@mui/system';
// import Link from '@mui/material/Link';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
// import hz from './image/60hz.png'


// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary">
//       {''}
//       <Link color="inherit" href="https://google.com">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }


export default function StickyFooter() {
  return (
    // <Box
    //   sx={{
    //     display: 'flex',
    //     flexDirection: 'column',
    //     minHeight: '100vh',
    //   }}
    // >
    //   <CssBaseline />
    //   <Container component="main" sx={{ mt: 15, mb: 2 }} maxWidth="sm">
    //     <Typography variant='h5' gutterBottom>
    //               {'깨끗한 에너지가 중심이 되는 세상을 꿈꾸는'} <br />
    //               {'에너지 IT 소셜벤처입니다.'}        
    //     </Typography> 
    //   </Container>
    //   <Box direction="row" spacing={2}>
    //     <Button variant="contained">더 알아보기</Button>
    //   </Box>



    <Box id="footer_background"
      component="footer"
      sx={{
        // py: 14,
        // pb: 20,
        width: "100%",
        height: "auto",
        // maxWidth:"100%", display: "inline-block",
        // px: 2,
        // mt: 'auto',
        // backgroundColor: (theme) =>
        //   theme.palette.mode === 'light'
        //     ? theme.palette.grey[200]
        //     : theme.palette.grey[800],
        backgroundColor: "#F4F5F7",
      }}
    >
      <Container className="footer_text" style={{ maxWidth: "1190px", margin: '0 auto' }}>
        <div
          className="footer-main"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            textAlign: 'left',
            lineHeight: "30px",
            fontSize: "16px",
            color: "#6C6C6C"
          }}
        >
          <div className="left-footer"
            style={{
              fontFamily: "Pretendard_regular",
              display: 'flex',
              justifyContent: 'start'
            }}
          >
            <div className="left_position"
              style={{
                display: 'flex',
                justifyContent: 'start'
              }}
            >
              <div style={{
                marginRight: '70px',
              }}>
                <p style={{ fontWeight: "bold", margin: 0, fontFamily: "Pretendard_medium" }}>채용문의</p>
                <div className="footer_normal" onClick={() => window.location = 'mailto:hr@60hz.io'} style={{cursor: 'pointer'}}>hr@60hz.io</div>
              </div>

              <div id="footer-sub" style={{
                marginRight: '70px',
                textAlign: "left"
              }}>
                <p style={{ fontWeight: "bold", margin: 0, fontFamily: "Pretendard_medium" }}>기타문의</p>
                <div className="footer_normal" onClick={() => window.location = 'mailto:hello@60hz.io'} style={{cursor: 'pointer'}}>hello@60hz.io</div>
              </div>
            </div>

            <div id="footer-60hz" style={{
              // marginRight: '100px'
            }}>
              <p style={{ fontWeight: "bold", margin: 0, fontFamily: "Pretendard_medium" }}>식스티헤르츠</p>
              <Link to="/ABOUT"><div className="footer_normal" style={{ color: '#6C6C6C' }}>ABOUT</div></Link>
              <Link to="/BUSINESS"><div className="footer_normal" style={{ color: '#6C6C6C' }}>BUSINESS</div></Link>
              <Link to="/CAREER"><div className="footer_normal" style={{ color: '#6C6C6C' }}>CAREER</div></Link>
            </div>
          </div>
          <div className="right-footer" style={{
            fontFamily: "Pretendard_regular",
            // fontSize: "1px"
          }}>

            <div className="footer_normal" ><span style={{ fontWeight: "bold", fontFamily: 'Pretendard' }}>식스티헤르츠 주식회사</span> | 대표 : 김종규 </div>
            <div className="footer_normal">사업자등록번호 : 878-88-01768</div>
            <div className="footer_normal">서울시 중구 명동길 73 6층 602호</div>
          </div>
        </div>

      </Container>

      {/* <section id="adventure" className="section section-popular scrollspy">
        <div className="container">
          <div className="row">
            <div className="col s12 m4">
              <div className="card">
                <div className="card-content">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas aliquid fugiat corporis laudantium, architecto
                    delectus?
                  </p>
                </div>
                
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card">
                <div className="card-content">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas aliquid fugiat corporis laudantium, architecto
                    delectus?
                  </p>
                </div>
                
              </div>
            </div>
            <div className="col s12 m4">
              <div className="">
                <div className="card-content">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas aliquid fugiat corporis laudantium, architecto
                    delectus?
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section> */}

    </Box>

    // </Box>
  );
}
