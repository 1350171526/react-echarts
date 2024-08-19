import * as datav from '@jiaminghi/data-view-react'
import dayjs from 'dayjs'
import localeData from 'dayjs/plugin/localeData';
import zh from 'dayjs/locale/zh-cn';
function Title(){
  dayjs.extend(localeData);
  dayjs.locale(zh);
  return <>
    <div style={{display: 'flex',marginTop: '5px'}}>
      <div style={{position:'absolute',top:'20px',left:'43px', userSelect: 'none',}}>{dayjs().format('YYYY年M月D日 dddd')}</div>
      <datav.Decoration10 style={{width: '30%', height: '5px'}} />
      <datav.Decoration8 style={{width: '15%', height: '50px'}} />
      <datav.Decoration11 style={{width: '15%', height: '60px'}} >城市温度数据中心</datav.Decoration11>
      <datav.Decoration8 reverse={true} style={{width: '300px', height: '50px'}} />
      <datav.Decoration10 style={{width: '30%', height: '5px',transform: 'rotateY(180deg)'}} />
    </div>
    
  </>
}

export default Title