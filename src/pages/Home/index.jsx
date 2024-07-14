import Title from "./compoents/Title"
import MainLeft from './compoents/MainLeft'
import Main from "./compoents/Main"
import MainRight from './compoents/MainRight' 
import Bottom from './compoents/Bottom'
import * as datav from '@jiaminghi/data-view-react'
import './style.scss'
import { useEffect, useState } from "react"
import { getBaseWeatherApi } from "@/apis/getWeather"

function Home(){
  const [baseWeather,setBaseWeather] = useState([])
  const getWeather = async () => {
    const getBaseWeather =await getBaseWeatherApi()
    setBaseWeather(getBaseWeather.data)
  }
  useEffect(()=>{
    getWeather()
  },[])
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
    </div>
  </>
}

export default Home 