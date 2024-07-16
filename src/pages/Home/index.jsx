import Title from "./compoents/Title"
import MainLeft from './compoents/MainLeft'
import Main from "./compoents/Main"
import MainRight from './compoents/MainRight' 
import Bottom from './compoents/Bottom'
import * as datav from '@jiaminghi/data-view-react'
import './style.scss'
import { useEffect, useState } from "react"
import { getBaseWeatherApi } from "@/apis/getWeather"
import loadingMp4 from '@/assets/video/loading.mp4'
import bgvideo from '@/assets/video/home-bgvideo3.mp4'

function Home(){
  const [isShowApp,setShowApp] = useState(false)
  const [bgvideoShow,setBgvideoShow] = useState(false)
  const [baseWeather,setBaseWeather] = useState([])
  const getWeather = async () => {
    const getBaseWeather =await getBaseWeatherApi()
    setBaseWeather(getBaseWeather.data)
  }
  useEffect(()=>{
    getWeather()
    let timer1 = setTimeout(()=>{
      setShowApp(true)
      setBgvideoShow(true)
      clearTimeout(timer1)
    },2100)
    let timer2 = setTimeout(()=>{
      setBgvideoShow(false)
      console.log(bgvideoShow);
      clearTimeout(timer2)
    },5500)
  },[])
  if(!isShowApp){
    return <>
      <div className="home-video">
				<video muted autoPlay loop src={loadingMp4}></video>
			</div>
    </>
  }else{
    return <>
    <div className="content">
      <div className="bg"></div>
      <datav.FullScreenContainer>
        <Title></Title>
        <div style={{display: 'flex',width: '100%'}}>
          <div style={{flex: '0 1 25%'}}><MainLeft baseWeather={baseWeather}></MainLeft></div>
          <div style={{flex: '0 1 50%'}}><Main></Main></div>
          <div style={{flex: '0 1 25%'}}><MainRight baseWeather={baseWeather}></MainRight></div>
        </div>
        <Bottom baseWeather={baseWeather}></Bottom>
      </datav.FullScreenContainer>
      <div className="home-video" style={{display: bgvideoShow ? 'block' : 'none'}}>
				<video autoPlay loop muted src={bgvideo}></video>
			</div>
    </div>
    </>
  }
}

export default Home 