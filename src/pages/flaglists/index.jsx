import React, {useEffect} from 'react'
import { connect } from 'dva'
import {Container} from '@material-ui/core'
import Flagitemlist from './components/flagitemlist'

const FlagList = (props)=>{
    useEffect(()=>{
        const {dispatch} = props
        dispatch({
            type: 'flag/getFlagList'
        })
    })

    return(
        <Flagitemlist />
    )
}

export default connect(({flag}) =>({
    flag
}))(FlagList)