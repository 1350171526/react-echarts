import * as datav from '@jiaminghi/data-view-react'
function Title(){
  return <>
    <div style={{display: 'flex',marginTop: '5px'}}>
      <datav.Decoration10 style={{width: '30%', height: '5px'}} />
      <datav.Decoration8 style={{width: '15%', height: '50px'}} />
      <datav.Decoration11 style={{width: '15%', height: '60px'}} >智慧工厂数据中心</datav.Decoration11>
      <datav.Decoration8 reverse={true} style={{width: '300px', height: '50px'}} />
      <datav.Decoration10 style={{width: '30%', height: '5px',transform: 'rotateY(180deg)'}} />
    </div>
    
  </>
}

export default Title