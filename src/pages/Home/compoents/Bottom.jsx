import * as datav from '@jiaminghi/data-view-react'
import * as echarts from 'echarts';
import { useEffect } from 'react';
function Bottom(){
  const averageTemperatureOption = {
    data: [66],
    formatter: '{value}℃'
  }
  
  const averageAQIOption = {
    data: [66, 45],
    shape: 'roundRect',
    formatter: '{value}'
  }
  useEffect(()=>{
    const lineChart = document.getElementById('lineChart');
  const createLineChart = echarts.init(lineChart)
  const lineChartOption = {
    title: {
      text: '省会城市未来一周温度'
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} °C'
      }
    },
    series: [
      {
        name: 'Highest',
        type: 'line',
        data: [10, 11, 13, 11, 12, 12, 9],
        
      },
      {
        name: 'Lowest',
        type: 'line',
        data: [1, -2, 2, 5, 3, 2, 0],
        
      }
    ]
  };
  lineChartOption && createLineChart.setOption(lineChartOption)
  },[])
  
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
        <datav.BorderBox8 reverse="{true}" style={{flex: '0 1 25%',height: '175px'}}>
          <div style={{position:'absolute',top:'15px',left:'50%',transform:'translateX(-50%)',fontWeight:'bolder'}}>
            列表城市平均空气质量
          </div>
          <datav.WaterLevelPond config={averageAQIOption} style={{width: '100%', height: '175px'}} />
        </datav.BorderBox8>
      </div>
  </>
}

export default Bottom