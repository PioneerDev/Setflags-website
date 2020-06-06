import React from 'react'
import Flagitem from '../flagitem'

export default (props) => {
  const {flagList} = props
  console.log('flagList--->', flagList)
  return (
    <div className="flaglist-container">
      {
        flagList.length>0&&flagList.map((ele,idx)=><Flagitem ele={ele} key={idx}/>)
      }
      
    </div>
  )
}
