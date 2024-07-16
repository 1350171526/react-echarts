import * as datav from '@jiaminghi/data-view-react'
import '../style.scss'
import { useEffect, useState } from 'react'
function Left({baseWeather}){
  const [isLoading,setLoading] = useState(false)
  const data = baseWeather.map((item)=>{
    return {name:`${item.lives[0].city}`, value: parseInt(`${item.lives[0].temperature}`)}
  })

  const sortChartOption = {
    data: data,
    unit: '℃',
    carousel: 'single'
  }
  useEffect(()=>{
    if(baseWeather){
      setLoading(true)
    }
  },[baseWeather])
  if(isLoading){
    return <>
    <datav.BorderBox1 style={{width: '100%',height: '450px'}}>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <datav.ScrollRankingBoard config={sortChartOption} style={{width: '300px', height: '450px'}} />
      </div>
    </datav.BorderBox1>
    </>
  }else{
    return <datav.BorderBox1 style={{width: '100%',height: '450px'}}><datav.Loading>Loading...</datav.Loading></datav.BorderBox1>
  }
  
}

export default Left
