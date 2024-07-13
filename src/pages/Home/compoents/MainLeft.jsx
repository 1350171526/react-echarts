import * as datav from '@jiaminghi/data-view-react'
import '../style.scss'
function Left(){
  const sortChartOption = {
    data: [
      {
        name: '郑州',
        value: 55
      },
      {
        name: '开封',
        value: 120
      },
      {
        name: '洛阳',
        value: 78
      },
      {
        name: '平顶山',
        value: 66
      },
      {
        name: '安阳',
        value: 80
      },
      {
        name: '鹤壁',
        value: 80
      },
      {
        name: '新乡',
        value: 80
      },
      {
        name: '焦作',
        value: 80
      },
      {
        name: '濮阳',
        value: 80
      },
      {
        name: '许昌',
        value: 80
      },
      {
        name: '漯河',
        value: 80
      },
      {
        name: '三门峡',
        value: 80
      },
      {
        name: '南阳',
        value: 80
      }
    ],
    unit: '℃',
    carousel: 'single'
  }
  return <>
    <datav.BorderBox1 style={{width: '100%',height: '450px'}}>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <datav.ScrollRankingBoard config={sortChartOption} style={{width: '300px', height: '450px'}} />
      </div>
    </datav.BorderBox1>
  </>
}

export default Left
