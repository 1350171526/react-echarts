import * as datav from '@jiaminghi/data-view-react'
function Bottom(){
  return <>
      <div style={{display: 'flex'}}>
        <datav.BorderBox8 style={{flex: '0 1 50%',height: '175px'}}></datav.BorderBox8>
        <datav.BorderBox7 style={{flex: '0 1 25%',height: '175px'}}></datav.BorderBox7>
        <datav.BorderBox8 reverse="{true}" style={{flex: '0 1 25%',height: '175px'}}></datav.BorderBox8>
      </div>
  </>
}

export default Bottom