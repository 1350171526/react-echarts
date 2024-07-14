import Title from "./compoents/Title"
import MainLeft from './compoents/MainLeft'
import Main from "./compoents/Main"
import MainRight from './compoents/MainRight' 
import Bottom from './compoents/Bottom'
import * as datav from '@jiaminghi/data-view-react'
import './style.scss'
import { useEffect, useState } from "react"
import { getAllWeatherApi, getBaseWeatherApi } from "@/apis/getWeather"

function Home(){
  const [baseWeather,setBaseWeather] = useState([])
  const [allWeather,setAllWeather] = useState([])
  const getWeather = async () => {
    const getBaseWeather = getBaseWeatherApi()
    const getAllWeather = getAllWeatherApi()
    const res = await Promise.all([getBaseWeather,getAllWeather])
    setBaseWeather(res[0].data)
    setAllWeather(res[1].data)
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
            <div style={{flex: '0 1 25%'}}><MainLeft></MainLeft></div>
            <div style={{flex: '0 1 50%'}}><Main></Main></div>
            <div style={{flex: '0 1 25%'}}><MainRight></MainRight></div>
          </div>
          <Bottom></Bottom>
        </datav.FullScreenContainer>
    </div>
  </>
}

export default Home 