import * as datav from '@jiaminghi/data-view-react'
import * as echarts from 'echarts';
import china from  '@/assets/map/china.json'
import { getMap,chinaCityCodes } from '@/utils/getMap';
import { useEffect, useRef, useState, useMemo } from 'react';
import { message } from 'antd';

function Main({baseWeather,updateCode,updataMainCityCode}){
  const [map,setMap] = useState(china)
  const isClick = useRef(true)
  const weatherData = useMemo(() => {
    const result = baseWeather.map(item => {
      if(isClick.current){
        item.lives[0].name = item.lives[0].province; 
        delete item.lives[0].province;
      } else{
        item.lives[0].name = item.lives[0].city; 
      }
      return item.lives[0];
    });
    return result;
  }, [baseWeather]);
  const initMap = () => {
    setMap(china)
    updataMainCityCode([110000])
    updateCode(chinaCityCodes)
    isClick.current = true
  }
  useEffect(()=>{
    echarts.dispose(document.getElementById('mapContainer'))
    const chart = echarts.init(document.getElementById('mapContainer'));
    const option = {
      backgroundColor: '#0E2152',
      series: {
        type:'map',
        map: 'map',
        zoom: 1.2,
        data: weatherData,
        label: {
            show: true,
            color: '#fff',
            fontSize: 11
        },
        emphasis: {
          textStyle: {
            color: '#fff',
          },
          itemStyle: {
            areaColor: '#2386AD',
            borderWidth: 0
          }
        },
        selectedMode: false,
        itemStyle: {
          borderColor: '#5089EC',
          borderWidth: 1,
          areaColor: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.8,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(0, 102, 154, 0)'
              },
              {
                offset: 1,
                color: 'rgba(0, 102, 154, 0.4)'
              }
            ]
          }
        }
      },
      tooltip: {  
        trigger: 'item',
        formatter: function (params) {  
            if(!params.data) return 
            return `
              <div>${params.data.city}</div>
              <li>温度：${params.data.temperature}</li>
              <li>湿度：${params.data.humidity}%</li>
              <li>天气：${params.data.weather}</li>
              <li>风向：${params.data.winddirection}</li>
              <li>风力：${params.data.windpower}</li>
            `
        }  
      }, 

    }
    echarts.registerMap('map',map)
    chart.setOption(option)
    chart.on('click', function(params) {
      if (params.componentType === 'series') {
        if(!params.name || !isClick.current) return
        if(params.name === '台湾') {
          message.info('暂无台湾省天气信息');
          return
        }
        const getCode = china.features.find((item)=> item.properties.name === params.name)
        isClick.current = false
        const res = getMap(getCode.id)
        setMap(res)
        let codeArr = [];
        res.features.forEach((item)=>{
          codeArr.push(item.properties.adcode)
        })
        updateCode(codeArr)
        updataMainCityCode([res.features[0].properties.adcode])
      }
    });
  },[weatherData])
  return <>
    <div style={{width: '100%',height: '450px'}}>
      <datav.BorderBox10>
        {isClick.current ? null : <div onClick={initMap} style={{position: 'absolute', left: '10px', top: '8px', zIndex: 9999999,cursor:'pointer'}}>返回</div>} 
        <div id='mapContainer' style={{width: '100%',height: '100%', display: 'flex', justifyContent: 'center'}}>
        </div>
      </datav.BorderBox10>
    </div>
  </>
}

export default Main