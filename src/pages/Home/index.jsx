import Title from "./compoents/Title"
import MainLeft from './compoents/MainLeft'
import Main from "./compoents/Main"
import MainRight from './compoents/MainRight' 
import Bottom from './compoents/Bottom'
import * as datav from '@jiaminghi/data-view-react'
import './style.scss'
import { chinaCityCodes } from "@/utils/getMap"
import { useEffect, useState } from "react"
import { getBaseWeatherApi } from "@/apis/getWeather"
import loadingMp4 from '@/assets/video/loading.mp4'
import bgvideo from '@/assets/video/home-bgvideo3.mp4'

function Home(){
  const [isShowApp,setShowApp] = useState(false)
  const [bgvideoShow,setBgvideoShow] = useState(false)
  const [baseWeather,setBaseWeather] = useState([])
  const [isloading,setLoading] = useState(true)
  // 获取基本天气信息
  const getWeather = async () => {
    const getBaseWeather =await getBaseWeatherApi(chinaCityCodes)
    setBaseWeather(getBaseWeather.data)
    setLoading(false)
  }
  // 点击区域后更新天气信息
  const updateCode = async (codeArr) => {
    setLoading(true)
    const res = await getBaseWeatherApi(codeArr)
    setBaseWeather(res.data)
    setLoading(false)
  }
  const [mainCityCode,setMainCityCode] = useState([110000])
  const [cityNamed,setNamed] = useState('首都')
  // 更新主要城市code
  const updataMainCityCode = (code) => {
    if(code[0]%100 !== 0) code = [Math.floor(code[0]/100)*100]
    setMainCityCode(code)
    cityNamed === '首都' ? setNamed('省会') : setNamed('首都')
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
          <div style={{flex: '0 1 25%'}}><MainLeft baseWeather={baseWeather} isloading={isloading}></MainLeft></div>
          <div style={{flex: '0 1 50%'}}><Main updateCode={updateCode} updataMainCityCode={updataMainCityCode}></Main></div>
          <div style={{flex: '0 1 25%'}}><MainRight baseWeather={baseWeather} mainCityCode={mainCityCode} isloading={isloading} cityNamed={cityNamed}></MainRight></div>
        </div>
        <Bottom baseWeather={baseWeather} mainCityCode={mainCityCode} isloading={isloading} cityNamed={cityNamed}></Bottom>
      </datav.FullScreenContainer>
      <div className="home-video" style={{display: bgvideoShow ? 'block' : 'none'}}>
				<video autoPlay loop muted src={bgvideo}></video>
			</div>
    </div>
    </>
  }
}

export default Home 