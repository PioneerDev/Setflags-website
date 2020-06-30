import React,{useEffect} from 'react'
import { connect } from 'dva'
import Header from './Layouts/Header'
import Content from './Layouts/Content'

const MyFlags = (props) => {
    const {user:{userInfo},dispatch} = props
    useEffect(()=>{
        dispatch({
            type:'user/getUserInfo'
        })
    },[dispatch, userInfo])
    return (
        <div className="myflags-container">
            <Header userInfo={userInfo} />
            <Content />
        </div>
    )
}

export default connect(({ user }) => ({
    user
}))(MyFlags)
