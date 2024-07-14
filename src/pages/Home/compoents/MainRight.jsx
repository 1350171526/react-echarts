import * as datav from '@jiaminghi/data-view-react'
import { useEffect, useState } from 'react'
function Right(){
    const [circleChartOption, setCircleChartOption] = useState({})
    const [dynamicCircleChartOption, setDynamicCircleChartOption] = useState({})
    // 获取省会城市温度
    const getCircleChartOption = () => {
      setCircleChartOption({
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
            data: [ { name: 'itemA', value: 30, gradient: ['#37A1DA', '#37A2DA', '#FFDB5C', '#DD5145']}],
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
      ]})
    }
    // 获取温度最高的前五位城市温度
    const getDynamicCircleChartOption = () => {
      setDynamicCircleChartOption({
        data: [
          {
            name: '周口',
            value: 55
          },
          {
            name: '南阳',
            value: 120
          },
          {
            name: '西峡',
            value: 78
          },
          {
            name: '驻马店',
            value: 66
          },
          {
            name: '新乡',
            value: 80
          }
        ],
        color: ['#DD5145','#FFDB5C','#9FE6B8','#37A2DA','#32C5E9'],
        showOriginValue: true
      })
    }
  useEffect(()=>{
    getCircleChartOption()
    getDynamicCircleChartOption()
  },[])
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
}

export default Right