import React, {useState, useEffect} from 'react'
import { connect } from 'dva'

const FlagList = (props)=>{
    useEffect(()=>{
        const {dispatch} = this.props
        dispatch({
            type: 'flag/getFlagList'
        })
    })

    return(
        <div>   
         1111
        </div>
    )
}

export default connect(({flag}) =>({
    flag
}))(FlagList)