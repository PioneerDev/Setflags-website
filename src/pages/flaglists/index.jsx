import React, {useEffect} from 'react'
import { connect } from 'dva'
import Flagitemlist from './components/flagitemlist'

let currentPage = 1
let pageSize = 10
let total = null
const FlagList = (props)=>{
    const {flag:{flagList},dispatch} = props
    // const {dispatch} = props
    useEffect(()=>{
        console.log('flagList-->', flagList)
        if(flagList.length === 0) {
            dispatch({
                type: 'flag/getFlagList',
                payload:{
                    current_page:currentPage,
                    page_size:pageSize
                }
            }).then(totalRes=>{
            console.log("FlagList -> totalRes", totalRes)
                total=totalRes
            })
        }
    },[dispatch,flagList])

    window.onscroll= function(){
        //文档内容实际高度（包括超出视窗的溢出部分）
        var scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        //滚动条滚动距离
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        //窗口可视范围高度
        var clientHeight = window.innerHeight || Math.min(document.documentElement.clientHeight,document.body.clientHeight);
        
        if(clientHeight + scrollTop >= scrollHeight){
            console.log("===加载更多内容……===");
            console.log("total--->",total)
            console.log("window.onscroll -> currentPage*pageSize", currentPage*pageSize)
            //TODO: loading样式
            if(currentPage*pageSize<=total) {
                currentPage=currentPage+1
                console.log("window.onscroll -> currentPage", currentPage)
                dispatch({
                    type: 'flag/getFlagList',
                    payload:{
                        current_page:currentPage,
                        page_size:pageSize
                    }
                })
            }
        }
    }

    useEffect(()=>{
        return ()=>{
            console.log('unmount--->')
            currentPage = 0
            window.onscroll = null
            dispatch({
                type: 'flag/clearFlagList'
            })
        }
    },[dispatch])

    // console.log('props--->',props)
    return(
        <Flagitemlist flagList={flagList}/>
    )
}

export default connect(({flag}) =>({
    flag
}))(FlagList)