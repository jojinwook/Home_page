// import { SportsRugbySharp } from '@material-ui/icons';
import React from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
// import { Link } from 'react-router-dom';
// import ReactDOM from 'react-dom';


const Slide = (props) => {

    return (
      
      <React.Fragment>
        <div style={{maxWidth:"100%",
          width: "1678px", height: "547px",
          backgroundColor: "gray", borderRadius: "20px",
          boxShadow:"10px 10px 20px SportsRugbySharp(0, 0, 0, 0.2)",  backgroundRepeat:"no-repeat", 
          overflow: "hidden", position:"relative"
          // position: "relative"
        }}>
          <img style={{
            display: 'inline-block',
            flexDirection: 'column',
            // maxWidth: "100%", 
            // backgroundSize: "80% 80%"
            height:"900px", width:"1500px", 
            }} src={props.image.link} alt="Sliderr_image" />
        </div>
      </React.Fragment>
    );
  };
  const Banner = (props) => {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const slides = [
      {
        id: 1,
        title: "First Slide",
        link: "../../map_1.jpg"
        
      },
      {
        id: 2,
        title: "Second Slide",
        link: "../../map_2.jpg"
      },
      {
        id: 3,
        title: "Third Slide",
        link: "../../map_3.jpg"
      }
      
    ];
    React.useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentSlide((prev) => {
          return prev + 1 === slides.length ? 0 : prev + 1;
        });
      }, 4000);
      return () => {
        clearInterval(intervalId);
      };
    }, [slides.length]);
    return (
      <React.Fragment>
        <Slide
          image={slides[currentSlide]}
        />
      </React.Fragment>
    );
  };
export default Banner;