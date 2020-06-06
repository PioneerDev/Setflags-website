import React from 'react'
import { connect } from 'dva'
import './index.less'

const NewFlags = (props)=>{
  return(
    <div>
      111
    </div>
  )
}

export default connect(({flag})=>({flag}))(NewFlags)