import * as datav from '@jiaminghi/data-view-react'
import * as echarts from 'echarts';
import china from  '@/assets/map/china.json'
import { getMap,chinaCityCodes } from '@/utils/getMap';
import { useEffect, useRef, useState } from 'react';
import { message } from 'antd';

function Main({updateCode,updataMainCityCode}){
  // const flyLineChartOption = {
  //   points: [
  //     {
  //       name: '郑州',
  //       coordinate: [0.48, 0.35],
  //       icon: {
  //         src: require('@/assets/img/mapCenterPoint.png'),
  //         width: 30,
  //         height: 30
  //       },
  //       text: {
  //         color: '#fb7293'
  //       }
  //     },
  //     {
  //       name: '新乡',
  //       coordinate: [0.52, 0.23]
  //     },
  //     {
  //       name: '焦作',
  //       coordinate: [0.43, 0.29]
  //     },
  //     {
  //       name: '开封',
  //       coordinate: [0.59, 0.35]
  //     },
  //     {
  //       name: '许昌',
  //       coordinate: [0.53, 0.47]
  //     },
  //     {
  //       name: '平顶山',
  //       coordinate: [0.45, 0.54]
  //     },
  //     {
  //       name: '洛阳',
  //       coordinate: [0.36, 0.38]
  //     },
  //     {
  //       name: '周口',
  //       coordinate: [0.62, 0.55]
  //     },
  //     {
  //       name: '漯河',
  //       coordinate: [0.56, 0.56]
  //     },
  //     {
  //       name: '南阳',
  //       coordinate: [0.37, 0.66]
  //     },
  //     {
  //       name: '信阳',
  //       coordinate: [0.55, 0.81]
  //     },
  //     {
  //       name: '驻马店',
  //       coordinate: [0.55, 0.67]
  //     },
  //     {
  //       name: '济源',
  //       coordinate: [0.37, 0.29]
  //     },
  //     {
  //       name: '三门峡',
  //       coordinate: [0.20, 0.36]
  //     },
  //     {
  //       name: '商丘',
  //       coordinate: [0.76, 0.41]
  //     },
  //     {
  //       name: '鹤壁',
  //       coordinate: [0.59, 0.18]
  //     },
  //     {
  //       name: '濮阳',
  //       coordinate: [0.68, 0.17]
  //     },
  //     {
  //       name: '安阳',
  //       coordinate: [0.59, 0.10]
  //     }
  //   ],
  //   lines: [
  //     {
  //       source: '新乡',
  //       target: '郑州'
  //     },
  //     {
  //       source: '焦作',
  //       target: '郑州'
  //     },
  //     {
  //       source: '开封',
  //       target: '郑州'
  //     },
  //     {
  //       source: '许昌',
  //       target: '郑州'
  //     },
  //     {
  //       source: '平顶山',
  //       target: '郑州'
  //     },
  //     {
  //       source: '洛阳',
  //       target: '郑州'
  //     },
  //     {
  //       source: '周口',
  //       target: '郑州'
  //     },
  //     {
  //       source: '漯河',
  //       target: '郑州'
  //     },
  //     {
  //       source: '南阳',
  //       target: '郑州'
  //     },
  //     {
  //       source: '信阳',
  //       target: '郑州'
  //     },
  //     {
  //       source: '驻马店',
  //       target: '郑州'
  //     },
  //     {
  //       source: '济源',
  //       target: '郑州'
  //     },
  //     {
  //       source: '三门峡',
  //       target: '郑州'
  //     },
  //     {
  //       source: '商丘',
  //       target: '郑州'
  //     },
  //     {
  //       source: '鹤壁',
  //       target: '郑州'
  //     },
  //     {
  //       source: '濮阳',
  //       target: '郑州'
  //     },
  //     {
  //       source: '安阳',
  //       target: '郑州'
  //     }
  //   ],
  //   icon: {
  //     show: true,
  //     src: require('@/assets/img/mapPoint.png')
  //   },
  //   text: {
  //     show: true,
  //   },
  //   bgImgSrc: require('@/assets/img/map.jpg')
  // }
  const [map,setMap] = useState(china)
  const isClick = useRef(true)
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
      geo: {
        map: 'map',
        zoom: 1.2,
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

    }
    echarts.registerMap('map',map)
    chart.setOption(option)
    chart.on('click', function(params) {
      if (params.componentType === 'geo') {
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
  },[map])
  return <>
    <div style={{width: '100%',height: '450px'}}>
      <datav.BorderBox10>
        {isClick.current ? null : <div onClick={initMap} style={{position: 'absolute', left: '10px', top: '8px', zIndex: 9999999,cursor:'pointer'}}>返回</div>} 
        <div id='mapContainer' style={{width: '100%',height: '100%', display: 'flex', justifyContent: 'center'}}>
          {/* <datav.FlylineChartEnhanced  config={flyLineChartOption} style={{width: '100%', height: '100%'}} /> */}
        </div>
      </datav.BorderBox10>
    </div>
  </>
}

export default Main