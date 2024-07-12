import Title from "./compoents/Title"
import MainLeft from './compoents/MainLeft'
import Main from "./compoents/Main"
import MainRight from './compoents/MainRight' 
import Bottom from './compoents/Bottom'
import * as datav from '@jiaminghi/data-view-react'
import './style.scss'
function Home(){
  return <>
    <div className="content">
      <div className="bg"></div>
        <datav.FullScreenContainer>
          <Title></Title>
          <div style={{display: 'flex',width: '100%'}}>
            <div style={{flex: '0 1 25%'}}><MainLeft></MainLeft></div>
            <div style={{flex: '0 1 50%'}}><Main></Main></div>
            <div style={{flex: '0 1 25%'}}><MainRight></MainRight></div>
          </div>
          <Bottom></Bottom>
        </datav.FullScreenContainer>
    </div>
  </>
}

export default Home 