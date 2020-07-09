import React from 'react'
import './index.less'
import Flagitem from '../flagitem'

export default (props) => {
  const {flagList} = props
  return (
    <div className="flaglist-container">
      {
        flagList.length>0&&flagList.map((ele,idx)=><Flagitem ele={ele} key={idx}/>)
      }     
    </div>
  )
}
