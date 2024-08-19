import * as datav from '@jiaminghi/data-view-react'
function Left({baseWeather,isloading}){
  const data = baseWeather.map((item)=>{
    return {name:`${item.lives[0].city}`, value: parseInt(`${item.lives[0].temperature}`)}
  })

  const sortChartOption = {
    data: data,
    unit: '℃',
    carousel: 'single'
  }

  if(!isloading){
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
