import './App.css';
import React from 'react';
// import About from './About';
// import Home from './Home';
import { Route } from 'react-router-dom';
// import { Link} fr om "react-router-dom";
import Header from './Layout/Header';
import Footer from './Layout/Footer/Footer';
// import Home from './components/Home';
import Main from './components/Main';
import ScrollBar from './components/ScrollBar'
import Contents from './components/Contents/Contents';
import LogoContents from './components/LogoContents';
import Employment from './components/Employment';
import About from './components/About/About';
import Aboutmenber from './components/About/Aboutmenber'
import Business from './components/Business/Titile'
import BBusiness from './components/Business/Twotitile'
// import One from './components/Business/One'

import Career from './components/Career/Career'


import Acontents from './components/About/Abcontents'
import Aboutconpany from './components/About/Aboutconpany'
import Acotentesco from './components/About/Abcontents_sang'



// import Lollingtext from './components/Lollingtext'

// import Banner from './components/Banner/Banner';
// import logo from './test.png';
// import Slider from './components/Slider'
// import Test from './App'

function App() {
  const ScrollToTop = () => {
    window.scrollTo(0, 0)
    return null
  }


  return (
    <div className="App">
      
      <Header/> 


      <Route path={['/', '/HOME']} component={Main} exact/>
      
      <Route path='/ABOUT' component={About} />
      <Route path='/ABOUT' component={Acontents} /> 
      <Route path='/ABOUT' component={Acotentesco} />
      <Route path='/ABOUT' component={Aboutconpany} /> 
      

      <Route path='/BUSINESS' component={Business} /> 
      <Route path='/BUSINESS' component={BBusiness} /> 
      {/* <Route path='/BUSINESS' component={One} />  */}
      
      <Route path='/CAREER' component={Career} />
      {/* <Route path='/CAREER' component={Carcon} /> */}

      <Route path={['/', '/HOME']} component={ScrollBar} exact/>
      <Route path={['/', '/HOME']} component={Contents} exact/>
      <Route path={['/', '/HOME']} component={LogoContents} exact/>
      {/* <Route path='/ABOUT' component={Aboutconpany} /> */}
      <Route path='/ABOUT' component={Aboutmenber} />
      <Route path={['/','/HOME', '/ABOUT', '/BUSINESS']} component={Employment} exact/>
      <Route path={['/', '/HOME', '/ABOUT', '/BUSINESS']} component={Footer} />

      <Route component={ScrollToTop} />


      {/* <Route path={['/', '/HOME', '/ABOUT']} component={Lollingtext} /> */}
    </div>
  );
}

export default App;

