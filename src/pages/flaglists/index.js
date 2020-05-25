import React, {useState, useEffect} from 'react'
import { connect } from 'dva'

const FlagList = (props)=>{
    useEffect(()=>{
        const {dispatch} = props
        dispatch({
            type: 'flag/getFlagList'
        })
    })

    return(
        <div>   
         hello,world!
        </div>
    )
}

export default connect(({flag}) =>({
    flag
}))(FlagList)