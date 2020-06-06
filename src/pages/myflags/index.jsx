import React from 'react'
import { connect } from 'dva'

const MyFlags = (props) =>{
  return (
    <div>222</div>
  )
}

export default connect(({flag}) =>({
  flag
}))(MyFlags)