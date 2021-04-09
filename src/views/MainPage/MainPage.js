import React,{useEffect, useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";

import HeaderLinks from "components/Header/HeaderLinks.js";

import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import Video from "components/Video/Video";
import './assets/css/style.css';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AirplanemodeActiveSharpIcon from '@material-ui/icons/AirplanemodeActiveSharp';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import CloudIcon from '@material-ui/icons/Cloud';


const useStyles = makeStyles(styles);
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function MainPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const one = [
    {
      name:"제주공항",
      url:"http://123.140.197.51/media/contents/live/33"
    },
    {
      name:"용두암 해안",
      url:"chrome-extension://ckblfoghkjhaclegefojbgllenffajdc/player.html#http://59.8.86.15:1935/live/51.stream/playlist.m3u8"
    },
 

  ]
  const nam = [
    {
      name:"서귀포 항",
      url:"chrome-extension://ckblfoghkjhaclegefojbgllenffajdc/player.html#http://123.140.197.51/stream/35/play.m3u8"
    },
    {
      name:"법환포구",
      url:"chrome-extension://ckblfoghkjhaclegefojbgllenffajdc/player.html#http://59.8.86.15:1935/live/54.stream/playlist.m3u8"
    },
    {
      name:"법환 해안",
      url:"chrome-extension://ckblfoghkjhaclegefojbgllenffajdc/player.html#http://59.8.86.15:1935/live/55.stream/playlist.m3u8"
    },
    {
      name:"중문 해안",
      url:"chrome-extension://ckblfoghkjhaclegefojbgllenffajdc/player.html#http://59.8.86.15:1935/live/59.stream/playlist.m3u8"
    },
  
  ]

  const hae = [
    {
      name:"하얏트 호텔:중문색달해변",
      url:"http://bangjae.jeju.go.kr//tool/cctv/cctv_map.jsp?area=108"
    },
    {
      name:"라다마 호텔:제주 탑동해변",
      url:"http://bangjae.jeju.go.kr//tool/cctv/cctv_map.jsp?area=100"
    },
  
  ]

  const three = [
    {
      name:"성산 일출봉",
      url:"http://123.140.197.51/media/contents/live/34"
    },
    {
      name:"온평 해안",
      url:"chrome-extension://ckblfoghkjhaclegefojbgllenffajdc/player.html#http://59.8.86.15:1935/live/56.stream/playlist.m3u8"
    },
  
  ]
  const west=[
    {
      name:"신창 해안",
      url:"chrome-extension://ckblfoghkjhaclegefojbgllenffajdc/player.html#http://59.8.86.15:1935/live/63.stream/playlist.m3u8"
    },
    {
      name:"화순 해안",
      url:"chrome-extension://ckblfoghkjhaclegefojbgllenffajdc/player.html#http://59.8.86.15:1935/live/60.stream/playlist.m3u8"
    },
  ]

  const hanra=[
    {
      name:"백록담",
      url:"chrome-extension://ckblfoghkjhaclegefojbgllenffajdc/player.html#http://119.65.216.155:1935/live/cctv01.stream_360p/playlist.m3u8"
    },
    {
      name:"왕관릉",
      url:"chrome-extension://ckblfoghkjhaclegefojbgllenffajdc/player.html#http://119.65.216.155:1935/live/cctv02.stream_360p/playlist.m3u8"
    },
    {
      name:"윗세 오름",
      url:"chrome-extension://ckblfoghkjhaclegefojbgllenffajdc/player.html#http://119.65.216.155:1935/live/cctv03.stream_360p/playlist.m3u8"
    },
    {
      name:"어승생악",
      url:"chrome-extension://ckblfoghkjhaclegefojbgllenffajdc/player.html#http://119.65.216.155:1935/live/cctv04.stream_360p/playlist.m3u8"
    },


  ]
  useEffect(()=>{

  },[urlMap])
    
  
  const [value, setValue] = useState(0);
  const [urlMap,seturlMap] = useState(one);
  const handleChange = (event, newValue) => {

    if(newValue===0){
      console.log("asdasd")
      seturlMap(one);
    }else if(newValue===1){
      seturlMap(nam);
    }else if(newValue===2){
      seturlMap(three);
    }else if(newValue===3){
      seturlMap(west);
    }else if(newValue===4){
      seturlMap(hae);
    }else if(newValue===5){
      seturlMap(hanra);
    }
    setValue(newValue);
  };

  return (
    <div>
      <Header
        color="transparent"
        brand="제주도 날씨"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/jeju-74956.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>

        </div>
        <div className="Iconlist">
        <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab icon={<AirplanemodeActiveSharpIcon/>} label="제주도 북부" {...a11yProps(0)} />
          <Tab icon={<Brightness7Icon/>} label="제주도 남부" {...a11yProps(1)} />
          <Tab icon={<Camera/>} label="제주도 동부" {...a11yProps(2)} />
          
          <Tab icon={<Palette/>} label="제주도 서부" {...a11yProps(3)} />
          <Tab icon={<Favorite/>} label="제주도 해변" {...a11yProps(4)} />
          <Tab icon={<CloudIcon/>} label="한라산" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
        </div>
        <div className="IframeDiv">
          <Video urlMap={urlMap}/>
          
        </div>
        <div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
