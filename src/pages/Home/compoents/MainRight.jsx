import * as datav from '@jiaminghi/data-view-react'
import { useEffect, useState } from 'react'
import { getOneWeatherApi } from '@/apis/getWeather'
function Right({baseWeather}){
    const [isLoading,setLoading] = useState(false)
    // 获取省会城市温度
    const [circleChartValue,setCircleChartValue] = useState(0)
    const getOneWeather = async () => {
      const res = await getOneWeatherApi()
      setCircleChartValue(+res.data.temperature)
    }
    const circleChartOption = {
      title: {
        text: '省会城市温度表',
        style: {
          fill: '#fff'
        }
      },
      series: [
        {
          type: 'gauge',
          min: -30,
          max: 50,
          data: [ { name: 'itemA', value: circleChartValue, gradient: ['#37A1DA', '#37A2DA', '#FFDB5C', '#DD5145']}],
          center: ['50%', '55%'],
          axisLabel: {
            formatter: '{value}℃',
            style: {
              fill: '#fff'
            }
          },
          details: {
            show: true,
            offset: [0, 50],
            formatter: '{value}℃'
          },
          axisTick: {
            style: {
              stroke: '#fff'
            }
          },
          animationCurve: 'easeInOutBack'
        }
    ]}

    // 获取温度最高的前五位城市温度
    baseWeather.sort((a,b)=>{
      if(a.lives[0].temperature>b.lives[0].temperature){
        return -1
      }else if(a.lives[0].temperature<b.lives[0].temperature){
        return 1
      }
      return 0
    })
    const data = baseWeather.slice(0,5).map((item)=>{
      return {name:`${item.lives[0].city}`,value:parseInt(`${item.lives[0].temperature}`)}
    })
    const dynamicCircleChartOption = {
      data: data,
      color: ['#DD5145','#FFDB5C','#9FE6B8','#37A2DA','#32C5E9'],
      showOriginValue: true
    }
  // 获取实时省会城市温度
  useEffect(()=>{
    !circleChartValue && getOneWeather()
    if(baseWeather && circleChartValue){
      setLoading(true)
    }
    //客户端与服务端连接
    if(!circleChartValue){
      const ws = new WebSocket("ws://192.168.1.9:3002");
      //成功回调
      ws.onopen = () => {
        console.log("Websocket连接成功");
      }
      //错误回调
      ws.onerror =function(err){
        console.log("Websocket连接发生错误")
      };
      //接收消息
      ws.onmessage = (msg) =>{
        if(+JSON.parse(msg.data).temperature !== circleChartValue){
          setCircleChartValue(+JSON.parse(msg.data).temperature)
        }
      }
    }
  },[circleChartValue,baseWeather])
  if(isLoading){
    return <>
    <div>
      <datav.BorderBox12 style={{width: '100%',height: '225px'}}>
        <datav.Charts option={circleChartOption} />  
      </datav.BorderBox12>
      <datav.BorderBox13 style={{width: '100%',height: '225px'}}>
        <div style={{textAlign: 'center',fontWeight: 'bolder'}}>单位：摄氏度(℃)</div>
        <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}>
          <datav.ActiveRingChart config={dynamicCircleChartOption} style={{ width: '300px', height: '300px'}} />
        </div>
      </datav.BorderBox13>
    </div>
    </>
  }else{
    return <>
    <div>
      <datav.BorderBox12 style={{width: '100%',height: '225px'}}>
        <datav.Loading>Loading...</datav.Loading>
      </datav.BorderBox12>
      <datav.BorderBox13 style={{width: '100%',height: '225px'}}>
        <datav.Loading>Loading...</datav.Loading>
      </datav.BorderBox13>
    </div>
    </>
  }
  
}

export default Right