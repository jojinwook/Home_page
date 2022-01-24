import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  // Button,
  IconButton,
  Drawer,
  // Link,
  MenuItem,
  // formatMs,
} from "@material-ui/core";

import { useScroll } from '../hoc/scroll'

import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import { Link } from "react-router-dom";
// import logo from "../images/logo_g.png"
import logo from "../images/logo.svg"
import CloseIcon from '@mui/icons-material/Close';
// import { color } from "@mui/system";
// import { red } from "@mui/material/colors";

// import { red } from "@material-ui/core/colors";
// import './Header.css'

const headersData = [
  {
    label: "햇빛바람지도",
    href: "https://map.60hz.io/index.html",
  },
  {
    label: "ABOUT",
    href: "/ABOUT",
  },
  {
    label: "BUSINESS",
    href: "/BUSINESS",
  },
  {
    label: "CAREER",
    href: "/CAREER",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    // fontWeight: 1000,
    backgroundColor: "transparent",
    // paddingRight: "79px",
    paddingTop: "5px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,

    },
  },
  logo: {
    fontWeight: 600,
    // color: "black",
    textAlign: "left",
  },

  menuButton: {
    fontWeight: 700,
    size: "18px",
    color: "#252525", /* 메뉴 기본 컬러 */
    backgroundColor: "transparent",
    marginLeft: "10px",
    marginRight: "5vw"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 0 0 30px"
  },
  drawerContainer: {
    padding: "20px 30px",

  },

  span: {
    borderRadius: "0"
  },



}));

export default function Header() {
  const history = useHistory();
  const location = useLocation();
  const { scrollY } = useScroll();


  const { header, menuButton, toolbar, drawerContainer } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}

      >
        {femmecubatorLogo}
        <div className="navBtns">{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const handleDrawerOpen = () => {
    setState((prevState) => ({ ...prevState, drawerOpen: true }));
  }
  const handleDrawerClose = () => {
    setState((prevState) => ({ ...prevState, drawerOpen: false }));

  }
  const displayMobile = () => {

    return (
      <Toolbar
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <div
        >{femmecubatorLogo}
        </div>
        <IconButton
          {...{
            edge: "start",
            color: "#000",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "top",
            open: drawerOpen,
            onClose: handleDrawerClose,

          }}

        >
          <div
            style={{
              margin: '20px 52px 20px 15px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            {femmecubatorLogo}

            <CloseIcon id="closeicon"
              style={{
                height: "50px",
                width: "38px",
                cursor: 'pointer',
                // marginRight: "-30px",
                marginRight: "-20px",
                color: '#15346E'

              }}
              onClick={handleDrawerClose}
            />
          </div>
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <span
          onClick={
            () => {
              if (href.indexOf('https') >= 0) {
                window.open(href, '_blank')
              } else {
                history.push(href)
                handleDrawerClose()
                refreshPage()
              }
            }
          }
          {...{
            // component: RouterLink, 
            // to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}

        >
          <MenuItem>{label}</MenuItem>
        </span>
        
      );
    });
  };

  const femmecubatorLogo = (
    <Link to="/HOME">
      <Typography variant="h6" component="h1" className={logo} >
        <img id="logo_logo" className="logo"
          style={{
            // marginLeft: "-20px",
            // marginTop: "8px",
            height: "25px",
            // top: "-2px",
            left: "10px"
          }} src={logo} alt="logo" onClick={handleDrawerClose} />
      </Typography>
    </Link>
  );

  const getMenuButtons = () => {

    return headersData.map(({ label, href }) => {
      return (
        <div className="mmain" style={{ display: 'inline-block', width: "220px" }}>
          {/* <a onClick={refreshPage}> */}
          <a className="header_bar" style={{
            fontSize: "14px",
            fontFamily: location.pathname.indexOf(href) >= 0 ? 'Pretendard_extrabold' : 'Pretendard_regular', cursor: "pointer"
          }}
            onClick={
              () => {
                if (href.indexOf('https') >= 0) {
                  window.open(href, '_blank')
                } else {
                  history.push(href)
                  handleDrawerClose()
                  refreshPage()
                }
                // if (href.indexOf('http') >= 0) {
                //   window.location.href = href
                // } else {
                //   history.push(href)
                //   refreshPage()
                // }
              }
            }
            {...{
              key: label,
              color: "inherit",
              // to: href,
              // component: RouterLink,
              className: menuButton,
            }}
          >
            {label}

          </a>
          {/* </a> */}
        </div>
      );
    });
  };

  function refreshPage() {
    window.location.reload();
    
  }


  return (
    <header style={{ boxShadow: 'none' }}>
      <AppBar className={header}
        style={{
          boxShadow: 'none',
          //: 'transparent',
          // boxShadow: scrollY > 30 ? '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)' : 'none', 
          background: scrollY > 30 ? 'rgb(255 255 255 / 98%)' : 'transparent',
          //  backgroundColor: scrollY > 30 ? 'rgb(255 255 255)' : 'none'
          borderBottom: scrollY > 30 ? '1px solid rgb(218 218 218)' : 'none'
          //  boxShadow: scrollY > 30 ? '0 0 0 0 rgb(255 255 255 / 98%)' : 'none',

          //  backdropFilter: scrollY > 30 ? 'saturate(180%) blur(20px)' : 'none'
          //  backdropFilter: scrollY > 30 ? 'opacity(90%)' : 'none'

        }}
      >
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>


  );


}