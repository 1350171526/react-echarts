import * as datav from '@jiaminghi/data-view-react'
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
  return <>
      <div style={{display: 'flex'}}>
        <datav.BorderBox8 style={{flex: '0 1 25%',height: '175px'}}>
          <datav.WaterLevelPond config={averageTemperatureOption} style={{width: '100%', height: '175px'}} />
        </datav.BorderBox8>
        <datav.BorderBox7 style={{flex: '0 1 50%',height: '175px'}}></datav.BorderBox7>
        <datav.BorderBox8 reverse="{true}" style={{flex: '0 1 25%',height: '175px'}}>
          <datav.WaterLevelPond config={averageAQIOption} style={{width: '100%', height: '175px'}} />
        </datav.BorderBox8>
      </div>
  </>
}

export default Bottom