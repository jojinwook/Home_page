// import * as React from 'react';
import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import img from '../../images/gobu.png'
import img_2 from '../../images/sanjabu.png'
import img_3 from '../../images/sobu.png'
import img_4 from '../../images/hang_bu.png'

// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import lg from './image/Frame 140.png'
// import icon from '../../images/Vector.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
// import  useMediaQuery  from '@mui/material/useMediaQuery';



class Explore extends Component {
  componentDidMount() {
    AOS.init();
  }

  render() {

    return (
      <section id="marign_test_test" style={{
        maxWidth: "100%", width: "100%", height: "auto", backgroundColor: "#fff",
        paddingTop: "180px", display: "inline-block", 
        // marginTop: "-15vw"
      }}>
        <div className="container" style={{ margin: 0, maxWidth: "100%", width: "100%", height: "auto" }}>
          <div id="gray_back_test" className="row" style={{ maxWidth: "100%", margin: 0 }}>

            <div className="col s12 m4" style={{ margin: '0 0 0 6%', width: "22%", height: "auto"}}>
              <div id="about_scrolling_box" className="card"
                data-aos="fade-up"
                // data-aos-delay="550"
                data-aos-delay="0"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                style={{
                  overflow: "hidden",
                  height: "auto",
                  margin: 0,
                  textAlign: "center",
                  fontFamily: "Pretendard_medium",
                  fontSize: "20px", paddingBottom: "50px",
                  backgroundColor: "#F5F8FA", boxShadow: "none"
                }}>
                <img id="about_img" style={{ height: "35px", marginTop: "4.5vw" }} src={img_4} alt="con" />
                <div id="bottom_top_text" className="subName" style={{ fontFamily: "Pretendard_semibold", textAlign: "center", fontSize: "20px", paddingBottom: "24px" }}>
                  제9회 범정부 공공데이터 활용<br className="yes" /> <br className='no'/>
                   창업경진대회<br className='test_yes'/> 대통령상
                  <p style={{ fontFamily: "Pretendard_light", margin: 0 }}>2021.11</p>
                </div>

              </div>
            </div>


            <div className="col s12 m4" style={{ margin: 0, width: "22%", height: "auto" }}>
              <div id="about_scrolling_box" className="card"
                data-aos="fade-up"
                // data-aos-offset="200"
                // data-aos-delay="100"
                data-aos-delay="200"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                style={{
                  margin: 0,
                  textAlign: "center",
                  fontFamily: "Pretendard_medium",
                  fontSize: "20px",
                  //  height: "270px",
                  overflow: "hidden",
                  height: "auto", paddingBottom: "50px",
                  backgroundColor: "#F5F8FA", boxShadow: "none"
                }}>
                <img id="about_img" style={{ height: "35px", marginTop: "4.5vw" }} src={img} alt="con" />
                <div id="bottom_top_text" className="subName" style={{ fontFamily: "Pretendard_semibold", textAlign: "center", fontSize: "20px", paddingBottom: "24px" }}>
                  2021 소셜벤처 경연대회<br className='no'/>
                  일반부문 대상<br className="yes" /><br className='test_yes'/>(국무총리상)
                  <p style={{ fontFamily: "Pretendard_light", margin: 0 }}>2021.10</p>
                </div>

              </div>
            </div>

            <div className="col s12 m4" style={{ margin: 0, width: "22%", height: "auto" }}>
              <div id="about_scrolling_box" className="card"
                data-aos="fade-up"
                // data-aos-delay="400"
                data-aos-delay="400"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                style={{
                  margin: 0,
                  textAlign: "center",
                  // marginLeft: "-2vw",
                  fontFamily: "Pretendard_medium",
                  fontSize: "20px",
                  // height: "270px",
                  overflow: "hidden", paddingBottom: "50px",
                  height: "auto",
                  backgroundColor: "#F5F8FA", boxShadow: "none"
                }}>
                <img id="about_img" style={{ height: "35px", marginTop: "4.5vw" }} src={img_2} alt="con" />
                <div id="bottom_top_text" className="subName" style={{ fontFamily: "Pretendard_semibold", textAlign: "center", fontSize: "20px", paddingBottom: "24px" }}>
                  공공데이터활용 BI 공모전 대상<br />
                  (산업통상자원부 장관상)
                  <p style={{ fontFamily: "Pretendard_light", margin: 0 }}>2021.08</p>
                </div>
              </div>
            </div>

            <div className="col s12 m4" style={{ width: "22%", marginBottom: "10vw" }}>
              <div id="about_scrolling_box" className="card"
                data-aos="fade-up"
                // data-aos-delay="550"
                data-aos-delay="600"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                style={{
                  overflow: "hidden",
                  height: "auto",
                  margin: 0,
                  textAlign: "center",
                  fontFamily: "Pretendard_medium",
                  fontSize: "20px", paddingBottom: "50px",
                  backgroundColor: "#F5F8FA", boxShadow: "none"
                }}>
                <img id="about_img" style={{ height: "35px", marginTop: "4.5vw" }} src={img_3} alt="con" />
                <div id="bottom_top_text" className="subName" style={{ fontFamily: "Pretendard_semibold", textAlign: "center", fontSize: "20px", paddingBottom: "24px" }}>
                  사회적경제박람회 소셜벤처IR 대상<br />
                  (중소벤처기업부 장관상)
                  <p style={{ fontFamily: "Pretendard_light", margin: 0 }}>2021.07</p>
                </div>

              </div>
            </div>


          </div>
        </div>
        {/* </section>
        <section id="adventure"  style={{
            width:"100%", height: "auto", backgroundColor:"#fff",
          }}>
            <div style={{marginTop:"15vw", maxWidth:"100%", height:"auto" }}>
              
              
              
              <div  style={{maxWidth:"100%", height:"auto", display:"inline-block"}}>
                <div style={{maxWidth:"100%", height:"auto"}}>
                  <div  style={{
                    textAlign: "center", 
                    fontFamily: "Pretendard_medium",
                     fontSize: "26px",
                   backgroundColor:"#F5F8FA", 
                    width:"550px",height:"352px",boxShadow:"none",marginLeft:"-7vw"
                  }}>
                    <img style={{width:"175px",height:"52px",marginTop:"18%"}} src={img} alt="con" />
                    <div className="card-content" style={{height:"auto",marginTop:"-5%"}}>
                      {'2021 소셜벤처 경연대회'}<br />
                      {'일반부문 대상(국무총리상)'}<br />
                      {'2021.10'}
                      
                    </div>
                </div>    
                </div>

                <div >
                  <div  style={{
                    textAlign: "center", 
                    fontFamily: "Pretendard_medium",
                     fontSize: "26px",
                   backgroundColor:"#F5F8FA", 
                    width:"550px",height:"352px",boxShadow:"none",marginLeft:"-1vw"
                  }}>
                    <img style={{width:"175px",height:"52px",marginTop:"18%"}} src={img} alt="con" />
                    <div className="card-content" style={{height:"auto", marginTop:"-5%"}}>
                      {'2021 소셜벤처 경연대회'}<br />
                      {'일반부문 대상(국무총리상)'}<br />
                      {'2021.10'}
                      
                    </div>
                </div>    
                </div>


                <div >
                  <div  style={{
                    textAlign: "center", 
                    fontFamily: "Pretendard_medium",
                     fontSize: "26px",
                   backgroundColor:"#F5F8FA", 
                    width:"550px",height:"352px",boxShadow:"none",marginLeft:"5vw"
                  }}>
                    <img style={{width:"175px",height:"52px",marginTop:"18%"}} src={img} alt="con" />
                    <div style={{height:"auto", marginTop:"-5%"}}>
                      {'2021 소셜벤처 경연대회'}<br />
                      {'일반부문 대상(국무총리상)'}<br />
                      {'2021.10'}
                      
                    </div>
                </div>    
                </div>
                </div>

            </div>
          </section> */}


      </section>

    );
  }
}

export default Explore;