import * as datav from '@jiaminghi/data-view-react'
import * as echarts from 'echarts';
import { useEffect, useState } from 'react';
import { getAllWeatherApi } from "@/apis/getWeather"
import {getColorByTemperature, getColorByHumidity} from '@/utils/getColor'
function Bottom({baseWeather}){
  const [isLoading,setLoading] = useState(false)
  // 计算平均温度
  const sumTemperature = baseWeather.reduce((total, num) => total + parseInt(num.lives[0].temperature), 0);
  const averageTemperature = parseInt((sumTemperature / baseWeather.length).toFixed(0));
  const temperatureColor = getColorByTemperature(averageTemperature)
  const averageTemperatureOption = {
    data: [averageTemperature+30],
    shape: 'roundRect',
    formatter: `${averageTemperature}℃`,
    waveHeight: 30,
    colors: [temperatureColor],
    waveOpacity: 0.5
  }
  // 计算平均湿度
  const sumHumidity = baseWeather.reduce((total, num) => total + parseInt(num.lives[0].humidity), 0);
  const averageHumidity = (sumHumidity / baseWeather.length).toFixed(0);
  const humidityColor = getColorByHumidity(averageHumidity)
  const averageAQIOption = {
    data: [averageHumidity],
    shape: 'roundRect',
    formatter: '{value}%',
    waveHeight: 30,
    colors: [humidityColor],
    waveOpacity: 0.5
  }
  // 创建图表
  let getAllWeather;
  const createChart = async () => {
    // 获取图表数据
    getAllWeather = await getAllWeatherApi()
    const provincialCapitalData = {category:[],Highest:[],Lowest:[]}
    getAllWeather.data[0].forecasts[0].casts.forEach((item)=>{
      switch (item.week) {
        case '1':
          item.week = 'Mon'
          break;
        case '2':
          item.week = 'Tue'
          break;
        case '3':
          item.week = 'Wed'
          break;
        case '4':
          item.week = 'Thu'
          break;
        case '5':
          item.week = 'Fri'
          break;
        case '6':
          item.week = 'Sat'
          break;
        case '7':
          item.week = 'Sun'
          break;
        default:
          break;
      }
      provincialCapitalData.category.push(item.week)
      provincialCapitalData.Highest.push(parseInt(item.daytemp))
      provincialCapitalData.Lowest.push(parseInt(item.nighttemp))
    })
    const lineChart = document.getElementById('lineChart');
    const createLineChart = echarts.init(lineChart)
    const lineChartOption = {
      title: {
        text: '省会城市四天内温度'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        boundaryGap: true,
        data: provincialCapitalData.category
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} °C'
        },
        interval: 6,
        // splitNumber: 5,
      },
      series: [
        {
          name: 'Highest',
          type: 'line',
          data: provincialCapitalData.Highest,
        },
        {
          name: 'Lowest',
          type: 'line',
          data: provincialCapitalData.Lowest,
        }
      ]
    };
    lineChartOption && createLineChart.setOption(lineChartOption)
  }
  useEffect(()=>{
    if(!getAllWeather){
      createChart()
    }
    if(baseWeather){
      setLoading(true)
    }
  },[])
  if(!isLoading){
    return <>
      <div style={{display: 'flex'}}>
        <datav.BorderBox8 style={{flex: '0 1 25%',height: '175px'}}>
          <datav.Loading>Loading...</datav.Loading>
        </datav.BorderBox8>
        <datav.BorderBox7 style={{flex: '0 1 50%',height: '175px'}}>
          <datav.Loading>Loading...</datav.Loading>
        </datav.BorderBox7>
        <datav.BorderBox8 reverse={true} style={{flex: '0 1 25%',height: '175px'}}>
          <datav.Loading>Loading...</datav.Loading>
        </datav.BorderBox8>
      </div>
    </>
  }else{
    return <>
      <div style={{display: 'flex'}}>
        <datav.BorderBox8 style={{flex: '0 1 25%',height: '175px'}}>
          <div style={{position:'absolute',top:'15px',left:'50%',transform:'translateX(-50%)',fontWeight:'bolder'}}>
            列表城市平均温度
          </div>
          <datav.WaterLevelPond config={averageTemperatureOption} style={{width: '100%', height: '175px'}} />
        </datav.BorderBox8>
        <datav.BorderBox7 style={{flex: '0 1 50%',height: '175px'}}>
          <div id='lineChart' style={{width: '100%',height: '150%',position: 'absolute',top: '-25%'}}></div>
        </datav.BorderBox7>
        <datav.BorderBox8 reverse={true} style={{flex: '0 1 25%',height: '175px'}}>
          <div style={{position:'absolute',top:'15px',left:'50%',transform:'translateX(-50%)',fontWeight:'bolder'}}>
            列表城市平均湿度
          </div>
          <datav.WaterLevelPond config={averageAQIOption} style={{width: '100%', height: '175px'}} />
        </datav.BorderBox8>
      </div>
    </>
  }
  
  
}

export default Bottom