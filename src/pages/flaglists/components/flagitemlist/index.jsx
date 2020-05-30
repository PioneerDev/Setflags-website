import React from 'react'
import styles from './index.less'
import Flagitem from '../flagitem'

export default (props) => {
  const {flagList} = props
  console.log('flagList--->', flagList)
  return (
    <div className={styles.container}>
      {
        flagList.length>0&&flagList.map((ele,idx)=><Flagitem ele={ele} key={idx}/>)
      }
      
    </div>
  )
}
