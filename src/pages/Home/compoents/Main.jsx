import * as datav from '@jiaminghi/data-view-react'
function Main(){
  const flyLineChartOption = {
    centerPoint: [0.48, 0.35],
    points: [
      [0.52, 0.23],
      [0.43, 0.29],
      [0.59, 0.35],
      [0.53, 0.47],
      [0.45, 0.54],
      [0.36, 0.38],
      [0.62, 0.55],
      [0.56, 0.56],
      [0.37, 0.66],
      [0.55, 0.81],
      [0.55, 0.67],
      [0.37, 0.29],
      [0.20, 0.36],
      [0.76, 0.41],
      [0.59, 0.18],
      [0.68, 0.17],
      [0.59, 0.10]
    ],
    bgImgUrl: require('/img/flylineChart/map.jpg')
  }
  return <>
    <div style={{width: '100%',height: '450px'}}>
      <datav.BorderBox10>
        <datav.FlylineChart config={flyLineChartOption} style={{width: '100%', height: '100%'}} />
      </datav.BorderBox10>
    </div>
  </>
}

export default Main