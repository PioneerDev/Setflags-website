import React, {useEffect} from 'react'
import { connect } from 'dva'
import Flagitemlist from './components/flagitemlist'

const FlagList = (props)=>{
    const {flag:{flagList}} = props
    const currentPage = 0
    const pageSize = 10
    useEffect(()=>{
        const {dispatch} = props
        console.log('flagList-->', flagList)
        if(flagList.length === 0) {
            dispatch({
                type: 'flag/getFlagList',
                payload:{
                    currentPage,
                    pageSize
                }
            })
        }
    })
    console.log('props--->',props)
    return(
        <Flagitemlist flagList={flagList}/>
    )
}

export default connect(({flag}) =>({
    flag
}))(FlagList)