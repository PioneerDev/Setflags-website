import React,{useEffect} from 'react'
import { connect } from 'dva'
import Header from './Layouts/Header'
import Content from './Layouts/Content'

const MyFlags = (props) => {
    const {user:{userInfo},dispatch} = props
    console.log("MyFlags -> props", props)
    useEffect(()=>{
        if(!userInfo) {
            dispatch({
                type:'user/getUserInfo'
            })
        }
    },[dispatch, userInfo])
    return (
        <div className="myflags-container">
            {userInfo&&<Header userInfo={userInfo} />}
            <Content />
        </div>
    )
}

export default connect(({ user }) => ({
    user
}))(MyFlags)
