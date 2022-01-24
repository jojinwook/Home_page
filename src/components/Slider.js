// import React, { useEffect, useState, useRef } from "react";
// import "./styles.css";
// import img1 from '../images/햇빛바람지도/map_1.jpg'
// import img2 from '../images/햇빛바람지도/map_2.jpg'
// import img3 from '../images/햇빛바람지도/map_3.jpg'
// import Button from '@mui/material/Button';
// import TOTAL_SLIDES from '@mui/material/TOTAL_SLIDES';


// import styled from 'styled-components';

// const IMG = styled.img`
//   width: 100%;
//   height: 70vh;
// `;

// const Container = styled.div`
//   width: 60%;
//   overflow: hidden;
// `;
// const Button = styled.button`
//   all: unset;
//   border: 1px solid coral;
//   padding: 0.5em 2em;
//   color: coral;
//   border-radius: 10px;
// `;
// const SliderContainer = styled.div`
//   width: 100%;
//   display: flex;
// `;

// function Slider() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slideRef = useRef(null);
  
//   const TOTAL_SLIDES = 2;
//   const images = [img1, img2, img3];
  

//   const nextSlide = () => {
//       if (currentSlide >= TOTAL_SLIDES) { 
//         setCurrentSlide(0);
//       } else {
//         setCurrentSlide(currentSlide + 1);
//       }
//     };

//   const prevSlide = () => {
//     if (currentSlide === 0) {
//       setCurrentSlide(TOTAL_SLIDES);
//     } else {
//       setCurrentSlide(currentSlide - 1);
//     }
//   };

//   useEffect(() => {
//     slideRef.current.style.transition = "all 0.5s ease-in-out";
//     slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; 
//   }, [currentSlide]);
// return (
//     <Container>
//        <SliderContainer ref={slideRef}>
//          {images.map((img, i) => <IMG src={img} key={i} />)}
//        </SliderContainer>
//        <Button onClick={prevSlide}>Previous Slide</Button>
//          <Button onClick={nextSlide}>Next Slide</Button>
//      </Container>
//   );
// }

// export default Slider;
